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

    if (GAME_FORMATS[body.format]) {
      return createGameBatch(body, env, cors);
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

const GAME_FORMATS = {
  who: 'Bible Who Am I: one precise first-person clue paragraph; answer is the biblical person; explanation gives identity and significance.',
  said: 'Who Said It: prompt is a short attributable quotation; answer is the speaker or document; context explains occasion and significance; hint is specific; era is one of Ancient Church, Medieval Church, Reformation, Post-Reformation, Modern Church.',
  guess: 'Guess the Theologian: answer is the theologian; clues contains exactly four clues ordered hard to easy; explanation gives significance.',
  jeopardy: 'Theology Jeopardy: prompt is an answer-style clue; answer is the expected question-form response; category is a narrow category; points is 200, 400, 600, 800, or 1000.',
  passages: 'Difficult Bible Passages: context is the Bible reference; prompt is a focused interpretation question; explanation is a balanced interpretation guide.',
  trivia: 'Bible Trivia: prompt is a precise question; choices contains exactly four options including the exact answer once; explanation teaches why.',
  scavenge: 'Scripture Scavenger Hunt: prompt is a debatable claim that can be defended or challenged from Scripture; explanation is a study trail naming passages for both sides.',
  simple: 'Explain It Simply: prompt is a theological term; answer is a plain-language model answer; context is a memorable analogy with its limit; hint is a biblical anchor.',
  rather: 'Christian Would You Rather: prompt gives two historically or biblically concrete options with enough setting and stakes to choose; explanation gives focused follow-up questions.',
};

async function createGameBatch(body, env, cors) {
  const format = body.format;
  const count = Math.max(1, Math.min(20, Number(body.count) || 5));
  const avoid = Array.isArray(body.avoid) ? body.avoid.map(value => clean(value, 300)).filter(Boolean).slice(-40) : [];
  const item = {
    type: 'object', additionalProperties: false,
    required: ['prompt','answer','explanation','choices','clues','context','hint','era','category','points','source_label','source_url'],
    properties: {
      prompt:{type:'string'}, answer:{type:'string'}, explanation:{type:'string'},
      choices:{type:'array',items:{type:'string'}}, clues:{type:'array',items:{type:'string'}},
      context:{type:'string'}, hint:{type:'string'}, era:{type:'string'}, category:{type:'string'},
      points:{type:'number'}, source_label:{type:'string'}, source_url:{type:'string'},
    },
  };
  const schema = {type:'object',additionalProperties:false,required:['items'],properties:{items:{type:'array',minItems:count,maxItems:count,items:item}}};
  const prompt = [
    `Create exactly ${count} fresh rounds for this Christian Discord game format: ${GAME_FORMATS[format]}`,
    'The room is Protestant-led and cross-tradition. Make prompts challenging, specific, clear, memorable, and suitable for friendly voice-chat play.',
    'Use web search. Every item must have one durable primary or authoritative HTTPS source. Never invent a quotation or source.',
    'Fill every schema field. Use empty strings and empty arrays for fields the selected format does not use; use 0 for unused points.',
    format === 'trivia' ? 'Each choices array must have exactly four distinct choices and contain the exact answer exactly once.' : 'Use an empty choices array unless this format requires choices.',
    format === 'guess' ? 'Each clues array must have exactly four useful clues ordered from difficult to easy.' : 'Use an empty clues array unless this format requires clues.',
    'Avoid vague questions, sectarian caricatures, trivia based on uncertain claims, and repeats or close paraphrases.',
    avoid.length ? `Do not repeat or closely paraphrase: ${JSON.stringify(avoid)}.` : '',
  ].filter(Boolean).join('\n');
  let response;
  try {
    response = await fetch('https://api.openai.com/v1/responses', {
      method:'POST', headers:{'Authorization':`Bearer ${env.OPENAI_API_KEY}`,'Content-Type':'application/json'},
      body:JSON.stringify({model:env.OPENAI_MODEL||'gpt-5.4-mini',store:false,max_output_tokens:Math.min(20000,2000+count*1000),reasoning:{effort:'low'},tools:[{type:'web_search_preview',search_context_size:'medium'}],text:{format:{type:'json_schema',name:'game_specific_batch',strict:true,schema}},input:prompt}),
    });
  } catch { return json({error:'OpenAI could not be reached. Please try again.'},502,cors); }
  if (!response.ok) { console.error('OpenAI game batch failed',response.status,await response.text()); return json({error:'OpenAI could not create this game batch right now.'},502,cors); }
  const payload=await response.json();
  const outputText=(payload.output||[]).flatMap(part=>part.type==='message'?part.content||[]:[]).filter(part=>part.type==='output_text').map(part=>part.text).join('');
  let result; try { result=JSON.parse(outputText); } catch { return json({error:'OpenAI returned an incomplete game batch.'},502,cors); }
  if (!Array.isArray(result?.items)||result.items.length!==count||!result.items.every(value=>validGameItem(value,format))) return json({error:'The generated game batch did not pass validation. Please try again.'},502,cors);
  return json({format,items:result.items},200,{...cors,'Cache-Control':'no-store'});
}

function validGameItem(value, format) {
  if (!value||typeof value!=='object'||!clean(value.prompt,700)||!clean(value.explanation,1600)||!clean(value.source_label,200)) return false;
  if (!Array.isArray(value.choices)||!Array.isArray(value.clues)||!Number.isFinite(value.points)) return false;
  try { if (new URL(value.source_url).protocol!=='https:') return false; } catch { return false; }
  if (format==='trivia' && (value.choices.length!==4||value.choices.filter(choice=>choice===value.answer).length!==1)) return false;
  if (format==='guess' && (value.clues.length!==4||!clean(value.answer,200))) return false;
  return true;
}

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
