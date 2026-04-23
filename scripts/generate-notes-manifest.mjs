import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const notesDir = path.join(root, "content", "notes");
const outDir = path.join(root, "src", "generated");
const outFile = path.join(outDir, "notes-manifest.json");

async function generate() {
  const filenames = await fs.readdir(notesDir);
  const notes = await Promise.all(
    filenames
      .filter((filename) => filename.endsWith(".md"))
      .sort()
      .map(async (filename) => {
        const source = await fs.readFile(path.join(notesDir, filename), "utf8");
        return {
          slug: filename.replace(/\.md$/, ""),
          source,
        };
      }),
  );

  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(outFile, `${JSON.stringify(notes, null, 2)}\n`, "utf8");
  console.log(`Generated ${notes.length} notes in ${outFile}`);
}

generate().catch((error) => {
  console.error("Failed to generate notes manifest:", error);
  process.exit(1);
});
