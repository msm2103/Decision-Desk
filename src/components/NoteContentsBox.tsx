type NoteContentsBoxProps = {
  items: Array<{ id: string; title: string; level: 2 | 3 }>;
};

export function NoteContentsBox({ items }: NoteContentsBoxProps) {
  if (items.length === 0) return null;

  return (
    <aside className="hidden xl:block xl:w-72 shrink-0">
      <div className="sticky top-24 card p-4">
        <h2 className="heading-serif text-lg mb-3">Contents</h2>
        <nav aria-label="Note sections">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm hover:underline ${
                    item.level === 3 ? "ml-4 text-slate-500" : "text-slate-700"
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
