import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "About Mark Martin, author of Decision Desk notes and case studies on fixed income markets.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Mark Martin"
        description="Personal publication under the Decision Desk imprint."
      >
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Mark Martin writes on fixed income markets from experience spanning
            hedge funds, insurance ALM, bank treasury risk, and sell-side rates derivatives.
            The focus is research quality, clear frameworks, and practical market interpretation.
          </p>
        </div>
      </Section>

      <Section eyebrow="Expertise" title="Core market focus">
        <div className="card max-w-4xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Developed-market rates, relative value, duration and curve structure,
            risk framing, and implementation choices under real-world constraints.
          </p>
        </div>
      </Section>

      <Section eyebrow="Philosophy" title="Approach to research">
        <div className="card max-w-4xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Markets are treated as probabilistic systems. The emphasis is on
            scenario awareness, return distribution quality, and disciplined risk framing
            rather than single-point forecasts.
          </p>
        </div>
      </Section>

      <Section eyebrow="Process" title="Research workflow">
        <div className="card max-w-4xl mr-auto space-y-2" style={{ color: "var(--brand-navy-soft)" }}>
          <ul className="list-disc pl-5 space-y-1">
            <li>Macro regime framing</li>
            <li>Structured idea screening</li>
            <li>Trade appraisal and scenario testing</li>
            <li>Review of outcomes and lessons</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Tooling" title="Analytical toolkit">
        <div className="card max-w-4xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Python, SQL, spreadsheet modelling, market data workflows, and lightweight
            automation for repeatable research and clearer risk communication.
          </p>
        </div>
      </Section>

      <Section eyebrow="Contact" title="General correspondence">
        <div className="card max-w-3xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            For general correspondence related to published notes and case studies,
            please use the contact page.
          </p>
        </div>
      </Section>
    </>
  );
}
