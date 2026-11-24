import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LINE =
  "The deploy passed staging because staging has no users, no data, and no opinions — production has all three.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");

// Read back what was written and confirm it is exactly one non-empty line.
// This catches a truncated or empty output file instead of silently passing.
const written = readFileSync("/output/entry.txt", "utf8").split("\n").filter((l) => l.length > 0);
if (written.length !== 1 || written[0] !== LINE) {
  throw new Error(`entry.txt must contain exactly the entry line, got ${written.length} non-empty line(s)`);
}
