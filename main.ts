import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one autocorrect fail: a text to Mom where autocorrect swaps
// one letter of "salt" and turns a family dinner into a very awkward
// question. The joke is the typo, not the word itself.
const entry =
  "Mom, the recipe says add a pinch of slut and bake 30 minutes \u2014 is that right?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Guard: the entry must stay one line and under the 200-char cap.
if (entry.includes("\n") || entry.length > 200) throw new Error("entry invalid");
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
