import Link from "next/link";
import type { Note } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type NoteCardProps = {
  note: Note;
};

export function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="card h-full flex flex-col gap-3">
      <div className="text-xs uppercase tracking-[0.14em]" style={{ color: "var(--brand-navy-soft)" }}>
        {formatDate(note.publishedAt)} · {note.readingTime}
      </div>
      <h3 className="heading-serif text-2xl">{note.title}</h3>
      <p style={{ color: "var(--brand-navy-soft)" }}>{note.subtitle}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {note.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full px-2.5 py-1 text-xs"
            style={{
              border: "1px solid var(--brand-border)",
              color: "var(--brand-navy-soft)",
              background: "#f8fbff",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm mt-1 flex-1" style={{ color: "var(--brand-navy-soft)" }}>
        {note.excerpt}
      </p>
      <Link href={`/notes/${note.slug}`} className="text-sm underline" style={{ color: "var(--brand-navy)" }}>
        Read note
      </Link>
    </article>
  );
}
