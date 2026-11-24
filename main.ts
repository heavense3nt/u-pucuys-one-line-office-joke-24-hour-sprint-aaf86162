// One-Line Office Joke: 24-Hour Sprint
// Writes a single one-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The text is fixed and deterministic: every run writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import * as path from "node:path";

const JOKE =
  "HR says we're a family here, so I asked for a raise and got grounded.";

const repoRoot = path.dirname(fileURLToPath(import.meta.url));
const rawOut = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
const outDir = path.isAbsolute(rawOut)
  ? rawOut
  : path.join(repoRoot, rawOut);

mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
