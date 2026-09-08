# Live AI Game Host

The Game Room can request brand-new, researched material whenever a player presses an AI batch button. The separate Live AI Host makes general multiple-choice rounds, while supported games make five prompts in their own format: Bible Who Am I, Who Said It, Guess the Theologian, Theology Jeopardy, Difficult Bible Passages, Bible Trivia, Scripture Scavenger Hunt, Explain It Simply, and Christian Would You Rather. The public page calls a small Cloudflare Worker, and the Worker calls OpenAI. The OpenAI API key stays in Cloudflare's encrypted secrets and never appears in the webpage or repository.

## One-time connection

1. Create a project API key at <https://platform.openai.com/api-keys> and set a modest project budget or spend alert.
2. Create or sign in to a Cloudflare account.
3. From this repository, run `npx wrangler login` and then `npx wrangler secret put OPENAI_API_KEY`.
4. Deploy with `npx wrangler deploy`.
5. Copy the resulting `https://...workers.dev` address into `live-ai-config.js`.
6. Publish the repository. The Live AI card will change from **Ready for connection** to **Connected**.

`ALLOWED_ORIGINS` in `wrangler.jsonc` restricts browser access to the published Game Room. For local testing, temporarily set `ALLOW_LOCALHOST` to `true`; turn it off again before deployment.

Before sharing the endpoint widely, also enable a conservative Cloudflare rate-limit rule for the Worker route. Browser origin checks prevent ordinary cross-site calls, but they are not a substitute for rate limiting against direct automated requests.

## What happens during play

- The host can select a category in the general AI Host, or open a supported game and press **Create 5 fresh AI prompts**.
- The endpoint asks OpenAI to search for authoritative sources and return the requested structured batch.
- Both the endpoint and webpage validate the question before showing it.
- The answer, explanation, and source stay hidden until the group answers.
- Generated game prompts join that game's normal unseen queue and checkmark flow. The browser also remembers recent AI prompts and sends them as a no-repeat list with the next request.

Each generated round uses the OpenAI API and may incur a small charge. Keep the API project separate from personal experiments, monitor usage, and set a budget appropriate for the server.
