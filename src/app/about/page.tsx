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
        description="Fixed income research notes, market frameworks, and illustrative case studies under the Decision Desk imprint."
      >
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Mark Martin writes on fixed income markets, with a focus on rates,
            relative value, portfolio construction, and implementation. His perspective
            is shaped by experience across hedge funds, insurance ALM, bank treasury risk,
            and sell-side rates derivatives.
          </p>
          <p>
            The common thread across that work is the translation of market views into
            structures that can be compared, risk-managed, and reviewed under real-world
            constraints.
          </p>
        </div>
      </Section>

      <Section eyebrow="Decision Desk" title="Publication imprint and boundaries">
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Decision Desk is a personal publication site for fixed-income research notes,
            market frameworks, and illustrative educational case studies. The emphasis is
            on structured thinking: how market questions are framed, how trade-offs are
            compared, and how implementation choices affect risk and return.
          </p>
          <p>
            The site is not a research product, advisory service, investment offering,
            portfolio-management platform, trading platform, PM network, or recruitment venue.
          </p>
        </div>
      </Section>

      <Section eyebrow="Core market focus" title="Coverage and areas of interest">
        <div className="card max-w-4xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            The recurring focus is developed-market fixed income, particularly the
            interaction between macro regime, valuation, structure, carry, convexity,
            and implementation.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>developed-market rates and curve structure</li>
            <li>cross-market and relative-value expression</li>
            <li>asset swap, cash-derivative, and implementation trade-offs</li>
            <li>duration, carry, roll, convexity, and funding</li>
            <li>portfolio construction under real-world constraints</li>
            <li>scenario analysis and risk asymmetry</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Approach to research" title="How market questions are analysed">
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            The research approach starts from the view that fixed income markets are
            better analysed as distributions rather than single-point forecasts.
          </p>
          <p>
            The key question is rarely whether a market level is simply right or wrong.
            It is what range of outcomes is being priced, which structures express that
            distribution cleanly, and where risk concentration sits.
          </p>
          <p>
            The emphasis is on scenario awareness, return distribution quality,
            implementation discipline, and the interaction between individual structures
            and broader portfolio risk.
          </p>
        </div>
      </Section>

      <Section eyebrow="Publication types" title="What Decision Desk publishes">
        <div className="card max-w-4xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Decision Desk publishes three types of material:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Notes:</strong> longer-form research on fixed-income questions,
              market structure, portfolio construction, and implementation.
            </li>
            <li>
              <strong>Frameworks:</strong> shorter conceptual pieces, templates, and
              checklists for comparing structures, risks, and scenarios.
            </li>
            <li>
              <strong>Case studies:</strong> delayed and illustrative reviews of selected
              market questions or trade structures, written for educational purposes.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Research workflow" title="How work is structured">
        <div className="card max-w-4xl mr-auto space-y-2" style={{ color: "var(--brand-navy-soft)" }}>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Regime framing:</strong> identifying the macro, policy, supply,
              liquidity, and positioning backdrop.
            </li>
            <li>
              <strong>Structure comparison:</strong> comparing possible expressions across
              carry, roll, convexity, funding, liquidity, and implementation quality.
            </li>
            <li>
              <strong>Scenario testing:</strong> assessing how structures behave across
              rate, curve, spread, and volatility outcomes.
            </li>
            <li>
              <strong>Review:</strong> using post-event analysis to refine frameworks
              rather than present live recommendations.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Analytical toolkit" title="Methods and supporting tools">
        <div className="card max-w-4xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Python, SQL, spreadsheet modelling, market data workflows, and lightweight
            automation are used to make comparisons more consistent, repeatable, and transparent.
          </p>
          <p>
            The purpose of tooling is not to automate judgment, but to make assumptions,
            sensitivities, and trade-offs easier to examine.
          </p>
        </div>
      </Section>

      <Section eyebrow="Independence" title="Personal views and public-information basis">
        <div className="card max-w-4xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            All writing on Decision Desk reflects personal views only. It is based on public
            information and is not affiliated with, endorsed by, or representative of any employer.
          </p>
          <p>
            Nothing on the site is investment advice, a recommendation, a solicitation,
            or an offer to provide investment services.
          </p>
        </div>
      </Section>

      <Section eyebrow="General correspondence" title="Contact">
        <div className="card max-w-3xl mr-auto space-y-3" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            For general correspondence related to published notes, frameworks, or case studies,
            please use the contact page.
          </p>
        </div>
      </Section>
    </>
  );
}
