const CATEGORIES = ['Mixed', 'Bible', 'Church History', 'Doctrine', 'Creeds & Confessions'];

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allowedOrigins = String(env.ALLOWED_ORIGINS || '')
      .split(',')
      .map(value => value.trim())
      .filter(Boolean);
    const localOrigin = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
    const allowed = allowedOrigins.includes(origin) || (env.ALLOW_LOCALHOST === 'true' && localOrigin);
    const cors = {
      'Access-Control-Allow-Origin': allowed ? origin : 'null',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: allowed ? 204 : 403, headers: cors });
    }
    if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405, cors);
    if (!allowed) return json({ error: 'This website is not allowed to use the live AI service.' }, 403, cors);
    if (!env.OPENAI_API_KEY) return json({ error: 'The live AI service has not been given its API key.' }, 503, cors);

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'The request was not valid JSON.' }, 400, cors);
    }

    const category = CATEGORIES.includes(body.category) ? body.category : 'Mixed';
    const topic = clean(body.topic, 80);
    const count = Number(body.count) === 1 ? 1 : 5;
    const avoid = Array.isArray(body.avoid)
      ? body.avoid.map(value => clean(value, 240)).filter(Boolean).slice(-30)
      : [];
    const schema = {
      type: 'object',
      additionalProperties: false,
      required: ['questions'],
      properties: {
        questions: {
          type: 'array',
          minItems: count,
          maxItems: count,
          items: {
            type: 'object',
            additionalProperties: false,
            required: ['question', 'answer', 'choices', 'explanation', 'source_label', 'source_url', 'category'],
            properties: {
              question: { type: 'string' },
              answer: { type: 'string' },
              choices: { type: 'array', minItems: 4, maxItems: 4, items: { type: 'string' } },
              explanation: { type: 'string' },
              source_label: { type: 'string' },
              source_url: { type: 'string' },
              category: { type: 'string', enum: CATEGORIES.slice(1) },
            },
          },
        },
      },
    };
    const prompt = [
      `Create exactly ${count} challenging but fair multiple-choice question${count === 1 ? '' : 's'} for a Protestant-led, cross-tradition Christian Discord game room.`,
      `Requested category: ${category}.`,
      topic ? `Requested focus: ${topic}.` : '',
      count > 1 && category === 'Mixed' ? 'Distribute the batch across Bible, church history, doctrine, and creeds/confessions.' : '',
      'Use web search and verify the answer against a durable primary or authoritative source.',
      'The choices must contain the exact answer once and three plausible distractors.',
      'Give each question a concise explainer. Make every question distinct within this batch.',
      'Avoid sectarian caricatures, trick wording, vague prompts, and disputed claims presented as settled fact.',
      avoid.length ? `Do not repeat or closely paraphrase these recent questions: ${JSON.stringify(avoid)}.` : '',
    ].filter(Boolean).join('\n');

    let response;
    try {
      response = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: env.OPENAI_MODEL || 'gpt-5.4-mini',
          store: false,
          max_output_tokens: count === 1 ? 1800 : 6000,
          reasoning: { effort: 'low' },
          tools: [{ type: 'web_search_preview', search_context_size: 'medium' }],
          text: { format: { type: 'json_schema', name: 'live_theology_question_batch', strict: true, schema } },
          input: prompt,
        }),
      });
    } catch {
      return json({ error: 'OpenAI could not be reached. Please try again.' }, 502, cors);
    }

    if (!response.ok) {
      console.error('OpenAI request failed', response.status, await response.text());
      return json({ error: 'OpenAI could not create a question right now. Please try again.' }, 502, cors);
    }

    const payload = await response.json();
    const outputText = (payload.output || [])
      .flatMap(item => item.type === 'message' ? item.content || [] : [])
      .filter(item => item.type === 'output_text')
      .map(item => item.text)
      .join('');
    let result;
    try {
      result = JSON.parse(outputText);
    } catch {
      return json({ error: 'OpenAI returned an incomplete question batch. Please try again.' }, 502, cors);
    }
    const questions = result?.questions;
    const unique = new Set(Array.isArray(questions) ? questions.map(item => clean(item.question, 500).toLowerCase()) : []);
    if (!Array.isArray(questions) || questions.length !== count || unique.size !== count || !questions.every(validQuestion)) {
      return json({ error: 'The generated question batch did not pass validation. Please try again.' }, 502, cors);
    }
    return json({ questions }, 200, { ...cors, 'Cache-Control': 'no-store' });
  },
};

function clean(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function validQuestion(value) {
  if (!value || typeof value !== 'object') return false;
  if (!clean(value.question, 500) || !clean(value.answer, 200) || !clean(value.explanation, 1200)) return false;
  if (!Array.isArray(value.choices) || value.choices.length !== 4) return false;
  if (!value.choices.every(choice => typeof choice === 'string' && choice.trim())) return false;
  if (value.choices.filter(choice => choice === value.answer).length !== 1) return false;
  if (!CATEGORIES.slice(1).includes(value.category)) return false;
  try {
    const source = new URL(value.source_url);
    return source.protocol === 'https:' && Boolean(clean(value.source_label, 200));
  } catch {
    return false;
  }
}

function json(value, status, headers) {
  return new Response(JSON.stringify(value), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8' },
  });
}
