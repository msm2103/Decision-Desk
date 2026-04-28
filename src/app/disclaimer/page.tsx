import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = false;

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
          Decision Desk is a personal publication by Mark Martin. All content reflects
          personal views only and does not represent the views of any employer, institution,
          client, counterparty, or affiliated organisation.
        </p>
        <p>
          Material on this site is provided for general information and educational purposes
          only. It is not investment advice, a personal recommendation, a research product,
          a solicitation, or an offer to provide investment, advisory, portfolio management,
          execution, or consulting services.
        </p>
        <p>
          Nothing on this site should be interpreted as a recommendation to buy, sell,
          hold, hedge, finance, or otherwise transact in any security, derivative, currency,
          rate, index, fund, or financial instrument.
        </p>
        <p>
          Trade examples, market notes, case studies, model snapshots, and portfolio-style
          illustrations are retrospective, selective, delayed, and educational unless clearly
          stated otherwise. They are not live trade communications, trading signals, or
          instructions to transact.
        </p>
        <p>
          Any analysis is based on public information, assumptions, and personal interpretation
          at the time of writing. Markets involve risk, conditions change, and outcomes are uncertain.
        </p>
        <p>
          Readers remain fully responsible for their own decisions, due diligence, risk management,
          and implementation choices. Professional advice should be sought where appropriate.
        </p>
        <p>
          No content on Decision Desk should be assumed to reflect current positioning, employer
          activity, confidential information, client activity, or any live investment process.
        </p>
      </div>
    </Section>
  );
}
