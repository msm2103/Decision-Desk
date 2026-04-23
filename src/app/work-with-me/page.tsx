import Link from "next/link";
import { InteractiveClientServicesMindMap } from "@/components/InteractiveClientServicesMindMap";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

const keyQuestions = [
  {
    label: "Curve",
    text: "Where on the curve should you express your duration view?",
  },
  {
    label: "Hedging Strategy",
    text: "Should we extend, reduce, or redesign a structural deposit hedge?",
  },
  {
    label: "Duration",
    text: "How should interest-rate exposure be positioned across G4 curves under liability, capital, and accounting constraints?",
  },
  {
    label: "Implementation",
    text: "How do we systemise bond relative value without losing market judgment?",
  },
  {
    label: "Portfolio Strategy",
    text: "How do you build a regime-robust rates portfolio rather than a collection of isolated trades?",
  },
  {
    label: "Product ",
    text: "Should this view be expressed in cash, swaps, options, or a blended structure?",
  },
  {
    label: "Trading",
    text: "How do you turn a market view into a repeatable process for screening, selection, sizing, and review?",
  },
];

export const metadata = buildMetadata({
  title: "Work with TDR",
  description:
    "Collaboration on fixed income decisions: duration, curve positioning, hedging, RV, portfolio construction, and process.",
  path: "/work-with-me",
});

export default function WorkWithMePage() {
  return (
    <>
      <Section
        eyebrow="Work with TDR"
        title="Structured collaboration for practical fixed income decisions"
        description="TDR advises institutional investors, treasury teams, and insurers on the practicalities of fixed income, helping turn market views into defensible strategy. Whether the challenge is duration, curve positioning, hedging, or portfolio construction, TDR brings a structured framework and independent perspective to ensure decisions hold up under real-world market constraints."
      />

      <Section title="Interactive Audience Map">
        <InteractiveClientServicesMindMap />
      </Section>

      <Section title="Questions TDR can help answer">
        <ul className="card list-disc list-inside space-y-3 text-slate-700 px-6 py-4">
          {keyQuestions.map((question) => (
            <li key={question.label}>
              <strong>{question.label}:</strong> {question.text}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Typical formats">
        <ul className="card grid sm:grid-cols-2 gap-2 text-slate-700">
          <li>One-off problem-solving conversations</li>
          <li>Ongoing mentoring and sounding-board support</li>
          <li>Framework and process review</li>
          <li>Tooling, dashboards, and bespoke support</li>
        </ul>
      </Section>

      <Section title="Get in touch">
        <div className="card max-w-2xl space-y-4">
          <p className="text-slate-700">
          If you have a specific fixed income decision, process bottleneck, or implementation challenge, The Decision Room would be happy to talk it through with you
          </p>
          <Link href="/contact" className="btn-primary w-fit">
            Get in touch
          </Link>
        </div>
      </Section>
    </>
  );
}
