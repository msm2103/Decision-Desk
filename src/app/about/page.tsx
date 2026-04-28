import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Mark Martin | Senior Fixed Income Portfolio Manager | Decision Desk",
  description:
    "Mark Martin is a London-based senior fixed income portfolio manager focused on developed-market rates, EUR/GBP relative value, curve strategy, derivatives, ALM, and systematic fixed income analytics.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="Mark Martin"
        description="London-based senior fixed income portfolio manager and author of Decision Desk."
      >
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Mark Martin is a London-based senior fixed income portfolio manager focused on developed-market rates, EUR/GBP relative value, curve strategy, fixed income derivatives, ALM, and systematic investment process.
          </p>
          <p>
            He writes Decision Desk as a personal fixed income publication: a place for research notes, market frameworks, and delayed illustrative case studies that show how rates ideas are framed, tested, expressed, and reviewed. The site is designed to make the investment process visible without presenting live trade recommendations, investment advice, or a commercial service.
          </p>
          <p>
            Mark&apos;s experience spans hedge funds, insurance asset management, treasury risk, banking, and sell-side rates derivatives. His work has sat across discretionary macro thinking, relative value implementation, structural hedging, derivative expression, portfolio overlays, and quantitative research workflows.
          </p>
        </div>
      </Section>

      <Section eyebrow="Expertise" title="Rates, relative value, and portfolio implementation">
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            The core focus is developed-market fixed income, with particular emphasis on EUR and GBP rates. Areas of interest include curve structure, duration expression, cross-market relative value, asset swaps, swaps, swaptions, convexity, carry, rolldown, hedging design, and the interaction between macro regimes and portfolio construction.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Rates relative value:</strong> curve, cross-market, asset-swap, swap-spread, and implementation-focused trade comparison.</li>
            <li><strong>Portfolio construction:</strong> risk allocation, scenario design, exposure interaction, drawdown control, and trade expression under real-world constraints.</li>
            <li><strong>Derivatives and convexity:</strong> swaps, swaptions, overlays, asymmetry, optionality, and path-dependent implementation choices.</li>
            <li><strong>ALM and structural hedging:</strong> balance-sheet-aware fixed income thinking shaped by insurance, treasury, and liability-sensitive investment problems.</li>
            <li><strong>Systematic analytics:</strong> Python, SQL, spreadsheets, Bloomberg workflows, AI-assisted research, and repeatable market-data processes.</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Philosophy" title="Markets are distributions, not point forecasts">
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Decision Desk treats markets as probabilistic systems. The aim is not to sound certain about the next move, but to understand the distribution: what is priced, what could change, where the asymmetry sits, how the position behaves if the path is wrong, and whether the structure survives contact with liquidity, carry, volatility, and time.
          </p>
          <p>
            Good fixed income decisions usually come from the interaction of macro context, valuation, structure, risk budget, implementation cost, and review discipline. The research therefore focuses less on headline forecasts and more on the quality of the decision process.
          </p>
        </div>
      </Section>

      <Section eyebrow="Process" title="From market question to implementation review">
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            The research process behind Decision Desk is deliberately structured. Each idea starts with a market question, not a trade. The work then moves through regime framing, valuation, structure comparison, scenario testing, implementation analysis, and post-outcome review.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Macro regime framing — rates, inflation, fiscal, central bank reaction functions, supply, liquidity, and cross-market context.</li>
            <li>Relative value screening — curve, country, asset-swap, swap-spread, cross-market, carry, rolldown, and convexity comparisons.</li>
            <li>Structure selection — choosing between cash bonds, futures, swaps, swaptions, curve expressions, overlays, and hedges.</li>
            <li>Scenario testing — upside, downside, path dependency, volatility, liquidity, stop-out risk, and correlation breaks.</li>
            <li>Outcome review — what worked, what failed, what was luck, what was process, and what should change next time.</li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Tooling" title="Analytics for repeatable decision-making">
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            The analytical toolkit combines Python, SQL, spreadsheet modelling, Bloomberg data workflows, AI-assisted research, and lightweight automation. The objective is not to replace judgement, but to make market screening, risk comparison, signal review, and communication more repeatable.
          </p>
          <p>
            Much of the work sits at the intersection of discretionary rates experience and systematic process: using data to challenge narratives, compare structures, monitor regimes, and make portfolio decisions easier to review after the fact.
          </p>
        </div>
      </Section>

      <Section eyebrow="Decision Desk" title="What Decision Desk is">
        <div className="card max-w-4xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            Decision Desk is Mark Martin&apos;s personal publication site for fixed income research notes, market frameworks, and illustrative educational case studies. It is a public research archive, not a business, not an advisory service, not a signal product, and not a live trading record.
          </p>
          <p>
            All content is personal, educational, and based on public information. The purpose is to show how a senior fixed income investor thinks about markets, not to tell readers what to buy or sell.
          </p>
        </div>
      </Section>

      <Section eyebrow="Contact" title="Professional correspondence">
        <div className="card max-w-3xl mr-auto space-y-4" style={{ color: "var(--brand-navy-soft)" }}>
          <p>
            For correspondence related to published notes, case studies, market frameworks, or professional background, please use the contact page.
          </p>
          <Link href="/contact" className="btn-secondary w-fit">Contact</Link>
        </div>
      </Section>
    </>
  );
}
