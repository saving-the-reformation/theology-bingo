import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bankPath = path.resolve(root, "../theology-bingo-host-repo/theology-bingo-curated-50.md");
const markdown = await readFile(bankPath, "utf8");
const rows = [...markdown.matchAll(/^\| (\d+) \| (.*?) \| (.*?) \|$/gm)].map((match) => ({
  id: match[1],
  number: Number(match[1]),
  clue: match[2],
  answer: match[3],
  topic: topicFor(Number(match[1])),
}));

if (rows.length !== 50) throw new Error(`Expected 50 questions; found ${rows.length}.`);

await writeFile(
  path.join(root, "questions-v2.js"),
  `const QUESTIONS = ${JSON.stringify(rows, null, 2)};\n`,
  "utf8",
);
console.log(`Built ${rows.length} curated flashcards.`);

function topicFor(number) {
  if (number <= 10) return "Trinity & Christology";
  if (number <= 20) return "Grace & Salvation";
  if (number <= 30) return "Church & Sacraments";
  if (number <= 35) return "Mary";
  if (number <= 44) return "Spirit & Evangelical Movements";
  return "Historical Errors";
}
