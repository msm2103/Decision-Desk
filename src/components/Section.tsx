type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="section-space">
      <div className="container-width space-y-6">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.14em]" style={{ color: "var(--brand-navy-soft)" }}>
            {eyebrow}
          </p>
        ) : null}
        <h2 className="heading-serif text-3xl md:text-4xl">{title}</h2>
        {description ? (
          <p className="text-lg max-w-3xl" style={{ color: "var(--brand-navy-soft)" }}>
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
