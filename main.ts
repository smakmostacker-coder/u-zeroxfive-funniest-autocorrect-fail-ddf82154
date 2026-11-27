import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one autocorrect fail: a text to Mom about a recipe, where
// autocorrect turns one innocent letter of "salt" into something that
// turns a family dinner into a very awkward question.
const entry =
  "Mom, the recipe says add a pinch of slut and bake for 30 minutes \u2014 is that right?";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
