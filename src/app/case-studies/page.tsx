import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

const caseStudies = [
  {
    slug: "duration-expression-on-curve",
    title: "Duration expression on the curve",
    context:
      "A period where policy uncertainty and curve dislocations made duration expression less straightforward than directional conviction suggested.",
    thesis:
      "Risk-adjusted outcomes were more attractive in intermediate tenors than at the wings, given carry, roll, and regime sensitivity.",
    structure:
      "Illustrative relative-value duration expression using liquid curve points with predefined downside limits.",
    risks:
      "Policy repricing, curve regime shift, and funding stress moving the intended risk profile offside.",
    changed:
      "As market narrative shifted toward slower growth, curve dynamics converged toward expected paths sooner than anticipated.",
    lessons:
      "Expression matters as much as view. Implementation quality and pre-defined invalidation improve consistency.",
  },
  {
    slug: "structural-hedge-design-review",
    title: "Structural hedge design review",
    context:
      "A balance-sheet style setting where hedge design had to balance earnings smoothness, capital sensitivity, and market realism.",
    thesis:
      "A blended hedge structure could improve resilience across plausible macro paths compared with a single-instrument approach.",
    structure:
      "Illustrative overlay combining core hedge duration with convexity-aware adjustments.",
    risks:
      "Unexpected rate volatility regimes and behavioural mismatch between assumptions and realised balance-sheet behaviour.",
    changed:
      "Convexity component became more valuable as volatility increased while directional hedge contribution stayed stable.",
    lessons:
      "Explicit scenario mapping and interaction-risk checks are essential in structural hedge design.",
  },
  {
    slug: "bond-rv-process-case",
    title: "Bond relative value process case",
    context:
      "A recurring set of bond RV opportunities where ad hoc selection led to inconsistent sizing and review quality.",
    thesis:
      "A structured appraisal workflow should improve idea comparability and post-trade learning.",
    structure:
      "Illustrative ranking framework using valuation, carry, liquidity, catalyst quality, and implementation constraints.",
    risks:
      "Signal decay, crowded positioning, and framework overfitting to short windows.",
    changed:
      "Decision speed improved and weak-conviction opportunities were filtered out more consistently.",
    lessons:
      "A repeatable process can preserve judgement while strengthening governance and review discipline.",
  },
];

export const metadata = buildMetadata({
  title: "Case Studies",
  description:
    "Illustrative educational trade case studies covering context, thesis, structure, risk, and lessons.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Section
        eyebrow="Case Studies"
        title="Illustrative educational trade reviews"
        description="Examples are educational and illustrative only. They are not investment advice and do not represent live trade communications."
      >
        <div className="space-y-5">
          {caseStudies.map((study) => (
            <article key={study.slug} className="card space-y-3">
              <h3 className="heading-serif text-2xl">{study.title}</h3>
              <p style={{ color: "var(--brand-navy-soft)" }}>
                <strong>Context:</strong> {study.context}
              </p>
              <p style={{ color: "var(--brand-navy-soft)" }}>
                <strong>Thesis:</strong> {study.thesis}
              </p>
              <p style={{ color: "var(--brand-navy-soft)" }}>
                <strong>Structure:</strong> {study.structure}
              </p>
              <p style={{ color: "var(--brand-navy-soft)" }}>
                <strong>Risks:</strong> {study.risks}
              </p>
              <p style={{ color: "var(--brand-navy-soft)" }}>
                <strong>What changed:</strong> {study.changed}
              </p>
              <p style={{ color: "var(--brand-navy-soft)" }}>
                <strong>Lessons:</strong> {study.lessons}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
