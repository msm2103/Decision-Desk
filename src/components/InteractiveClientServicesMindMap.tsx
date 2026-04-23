"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Building2, Compass, Network, Sparkles, Target, Wrench } from "lucide-react";

type AudienceNode = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  short: string;
  members: string[];
  themes: string[];
  caseStudies: string[];
  position: React.CSSProperties;
};

const data = {
  pageTitle: "TDR Can Help",
  center: {
    title: "Who Can TDR Help?",
    subtitle: "Interactive client map",
    description: "",
  },
  audiences: [
    {
      id: "institutional",
      title: "Institutional Interest Rate Risk",
      icon: Building2,
      short: "Strategic allocation, constrained investing, and ALM optimisation.",
      members: ["ALCO Members", "Senior Management", "Insurance and Bank ALM"],
      themes: [
        "Constrained investing, problem solving for the optimal market solution",
        "Duration and cross market allocation frameworks",
        "Fixed income macro strategy",
      ],
      caseStudies: [
        "Adding convexity to fixed income portfolios to improve capital efficiency",
        "Bank structural hedge optimisation through the cycle",
        "Market monitors, dashboards, scenario analysis",
      ],
      position: { top: "18%", left: "2%" },
    },
    {
      id: "portfolio",
      title: "Portfolio Management",
      icon: Compass,
      short: "From idea generation to execution, tooling, and portfolio construction.",
      members: ["Hedge Fund Managers", "Trading Desks"],
      themes: [
        "Portfolio construction techniques",
        "Alpha generation, from thesis to execution",
        "Financial modelling and trading tools",
        "What hedge funds are looking for",
      ],
      caseStudies: [
        "Alpha in DM swap forward space",
        "Bond selection and auction strategies",
        "How to build and manage a macro rates portfolio",
        "Trading market narratives",
      ],
      position: { top: "18%", right: "2%" },
    },
    {
      id: "peers",
      title: "Industry Peers",
      icon: Network,
      short: "Sharper process, better tools, and rigorous idea exchange.",
      members: ["Institutional Fixed Income Investors At All Levels"],
      themes: [
        "Process enhancement and tooling",
        "Cutting edge alpha techniques",
        "Thoughtful discussion and respectful challenge",
      ],
      caseStudies: [
        "Trading tools (identification, sizing, analysis, back-testing engine)",
        "Portfolio construction and risk management",
        "Process improvement and mentorship",
        "Alpha decay and strategy robustness",
      ],
      position: { bottom: "23%", left: "25%", transform: "translateX(-0%)" },
    },
  ] satisfies AudienceNode[],
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-slate-800">
      {children}
    </h3>
  );
}

function NodeButton({
  node,
  active,
  onClick,
}: {
  node: AudienceNode;
  active: boolean;
  onClick: () => void;
}) {
  const Icon = node.icon;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`absolute z-10 w-65 rounded-2xl border p-4 text-left shadow-lg backdrop-blur transition ${
        active
          ? "border-slate-900 bg-white ring-2 ring-slate-400"
          : "border-slate-300 bg-white/95 hover:border-slate-500"
      }`}
      style={node.position}
      aria-pressed={active}
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-200 p-2.5">
          <Icon className="h-5 w-5 text-slate-800" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-900">{node.title}</p>
          <p className="mt-1 text-xs leading-5 text-slate-700">
            {node.short}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

export function InteractiveClientServicesMindMap() {
  const allNodes = useMemo<AudienceNode[]>(() => [...data.audiences], []);
  const [selectedId, setSelectedId] = useState("institutional");
  const selected = allNodes.find((node) => node.id === selectedId) ?? allNodes[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Prospect-facing interactive overview
            </div>
            <h3 className="mt-3 heading-serif text-3xl md:text-4xl text-slate-900">{data.pageTitle}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
              A simple clickable mind map showing who (and how) TDR help
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="rounded-full border border-slate-300 bg-white px-2 py-1">Click any node</span>
            <span>Selected:</span>
            <span className="font-semibold text-slate-800">{selected.title}</span>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="relative hidden min-h-[720px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl md:block">
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="50" y1="50" x2="20" y2="24" stroke="currentColor" className="text-slate-400" strokeWidth="0.4" />
              <line x1="50" y1="50" x2="75" y2="24" stroke="currentColor" className="text-slate-400" strokeWidth="0.4" />
              <line x1="50" y1="50" x2="50" y2="75" stroke="currentColor" className="text-slate-400" strokeWidth="0.4" />
            </svg>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute left-1/2 top-1/2 z-10 w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-slate-900 bg-slate-900 p-7 text-white shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-semibold leading-tight">{data.center.title}</div>
                  <div className="mt-1 text-sm text-slate-300">{data.center.subtitle}</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                {data.center.description}
              </p>
            </motion.div>

            {allNodes.map((item) => (
              <NodeButton
                key={item.id}
                node={item}
                active={selectedId === item.id}
                onClick={() => setSelectedId(item.id)}
              />
            ))}
          </div>

          <div className="md:hidden grid gap-2">
            {allNodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setSelectedId(node.id)}
                className="w-full rounded-lg border px-3 py-2 text-left text-sm"
                style={{
                  borderColor: selectedId === node.id ? "var(--brand-navy)" : "var(--brand-border)",
                  color: "var(--brand-ink)",
                  background: selectedId === node.id ? "#f5f8ff" : "white",
                }}
              >
                {node.title}
              </button>
            ))}
          </div>

          <div className="min-h-[720px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="h-full rounded-3xl border p-6 shadow-xl"
                style={{
                  borderColor: "rgba(203, 156, 59, 0.45)",
                  background:
                    "linear-gradient(180deg, #fffefb 0%, #faf3e4 45%, #f5e9d0 100%)",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-slate-200 p-3">
                    <selected.icon className="h-6 w-6 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="heading-serif text-2xl text-slate-900">{selected.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{selected.short}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <SectionHeading>Relevant audience</SectionHeading>
                  <div className="flex flex-wrap gap-2">
                    {selected.members.map((member) => (
                      <span
                        key={member}
                        className="rounded-full border border-slate-400 bg-slate-300 px-3 py-1 text-xs font-bold text-slate-900"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <SectionHeading>Themes</SectionHeading>
                  <div className="grid gap-3">
                    {selected.themes.map((theme) => (
                      <div
                        key={theme}
                        className="rounded-2xl border border-slate-300 bg-slate-200 px-4 py-3 text-sm font-medium leading-6 text-slate-800 shadow-sm"
                      >
                        {theme}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <SectionHeading>Case studies</SectionHeading>
                  <div className="grid gap-3">
                    {selected.caseStudies.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-medium leading-6 text-slate-800 shadow-sm"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-300 bg-slate-100 p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-slate-900">
            <Briefcase className="h-4 w-4" />
            <h5 className="heading-serif text-lg">Who it is for</h5>
          </div>
          <p className="mt-1 text-sm" style={{ color: "var(--brand-navy-soft)" }}>
            Senior decision-makers in institutional interest rate risk, portfolio managers
            and trading teams, and industry peers looking to sharpen process, tools, and market thinking.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-300 bg-slate-100 p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-slate-900">
            <Sparkles className="h-4 w-4" />
            <h5 className="heading-serif text-lg">What it covers</h5>
          </div>
          <p className="mt-1 text-sm" style={{ color: "var(--brand-navy-soft)" }}>
            Allocation frameworks, macro strategy, alpha generation, portfolio construction,
            modelling, tooling, and practical case-led problem solving.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-300 bg-slate-100 p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2 text-slate-900">
            <Wrench className="h-4 w-4" />
            <h5 className="heading-serif text-lg">How it helps</h5>
          </div>
          <p className="mt-1 text-sm" style={{ color: "var(--brand-navy-soft)" }}>
            Clear strategic thinking, practical tools, stronger portfolio construction,
            better risk management, and improved investment or trading processes.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

