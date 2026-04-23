import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const contributorsPath = path.join(
  root,
  "src",
  "data",
  "guest-pms",
  "contributors.json",
);
const tradesPath = path.join(root, "src", "data", "guest-pms", "trades.json");

function parseArg(flag) {
  const index = process.argv.indexOf(flag);
  if (index === -1 || !process.argv[index + 1]) {
    return "";
  }
  return process.argv[index + 1];
}

async function updateFile(filePath, updater) {
  const source = await fs.readFile(filePath, "utf8");
  const payload = JSON.parse(source);
  const updated = updater(payload);
  await fs.writeFile(filePath, `${JSON.stringify(updated, null, 2)}\n`, "utf8");
}

async function approve() {
  const contributorSlug = parseArg("--contributor");
  const tradeId = parseArg("--trade-id");

  if (!contributorSlug && !tradeId) {
    console.error(
      "Provide --contributor <slug> and/or --trade-id <id> to approve.",
    );
    process.exit(1);
  }

  if (contributorSlug) {
    let matched = false;
    await updateFile(contributorsPath, (contributors) =>
      contributors.map((contributor) => {
        if (contributor.slug !== contributorSlug) {
          return contributor;
        }
        matched = true;
        return { ...contributor, moderationStatus: "approved" };
      }),
    );
    if (!matched) {
      console.error(`Contributor slug not found: ${contributorSlug}`);
      process.exit(1);
    }
    console.log(`Approved contributor: ${contributorSlug}`);
  }

  if (tradeId) {
    let matched = false;
    await updateFile(tradesPath, (trades) =>
      trades.map((trade) => {
        if (trade.id !== tradeId) {
          return trade;
        }
        matched = true;
        return { ...trade, moderationStatus: "approved" };
      }),
    );
    if (!matched) {
      console.error(`Trade id not found: ${tradeId}`);
      process.exit(1);
    }
    console.log(`Approved trade: ${tradeId}`);
  }
}

approve().catch((error) => {
  console.error("Approval script failed:", error);
  process.exit(1);
});
