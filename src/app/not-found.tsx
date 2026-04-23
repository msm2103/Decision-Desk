import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-width max-w-2xl">
        <div className="card space-y-4">
          <h1 className="heading-serif text-3xl">Page not found</h1>
          <p className="text-slate-700">
            The page you are looking for does not exist or has moved.
          </p>
          <Link href="/" className="btn-secondary w-fit">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
