import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { getAllNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Notes",
  description:
    "Personal fixed income research notes and implementation-focused market frameworks.",
  path: "/notes",
});

export default async function NotesPage() {
  const notes = await getAllNotes();
  return (
    <>
      <Section
        eyebrow="Notes"
        title="Research notes and implementation frameworks"
        description="Personal publication notes on macro rates, relative value, and practical implementation."
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
