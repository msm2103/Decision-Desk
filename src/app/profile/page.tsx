import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Profile",
  description:
    "Learn more about DD, a fixed income practitioner focused on macro rates, relative value, hedging, portfolio construction, and market process.",
  path: "/profile",
});

const experienceEntries = [
  {
    organisation: "A prestigious global macro hedge fund",
    role: "Associate Portfolio Manager",
    body: "Managed a developed-market rates portfolio with a focus on EUR/GBP relative value, scalable to institutional size. Built and ran macro-aware portfolio themes across curve, asset swap, cross-market and derivative expressions within disciplined drawdown and DV01 limits. Developed independent research and execution infrastructure using Python and Bloomberg-based tooling for screening, backtesting, scenario analysis, and risk monitoring.",
  },
  {
    organisation: "One of the world's leading reinsurers",
    role: "Head of Rates & ALM / Fixed Income Portfolio Manager",
    body: "Led European government and agency portfolios within accounting and regulatory capital constraints, aligning duration, convexity, and liquidity exposures to insurance liabilities. Designed derivative overlays using swaps and swaptions to manage earnings volatility, capital efficiency, and structural balance-sheet risks. Combined macro regime thinking with bottom-up relative value selection across curve, spread, and cross-market opportunities.",
  },
  {
    organisation: "One of the UK's leading banks",
    role: "Market Interest Rate Risk Manager / Rates Portfolio Manager",
    body: "Worked on non-traded interest rate risk and structural hedging questions arising from balance-sheet exposures. Used swaps, swaptions, behavioural modelling, and quantitative analysis to improve transparency around structural hedge dynamics and support better decision-making under treasury and institutional constraints.",
  },
  {
    organisation: "One of Britain's premier investment banks",
    role: "Fixed Income Exotic Products",
    body: "Supported exotic rates trading across risk analytics, hedging, and P&L management. Worked across structured and path-dependent products including CMS spreads, Bermudans, TARNs, callable structures, and related rates risk analytics.",
  },
] as const;

const focusAreas = [
  "Macro-aware fixed income strategy",
  "Duration and curve positioning",
  "Cross-market rates relative value",
  "Asset swap and cash-derivative RV",
  "Derivative overlays and convexity",
  "Structural hedging and ALM",
  "Portfolio construction and risk budgeting",
  "Scenario analysis and stress testing",
  "Market monitors and dashboards",
  "Financial modelling and research tooling",
] as const;

export default function ProfilePage() {
  return (
    <>
      <Section
        title="Personal Profile"
        description="Trading under the alias DD"
        descriptionClassName="text-xl font-semibold tracking-normal"
      >
        <div
          className="card max-w-4xl mr-auto space-y-4"
          style={{ color: "var(--brand-navy-soft)" }}
        >
          <p>
            DD brings over 15 years of experience across hedge funds, insurance asset
            management, treasury risk, banking, and sell-side rates derivatives, with
            particular focus on developed-market rates relative value across EUR and
            GBP. Broader G10 markets are used selectively for hedging, beta control,
            and trade expression.
          </p>

          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
            <span
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: "var(--brand-border)",
                color: "var(--brand-navy-soft)",
              }}
            >
              15+ years experience
            </span>
            <span
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: "var(--brand-border)",
                color: "var(--brand-navy-soft)",
              }}
            >
              Hedge fund / Banks / Insurance Asset Management 
            </span>
            <span
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: "var(--brand-border)",
                color: "var(--brand-navy-soft)",
              }}
            >
              Insitutional Risk Ownership
            </span>
          </div>
        </div>
      </Section>

      <Section title="Core Expertise">
        <div
          className="card max-w-4xl mr-auto space-y-4"
          style={{ color: "var(--brand-navy-soft)" }}
        >
          <p>
            DD focuses on developed-market rates relative value, with particular
            depth in EUR and GBP and broader G10 markets used selectively for
            hedging, beta control, and trade expression. Areas of emphasis
            include duration and curve strategy, cross-market allocation, asset
            swap and cash-derivative relative value, structural hedging,
            convexity management, and portfolio construction under real-world
            constraints.
          </p>
          <p>
            The approach combines discretionary macro judgement with systematic
            analytics to support repeatable investment processes, disciplined
            risk governance, and scalable implementation.
          </p>

          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.12em]">
            <span
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: "var(--brand-border)",
                color: "var(--brand-navy-soft)",
              }}
            >
              EUR / GBP / G10 rates
            </span>
            <span
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: "var(--brand-border)",
                color: "var(--brand-navy-soft)",
              }}
            >
              Curve / RV / cross-market
            </span>
            <span
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: "var(--brand-border)",
                color: "var(--brand-navy-soft)",
              }}
            >
              Hedging / convexity / portfolio construction
            </span>
            <span
              className="rounded-full border px-3 py-1"
              style={{
                borderColor: "var(--brand-border)",
                color: "var(--brand-navy-soft)",
              }}
            >
              Macro judgement / systematic analytics
            </span>           
          </div>
        </div>
      </Section>

      <Section title="Investment Philosophy">
        <div
          className="card max-w-4xl mr-auto space-y-4"
          style={{ color: "var(--brand-navy-soft)" }}
        >
          <p>
          DD&apos;s investment philosophy starts from the view that fixed income markets are generally highly efficient. In liquid markets, the observed price is usually the best available point-in-time clearing level for the marginal transaction.
          </p>
          <p>
          That means the opportunity rarely comes from assuming the market is simply wrong in a broad directional sense. More often, it comes from recognising that beneath any market price sits a range of possible outcomes, and that different trades embed very different return distributions, carry profiles, convexity, and sensitivities to changing macro regimes.
          </p>
          <p>
          The edge lies in combining those distributions intelligently. By selecting and sizing trades whose payoffs behave differently across scenarios — and layering in insight around valuation, positioning, funding, supply, and catalyst quality — it becomes possible to build portfolios with greater asymmetry, stronger regime resilience, and better risk-adjusted return potential across a much wider range of outcomes.
          </p>
          <p>
            The aim is therefore not just to find cheap trades, but to construct portfolios that:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>balance multiple sources of edge</li>
            <li>diversify by underlying driver rather than label</li>
            <li>preserve resilience across different regimes</li>
            <li>express views in the cleanest and most capital-efficient way possible</li>
          </ul>

          <div className="mt-3 flex flex-col gap-1.5 md:flex-row md:items-stretch md:gap-2">
            <div className="flex-1 rounded-2xl border border-slate-900 bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm">
              Macro-to-Micro
              <br />
              Market Expertise
            </div>

            <div
              className="hidden min-w-[2rem] items-center justify-center text-2xl font-black leading-none text-slate-800 md:flex"
              aria-hidden
            >
              →
            </div>

            <div className="flex-1 rounded-2xl border border-slate-900 bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm">
              Diversification + Convexity + Risk Management
            </div>

            <div
              className="hidden min-w-[2rem] items-center justify-center text-2xl font-black leading-none text-slate-800 md:flex"
              aria-hidden
            >
              →
            </div>

            <div className="flex-1 rounded-2xl border border-slate-900 bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm">
              Positive Expected Returns Across Regimes
            </div>
          </div>

          <blockquote
            className="mt-6 rounded-lg border-l-4 bg-white px-4 py-3 text-base italic"
            style={{
              borderColor: "var(--brand-gold)",
              color: "var(--brand-ink)",
            }}
          >
            &quot;Edge rarely comes from any one transaction; it comes from how return distributions are selected, sized, and combined at the portfolio level..&quot;
          </blockquote>
        </div>
      </Section>

      <Section title="Experience">
        <div className="max-w-4xl mr-auto">
          <div className="grid gap-4 md:grid-cols-2">
            {experienceEntries.map((entry) => (
              <article key={entry.organisation} className="card space-y-3">
                <p
                  className="text-xs uppercase tracking-[0.13em]"
                  style={{ color: "var(--brand-navy-soft)" }}
                >
                  {entry.organisation}
                </p>
                <h3 className="heading-serif text-xl">{entry.role}</h3>
                <p style={{ color: "var(--brand-navy-soft)" }}>{entry.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Areas of Focus">
        <div className="card max-w-4xl mr-auto">
          <ul
            className="grid list-disc gap-x-8 gap-y-2 pl-5 md:grid-cols-2"
            style={{ color: "var(--brand-navy-soft)" }}
          >
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Investment Process">
        <div
          className="card w-full max-w-4xl space-y-4"
          style={{ color: "var(--brand-navy-soft)" }}
        >
          <p>
            The process combines macro framing, systematic screening, structured trade
            appraisal, and portfolio construction discipline.
          </p>

          <div className="grid items-stretch gap-3 md:grid-cols-2">
            <div
              className="flex h-full flex-col rounded-lg border bg-white/90 p-4"
              style={{ borderColor: "var(--brand-border)" }}
            >
              <h3 className="heading-serif mb-2 text-xl">1. Regime</h3>
              <p className="mt-0">
                Assess growth, inflation, liquidity, policy, and financial conditions to
                understand the broader backdrop and likely distribution of outcomes.
              </p>
            </div>

            <div
              className="flex h-full flex-col rounded-lg border bg-white/90 p-4"
              style={{ borderColor: "var(--brand-border)" }}
            >
              <h3 className="heading-serif mb-2 text-xl">2. Screening</h3>
              <p className="mt-0">
                Use custom analytics and structured monitoring to identify relative value
                dislocations across curves, markets, and instruments.
              </p>
            </div>

            <div
              className="flex h-full flex-col rounded-lg border bg-white/90 p-4"
              style={{ borderColor: "var(--brand-border)" }}
            >
              <h3 className="heading-serif mb-2 text-xl">3. Appraisal</h3>
              <p className="mt-0">
                Compare trades through valuation, carry, roll, supply, positioning,
                convexity, funding, catalysts, and implementation quality.
              </p>
            </div>

            <div
              className="flex h-full flex-col rounded-lg border bg-white/90 p-4"
              style={{ borderColor: "var(--brand-border)" }}
            >
              <h3 className="heading-serif mb-2 text-xl">4. Portfolio Construction</h3>
              <p className="mt-0">
                Allocate risk through scenario analysis, interaction risk, marginal
                contribution, and explicit de-risking protocols.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Technology Stack">
        <div
          className="card max-w-4xl mr-auto space-y-4"
          style={{ color: "var(--brand-navy-soft)" }}
        >
          <p>
            DD combines discretionary market experience with systematic tooling. The
            analytical toolkit includes Python, SQL, VBA, AI agents, LLMs, Bloomberg-based data
            workflows, and custom frameworks for screening, backtesting, scenario analysis,
            attribution, and risk review.
          </p>
          <p>
            The objective of the tooling is not to automate judgment away. It is to improve
            speed, comparability, transparency, and repeatability - so that market decisions
            can be made more clearly and portfolio risks can be understood more fully.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Python-based market and portfolio analytics</li>
            <li>Scenario engines and stress frameworks</li>
            <li>Relative value screens and monitors</li>
            <li>Portfolio review and risk dashboards</li>
          </ul>
        </div>
      </Section>

      <Section title="Why Engage">
        <div
          className="card max-w-4xl mr-auto space-y-4"
          style={{ color: "var(--brand-navy-soft)" }}
        >
          <p>
            The value of DD lies in the combination of perspectives. Few fixed income
            practitioners have worked across hedge funds, insurance balance sheets, treasury
            risk, banking, and sell-side rates derivatives. That breadth allows market questions
            to be approached not only as trade ideas, but as decisions shaped by constraints,
            implementation, convexity, funding, capital, and portfolio interaction.
          </p>
          <p>
            This page is intended for serious market participants who value thoughtful
            discussion, structured frameworks, and practical market process rather than noise
            or generic commentary.
          </p>
        </div>
      </Section>

      <Section title="Get in Touch">
        <div
          className="card max-w-3xl mr-auto space-y-4"
          style={{ color: "var(--brand-navy-soft)" }}
        >
          <p>
            If you work on fixed income questions involving duration, curve positioning,
            relative value, structural hedging, convexity, or portfolio construction, and
            would value a thoughtful second perspective, feel free to get in touch.
          </p>
          <Link href="/contact" className="btn-primary w-fit">
            Contact
          </Link>
        </div>
      </Section>
    </>
  );
}