type NoteContentsBoxProps = {
  items: Array<{ id: string; title: string; level: 2 | 3 }>;
};

export function NoteContentsBox({ items }: NoteContentsBoxProps) {
  if (items.length === 0) return null;

  return (
    <aside className="hidden lg:block lg:w-72 shrink-0 self-start">
      <div className="sticky top-24 card p-4 max-h-[calc(100vh-7rem)] overflow-y-auto">
        <h2 className="heading-serif text-lg mb-3 underline underline-offset-4">Contents</h2>
        <nav aria-label="Note sections">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm hover:underline ${
                    item.level === 3 ? "ml-4 text-slate-500" : "text-slate-700"
                  } ${
                    item.title.toLowerCase().startsWith("appendix") ? "font-normal" : "font-semibold"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
