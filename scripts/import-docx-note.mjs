import { promises as fs } from "node:fs";
import path from "node:path";
import mammoth from "mammoth";
import PDFDocument from "pdfkit";

const root = process.cwd();

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function firstNonEmptyLine(lines) {
  return lines.find((line) => line.trim().length > 0)?.trim() ?? "";
}

function normalizeLines(text) {
  return text
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim());
}

function textToMarkdown(lines) {
  const body = lines.filter((line) => line.length > 0);
  return body.join("\n\n");
}

async function writePdf(filePath, title, lines) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });

  await new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 56, size: "A4" });
    const stream = fs.open(filePath, "w").then((handle) => handle.createWriteStream());

    stream
      .then((output) => {
        doc.pipe(output);
        doc.font("Helvetica-Bold").fontSize(18).text(title);
        doc.moveDown(1);
        doc.font("Helvetica").fontSize(11);
        lines.forEach((line) => {
          if (line.length === 0) {
            doc.moveDown(0.8);
          } else {
            doc.text(line, { lineGap: 3 });
            doc.moveDown(0.4);
          }
        });
        doc.end();
        output.on("finish", resolve);
        output.on("error", reject);
      })
      .catch(reject);
  });
}

async function main() {
  const sourceDocx = process.argv[2];
  const publishedAt = process.argv[3] ?? new Date().toISOString().slice(0, 10);

  if (!sourceDocx) {
    throw new Error("Usage: node scripts/import-docx-note.mjs <absolute-docx-path> [YYYY-MM-DD]");
  }

  const { value } = await mammoth.extractRawText({ path: sourceDocx });
  const rawLines = normalizeLines(value);
  const title = firstNonEmptyLine(rawLines) || "Portfolio Construction";
  const slug = slugify(title);
  const contentLines = rawLines.slice(rawLines.indexOf(title) + 1);
  const markdownBody = textToMarkdown(contentLines);

  const notePath = path.join(root, "content", "notes", `${slug}.md`);
  const assetDir = path.join(root, "public", "assets", "notes", slug);
  const pdfPath = path.join(assetDir, `${slug}.pdf`);
  const txtPath = path.join(assetDir, `${slug}.txt`);

  const noteMarkdown = `---
title: "${title.replace(/"/g, '\\"')}"
subtitle: "Portfolio construction note."
publishedAt: "${publishedAt}"
coverImage: "/images/notes/structural-hedge.svg"
tags:
  - Portfolio Construction
  - Fixed Income
excerpt: "Portfolio construction principles and implementation framework."
pdfUrl: "/assets/notes/${slug}/${slug}.pdf"
ttsEnabled: true
---

${markdownBody}
`;

  await fs.mkdir(assetDir, { recursive: true });
  await fs.writeFile(notePath, noteMarkdown, "utf8");
  await fs.writeFile(txtPath, `${title}\n\n${contentLines.join("\n")}\n`, "utf8");
  await writePdf(pdfPath, title, contentLines);

  console.log(`Created note: ${notePath}`);
  console.log(`Created PDF: ${pdfPath}`);
  console.log(`Created TXT: ${txtPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
