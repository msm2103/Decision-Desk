type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
};

export function Section({
  eyebrow,
  title,
  description,
  descriptionClassName,
  children,
}: SectionProps) {
  return (
    <section className="section-space">
      <div className="container-width space-y-6">
        {eyebrow ? (
          <>
            <h2 className="heading-serif text-3xl md:text-4xl">{eyebrow}</h2>
            <p className="text-xs uppercase tracking-[0.14em]" style={{ color: "var(--brand-navy-soft)" }}>
              {title}
            </p>
          </>
        ) : (
          <h2 className="heading-serif text-3xl md:text-4xl">{title}</h2>
        )}
        {description ? (
          <p
            className={`max-w-3xl ${descriptionClassName ?? "text-lg"}`}
            style={{ color: "var(--brand-navy-soft)" }}
          >
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
