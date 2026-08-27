import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hostRoot = path.resolve(root, "../theology-bingo-host-repo");

const definitions = [
  {
    key: "creeds",
    title: "Creeds, Councils & Christology",
    shortTitle: "Creeds & Christology",
    file: "theology-bingo-creeds-50.md",
    topicFor(number) {
      if (number <= 12) return "Trinity";
      if (number <= 30) return "Christology";
      if (number <= 37) return "Ecumenical Councils";
      return "Historical Errors";
    },
  },
  {
    key: "grace",
    title: "Grace, Sacraments & the Church",
    shortTitle: "Grace & the Church",
    file: "theology-bingo-grace-church-50.md",
    topicFor(number) {
      if (number <= 7) return "Covenant & Fall";
      if (number <= 18) return "Grace & Election";
      if (number <= 33) return "Atonement & Salvation";
      if (number <= 42) return "Sacraments";
      return "Church & Worship";
    },
  },
];

const decks = {};
for (const definition of definitions) {
  const markdown = await readFile(path.join(hostRoot, definition.file), "utf8");
  const questions = [...markdown.matchAll(/^\| (\d+) \| (.*?) \| (.*?) \|$/gm)].map((match) => ({
    id: match[1],
    number: Number(match[1]),
    clue: match[2],
    answer: match[3],
    topic: definition.topicFor(Number(match[1])),
  }));

  if (questions.length !== 50) {
    throw new Error(`${definition.file}: expected 50 questions; found ${questions.length}.`);
  }
  if (new Set(questions.map((question) => question.answer.toLowerCase())).size !== 50) {
    throw new Error(`${definition.file}: answers must be unique.`);
  }
  if (questions.some((question, index) => question.number !== index + 1)) {
    throw new Error(`${definition.file}: question numbers must run from 1 through 50.`);
  }

  decks[definition.key] = {
    title: definition.title,
    shortTitle: definition.shortTitle,
    questions,
  };
}

await writeFile(
  path.join(root, "themed-decks.js"),
  `const THEMED_DECKS = ${JSON.stringify(decks, null, 2)};\n`,
  "utf8",
);
console.log(`Built ${Object.keys(decks).length} themed decks with 50 questions each.`);
