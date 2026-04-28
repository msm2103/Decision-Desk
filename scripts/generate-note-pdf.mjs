import { promises as fs } from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

const root = process.cwd();
const noteSlug = process.argv[2] ?? "portfolio-construction-turning-trade-ideas-into-a-rates-portfolio";
const notePath = path.join(root, "content", "notes", `${noteSlug}.md`);
const outPath = path.join(
  root,
  "public",
  "assets",
  "notes",
  noteSlug,
  `${noteSlug}.pdf`,
);

function cleanInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/`(.*?)`/g, "$1")
    .trim();
}

function removeFrontMatter(markdown) {
  if (!markdown.startsWith("---")) return markdown;
  const parts = markdown.split("\n---\n");
  return parts.length > 1 ? parts.slice(1).join("\n---\n") : markdown;
}

function isSeparatorRow(cells) {
  return cells.every((cell) => /^:?-+:?$/.test(cell.replace(/\s+/g, "")));
}

async function generate() {
  const markdown = await fs.readFile(notePath, "utf8");
  const lines = removeFrontMatter(markdown).split("\n");

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  const outHandle = await fs.open(outPath, "w");

  await new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: "A4" });
    const stream = doc.pipe(outHandle.createWriteStream());

    const ensureSpace = (minSpace = 90) => {
      if (doc.y > doc.page.height - minSpace) {
        doc.addPage();
      }
    };

    let index = 0;
    while (index < lines.length) {
      const raw = lines[index];
      const line = raw.trim();
      if (!line) {
        doc.moveDown(0.5);
        index += 1;
        continue;
      }
      if (line === "---") {
        ensureSpace(40);
        doc.moveDown(0.6);
        doc.strokeColor("#CBD5E1").lineWidth(1).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
        doc.moveDown(0.8);
        index += 1;
        continue;
      }
      if (line.startsWith("# ")) {
        ensureSpace(110);
        doc.font("Helvetica-Bold").fontSize(20).fillColor("#0F172A").text(cleanInline(line.slice(2)));
        doc.moveDown(0.6);
        index += 1;
        continue;
      }
      if (line.startsWith("## ")) {
        ensureSpace(100);
        doc.font("Helvetica-Bold").fontSize(15).fillColor("#0F172A").text(cleanInline(line.slice(3)));
        doc.moveDown(0.45);
        index += 1;
        continue;
      }
      if (line.startsWith("### ")) {
        ensureSpace(90);
        doc.font("Helvetica-Bold").fontSize(13).fillColor("#1E293B").text(cleanInline(line.slice(4)));
        doc.moveDown(0.35);
        index += 1;
        continue;
      }
      if (line.startsWith("![")) {
        const match = line.match(/\]\((.*?)\)/);
        if (match) {
          const rel = match[1].replace(/^\//, "");
          const imagePath = path.join(root, "public", rel);
          try {
            ensureSpace(230);
            doc.image(imagePath, { fit: [495, 260], align: "center" });
            doc.moveDown(0.4);
          } catch {
            doc.font("Helvetica-Oblique").fontSize(10).fillColor("#64748B").text("[Image omitted in PDF]");
          }
        }
        index += 1;
        continue;
      }
      if (line.startsWith("|")) {
        const tableLines = [];
        while (index < lines.length && lines[index].trim().startsWith("|")) {
          tableLines.push(lines[index].trim());
          index += 1;
        }
        const parsedRows = tableLines
          .map((tableLine) =>
            tableLine
              .replace(/^\|/, "")
              .replace(/\|$/, "")
              .split("|")
              .map((cell) => cleanInline(cell)),
          )
          .filter((cells) => cells.length > 1);

        const rows = parsedRows.filter((cells) => !isSeparatorRow(cells));
        if (rows.length === 0) continue;

        const columnCount = Math.max(...rows.map((cells) => cells.length));
        const tableWidth = 495;
        const columnWidth = tableWidth / columnCount;
        const rowHeight = 24;

        for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
          ensureSpace(40);
          const cells = rows[rowIndex];
          for (let col = 0; col < columnCount; col += 1) {
            const x = 50 + (col * columnWidth);
            const y = doc.y;
            const cellText = cells[col] ?? "";
            const isHeader = rowIndex === 0;
            doc
              .rect(x, y, columnWidth, rowHeight)
              .fillAndStroke(isHeader ? "#F1F5F9" : "#FFFFFF", "#CBD5E1");
            doc
              .font(isHeader ? "Helvetica-Bold" : "Helvetica")
              .fontSize(10)
              .fillColor("#334155")
              .text(cellText, x + 6, y + 7, {
                width: columnWidth - 12,
                ellipsis: true,
                lineBreak: false,
              });
          }
          doc.y += rowHeight;
        }
        doc.moveDown(0.5);
        continue;
      }
      if (line.startsWith("> ")) {
        ensureSpace(80);
        doc.font("Helvetica-Oblique").fontSize(11).fillColor("#1E293B").text(cleanInline(line.slice(2)), {
          indent: 16,
        });
        index += 1;
        continue;
      }
      if (line.startsWith("- ")) {
        ensureSpace(70);
        doc.font("Helvetica").fontSize(11).fillColor("#334155").text(`• ${cleanInline(line.slice(2))}`);
        index += 1;
        continue;
      }

      ensureSpace(70);
      doc.font("Helvetica").fontSize(11).fillColor("#334155").text(cleanInline(line), { lineGap: 2 });
      index += 1;
    }

    doc.end();
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
  await outHandle.close();

  console.log(`Generated formatted PDF: ${outPath}`);
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
