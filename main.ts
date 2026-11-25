import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const text = "Gone fishing for my own attention span. Back Monday, or whenever it bites.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(path.join(outDir, "entry.txt"), text, "utf8");
