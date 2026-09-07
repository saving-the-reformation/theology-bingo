import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const outputPath = new URL('../fresh-prompts.js', import.meta.url);
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) throw new Error('OPENAI_API_KEY is required. Add it as a GitHub Actions repository secret.');

const source = await readFile(outputPath, 'utf8');
const existing = JSON.parse(source.replace(/^const FRESH_PROMPTS = /, '').replace(/;\s*$/, ''));
const existingQuestions = existing.map(item => item.question);
const schema = {
  type: 'object',
  additionalProperties: false,
  required: ['questions'],
  properties: {
    questions: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false,
        required: ['question', 'answer', 'choices', 'explanation', 'source_label', 'source_url', 'category'],
        properties: {
          question: { type: 'string' },
          answer: { type: 'string' },
          choices: { type: 'array', items: { type: 'string' } },
          explanation: { type: 'string' },
          source_label: { type: 'string' },
          source_url: { type: 'string' },
          category: { type: 'string', enum: ['Bible', 'Church History', 'Doctrine', 'Creeds & Confessions'] }
        }
      }
    }
  }
};

const response = await fetch('https://api.openai.com/v1/responses', {
  method: 'POST',
  headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'gpt-5.4-mini',
    store: false,
    max_output_tokens: 6000,
    reasoning: { effort: 'low' },
    tools: [{ type: 'web_search_preview', search_context_size: 'medium' }],
    text: { format: { type: 'json_schema', name: 'fresh_theology_questions', strict: true, schema } },
    input: `Create exactly 12 challenging but fair multiple-choice questions for a Protestant-led, cross-tradition Christian Discord game room. Cover Bible, church history, doctrine, and creeds/confessions evenly. Use web search to verify every answer against a durable primary or authoritative source. Each choices array must contain the exact answer once and three plausible distractors. Avoid sectarian caricatures, trick wording, disputed claims presented as settled fact, and all questions already in this list:\n${JSON.stringify(existingQuestions)}. Return only the requested structured data.`
  })
});

if (!response.ok) throw new Error(`OpenAI request failed (${response.status}): ${await response.text()}`);
const payload = await response.json();
const outputText = (payload.output || []).flatMap(item => item.type === 'message' ? item.content || [] : []).filter(item => item.type === 'output_text').map(item => item.text).join('');
if (payload.status !== 'completed' || !outputText) throw new Error(`OpenAI response was not completed: ${payload.status || 'unknown'}`);
const generated = JSON.parse(outputText).questions;
const normalizedExisting = new Set(existingQuestions.map(normalize));
const accepted = [];
for (const item of generated) {
  const normalized = normalize(item.question);
  if (normalizedExisting.has(normalized) || accepted.some(candidate => normalize(candidate.question) === normalized)) continue;
  if (item.question.length < 25 || item.question.length > 240 || item.explanation.length < 30 || item.explanation.length > 420) continue;
  if (item.answer.length > 120 || item.source_label.length > 120 || item.source_url.length > 500) continue;
  if (item.choices.length !== 4 || item.choices.some(choice => !choice || choice.length > 120) || new Set(item.choices).size !== 4 || item.choices.filter(choice => choice === item.answer).length !== 1) continue;
  let url; try { url = new URL(item.source_url); } catch { continue; }
  if (url.protocol !== 'https:') continue;
  accepted.push({
    id: `bot-${new Date().toISOString().slice(0, 10)}-${createHash('sha256').update(item.question).digest('hex').slice(0, 10)}`,
    ...item
  });
}
if (accepted.length < 8) throw new Error(`Only ${accepted.length} of 12 generated questions passed validation; refusing a low-quality update.`);

const updated = [...existing, ...accepted];
await writeFile(outputPath, `const FRESH_PROMPTS = ${JSON.stringify(updated, null, 2)};\n`);
console.log(`Added ${accepted.length} verified fresh questions (${updated.length} total).`);

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}
