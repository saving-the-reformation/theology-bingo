# Fresh Question Bot

This is the scheduled question-bank updater. For questions generated immediately during play, use the separate [Live AI Game Host setup](LIVE_AI_SETUP.md).

The Game Room includes a `Fresh Bot Questions` deck backed by `fresh-prompts.js`.
Every Monday, the `Refresh Game Room questions` GitHub Actions workflow asks OpenAI for 12 new source-linked questions, verifies their structure, rejects duplicates, and commits the accepted questions to the site.

## One-time setup

1. Create an OpenAI API key for this project.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions**.
3. Add a repository secret named `OPENAI_API_KEY`.
4. Open **Actions → Refresh Game Room questions → Run workflow** for the first batch.

The API key is read only inside GitHub Actions. It is never included in the public Game Room or committed to the repository.

The weekly schedule runs Mondays at 15:17 UTC. A failed or low-quality generation does not alter the question bank. Each prompt includes an answer, four distinct choices, an explanation, a category, and an HTTPS source link.
