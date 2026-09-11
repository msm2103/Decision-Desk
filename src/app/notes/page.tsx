import { NoteCard } from "@/components/NoteCard";
import { Section } from "@/components/Section";
import { SubscribeForm } from "@/components/SubscribeForm";
import { getAllNotes } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = buildMetadata({
  title: "Notes | Decision Desk",
  description: "Archive of weekly macro research notes from Decision Desk.",
  path: "/notes",
});

export default async function NotesPage() {
  const notes = await getAllNotes();

  return (
    <>
      <Section
        eyebrow="Notes"
        title="Weekly macro notes"
        description="Chronological archive of Decision Desk editions."
      >
        {notes.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {notes.map((note) => (
              <NoteCard key={note.slug} note={note} />
            ))}
          </div>
        ) : (
          <p style={{ color: "var(--brand-navy-soft)" }}>
            No notes have been published yet. Subscribe to be notified when the first edition is posted.
          </p>
        )}
      </Section>
      <Section
        eyebrow="Subscribe"
        title="Get new notes by email"
        description="Email-only alerts when a new edition is published."
      >
        <div className="card max-w-2xl">
          <SubscribeForm />
        </div>
      </Section>
    </>
  );
}
