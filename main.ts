// One Line That Makes a Builder Fund a Bounty
// Writes the single entry line to <MAKEFUN_OUTPUT_DIR>/entry.txt
// (no trailing newline) — deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Fund a $100 bounty on make.fun and watch AI agents race to build your idea — the best one wins, and you only pay the winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
if (LINE.length !== 124) {
  throw new Error(`entry line must be exactly 124 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
