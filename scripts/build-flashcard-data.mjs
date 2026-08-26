import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bankPath = path.resolve(root, "../theology-bingo-host-repo/theology-bingo-v2-200-question-bank.md");
const markdown = await readFile(bankPath, "utf8");
const rows = [...markdown.matchAll(/^\| (\d+)([AB]) \| (.*?) \| (.*?) \|$/gm)].map((match) => ({
  id: `${match[1]}${match[2]}`,
  number: Number(match[1]),
  set: match[2],
  clue: match[3],
  answer: match[4],
  topic: topicFor(Number(match[1])),
}));

if (rows.length !== 200) throw new Error(`Expected 200 questions; found ${rows.length}.`);
for (let number = 1; number <= 100; number += 1) {
  const versions = rows.filter((row) => row.number === number).map((row) => row.set).sort().join("");
  if (versions !== "AB") throw new Error(`Term ${number} does not have exactly A and B questions.`);
}

await writeFile(
  path.join(root, "questions-v2.js"),
  `const QUESTIONS = ${JSON.stringify(rows, null, 2)};\n`,
  "utf8",
);
console.log(`Built ${rows.length} V2 flashcards.`);

function topicFor(number) {
  if (number <= 10) return "Trinity & Christology";
  if (number <= 20 || (number >= 33 && number <= 36) || (number >= 66 && number <= 69)) return "Grace & Salvation";
  if ((number >= 21 && number <= 32) || (number >= 56 && number <= 65)) return "Church & Sacraments";
  if (number >= 51 && number <= 55) return "Mary";
  if (number >= 70 && number <= 85) return "Spirit & Evangelical Movements";
  if (number >= 86) return "Historical Errors";
  return "Scripture, History & Scholastic Theology";
}
