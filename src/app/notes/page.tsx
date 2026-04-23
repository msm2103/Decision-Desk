import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { getAllNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Field Notes",
  description:
    "Articles and notes on macro rates, relative value, ALM, treasury, and market process.",
  path: "/notes",
});

export default async function NotesPage() {
  const notes = await getAllNotes();
  return (
    <>
      <Section
        eyebrow="Field Notes"
        title="Articles, frameworks, and market process notes"
        description="A publication section for thoughtful fixed income analysis with practical implementation context."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {notes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      </Section>
      <Section title="Subscribe for updates">
        <div className="card max-w-2xl">
          <SubscribeForm compact />
        </div>
      </Section>
    </>
  );
}
