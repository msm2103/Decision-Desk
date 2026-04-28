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
        <p>
          All content on Decision Desk reflects personal views only and does not
          represent the views of any employer, institution, or affiliated organisation.
        </p>
        <p>
          Material is provided for general information and educational purposes only.
          It is not investment advice, a recommendation, a solicitation, or an offer
          of investment services.
        </p>
        <p>
          Trade examples, case studies, and any portfolio-style snapshots are
          illustrative only. They are not live trade communications and should not be
          interpreted as instructions to transact.
        </p>
        <p>
          Markets involve risk and outcomes are uncertain. Users remain fully responsible
          for their own decisions, due diligence, and implementation choices.
        </p>
      </div>
    </Section>
  );
}
