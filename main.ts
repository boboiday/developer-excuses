import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The deploy passed staging because staging has no users, no data, and no opinions — production has all three.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
