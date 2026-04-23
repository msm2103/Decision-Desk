import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "Website and publication disclaimer for Decision Desk.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <Section eyebrow="Legal" title="Disclaimer">
      <div className="card text-slate-700 space-y-4">
        <p>All content is for informational and educational purposes only.</p>
        <p>No content on this site constitutes investment, legal, tax, or accounting advice.</p>
        <p>Views and opinions are subject to change without notice.</p>
        <p>No guarantee is made regarding outcomes, performance, or suitability for any specific objective.</p>
        <p>Users remain responsible for their own decisions, risk assessment, and implementation choices.</p>
      </div>
    </Section>
  );
}
