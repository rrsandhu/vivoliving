import { pdf } from "pdf-to-img";
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const PDF_DIR = join(ROOT, "public", "unit");
const OUT_DIR = join(ROOT, "public", "unit", "images");
mkdirSync(OUT_DIR, { recursive: true });

const files = [
  "STUDIO-A","STUDIO-B",
  "1B-E1","1B-E2","1B-F","1B-G1","1B-H1","1B-X","1B-Y",
  "1BD-C1","1BD-C2","1BD-G2","1BD-K",
  "2B-M1-M2","2B-M3","2B-N","2B-O","2B-P","2B-Q","2B-R1","2B-S","2B-U",
  "2BD-D","2BD-T1","2BD-T2",
  "3B-W",
];

for (const name of files) {
  const pdfPath = join(PDF_DIR, `${name}.pdf`);
  const outPath = join(OUT_DIR, `${name}.png`);

  try {
    const doc = await pdf(pdfPath, { scale: 2 });
    for await (const image of doc) {
      writeFileSync(outPath, image);
      break; // first page only
    }
    console.log(`✓ ${name}.png`);
  } catch (err) {
    console.error(`✗ ${name}: ${err.message}`);
  }
}

console.log("\nDone.");
