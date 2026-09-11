import { promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const notesDir = path.join(root, "content", "notes");
const defaultCover = "/images/notes/macro-edition.svg";

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function yamlQuote(value) {
  return JSON.stringify(value);
}

function publishedAtFromPath(inputPath) {
  const base = path.basename(inputPath);
  const fromBase = base.match(/^(\d{4}-\d{2}-\d{2})/);
  if (fromBase) return fromBase[1];
  const parent = path.basename(path.dirname(inputPath));
  const fromParent = parent.match(/^(\d{4}-\d{2}-\d{2})/);
  if (fromParent) return fromParent[1];
  return new Date().toISOString().slice(0, 10);
}

function parseDraft(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").replace(/^\uFEFF/, "").trimStart().split("\n");
  let title = "";
  let subtitle = "";
  let index = 0;

  if (lines[0]?.startsWith("# ")) {
    title = lines[0].slice(2).trim();
    index = 1;
  }

  while (index < lines.length && lines[index].trim() === "") index += 1;

  const italic = lines[index]?.match(/^\*(.+)\*$/);
  if (italic) {
    subtitle = italic[1].trim();
    index += 1;
  }

  const body = lines.slice(index).join("\n").trim();
  const paragraphs = body
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  let excerpt = "";
  for (const paragraph of paragraphs) {
    if (
      paragraph.startsWith("#") ||
      paragraph.startsWith("|") ||
      paragraph.startsWith(">") ||
      paragraph.startsWith("**Information cutoff")
    ) {
      continue;
    }
    excerpt = paragraph
      .replace(/\s+/g, " ")
      .replace(/\^[0-9]+\b/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (excerpt.length > 280) {
      excerpt = `${excerpt.slice(0, 277).replace(/\s+\S*$/, "")}…`;
    }
    break;
  }

  return { title, subtitle, body, excerpt };
}

function prepareCompanion(markdown) {
  const text = markdown.replace(/\r\n/g, "\n").replace(/^\uFEFF/, "").trim();
  if (!text) return "";
  const lines = text.split("\n");
  if (lines[0]?.startsWith("# ")) {
    lines[0] = `## ${lines[0].slice(2).trim()}`;
  }
  return lines.join("\n").trim();
}

async function resolveArticlePath(inputPath) {
  const stats = await fs.stat(inputPath);
  if (stats.isDirectory()) {
    const articlePath = path.join(inputPath, "A_article_draft.md");
    await fs.access(articlePath);
    return { articlePath, editionDir: inputPath };
  }

  const filename = path.basename(inputPath);
  if (filename.toLowerCase() === "a_article_draft.md" || filename.toLowerCase().endsWith(".md")) {
    return { articlePath: inputPath, editionDir: path.dirname(inputPath) };
  }

  throw new Error("Pass an edition folder or an A_article_draft.md file.");
}

function buildFrontMatter({ title, subtitle, publishedAt, excerpt }) {
  return [
    "---",
    `title: ${yamlQuote(title)}`,
    `subtitle: ${yamlQuote(subtitle)}`,
    `publishedAt: ${yamlQuote(publishedAt)}`,
    `coverImage: ${yamlQuote(defaultCover)}`,
    "tags:",
    "  - Macro",
    `excerpt: ${yamlQuote(excerpt)}`,
    "ttsEnabled: true",
    "---",
    "",
  ].join("\n");
}

function runManifest() {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [path.join(root, "scripts", "generate-notes-manifest.mjs")], {
      cwd: root,
      stdio: "inherit",
    });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`notes:manifest exited with ${code}`));
    });
  });
}

async function main() {
  const input = process.argv[2];
  if (!input) {
    console.error("Usage: node scripts/import-edition.mjs <edition-folder-or-A_article_draft.md>");
    process.exit(1);
  }

  const resolvedInput = path.resolve(input);
  const { articlePath, editionDir } = await resolveArticlePath(resolvedInput);
  const draft = await fs.readFile(articlePath, "utf8");
  const parsed = parseDraft(draft);

  if (!parsed.title) {
    throw new Error("Could not find an H1 title in the article draft.");
  }

  let body = parsed.body;
  const companionPath = path.join(editionDir, "D_the_traders_take.md");
  try {
    const companion = await fs.readFile(companionPath, "utf8");
    const prepared = prepareCompanion(companion);
    if (prepared) {
      body = `${body}\n\n---\n\n${prepared}`;
    }
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code !== "ENOENT") {
      throw error;
    }
  }

  const publishedAt = publishedAtFromPath(editionDir);
  const slug = slugify(parsed.title);
  if (!slug) {
    throw new Error("Could not derive a slug from the article title.");
  }

  const excerpt = parsed.excerpt || parsed.subtitle || parsed.title;
  const output = `${buildFrontMatter({
    title: parsed.title,
    subtitle: parsed.subtitle || "",
    publishedAt,
    excerpt,
  })}${body}\n`;

  await fs.mkdir(notesDir, { recursive: true });
  const outputPath = path.join(notesDir, `${slug}.md`);
  await fs.writeFile(outputPath, output, "utf8");
  await runManifest();
  console.log(`Imported ${slug} -> ${outputPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
