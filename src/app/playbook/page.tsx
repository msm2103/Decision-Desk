import { PlaybookUpdates } from "@/components/PlaybookUpdates";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Playbook",
  description:
    "Portfolio updates from DD, including positioning changes, performance snapshots, and decision process commentary.",
  path: "/playbook",
});

export default function PlaybookPage() {
  return (
    <Section
      eyebrow="Playbook"
      title="Portfolio updates and performance snapshots"
      description="A transparent look at DD's active positions, recent exits, and equity growth"
    >
      <PlaybookUpdates />
    </Section>
  );
}
