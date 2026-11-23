import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The vacuum's alibi: one original sentence, written for this entry.
const excuse =
  "I left that corner untouched because my sensors certified it spotless, and I have decided to believe them, since the alternative is admitting I lost a twenty-minute argument with a rug.";

// Guard: the entry must be exactly one sentence of 1-200 characters.
const terminators = excuse.match(/[.!?]/g) ?? [];
if (
  excuse.trim().length === 0 ||
  [...excuse].length > 200 ||
  terminators.length !== 1 ||
  !excuse.trimEnd().endsWith(".")
) {
  throw new Error("entry.txt must hold exactly one sentence of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
