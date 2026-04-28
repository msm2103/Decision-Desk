"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      organisation: String(formData.get("organisation") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    setStatus("loading");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as { message: string };
    if (!response.ok) {
      setStatus("error");
      setMessage(data.message || "Unable to submit enquiry.");
      return;
    }

    setStatus("success");
    setMessage(data.message);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 max-w-3xl">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="space-y-1 text-sm text-slate-700">
          Name
          <input
            name="name"
            required
            className="h-11 w-full rounded-md border border-slate-300 px-3"
          />
        </label>
        <label className="space-y-1 text-sm text-slate-700">
          Email
          <input
            name="email"
            type="email"
            required
            className="h-11 w-full rounded-md border border-slate-300 px-3"
          />
        </label>
      </div>

      <label className="space-y-1 text-sm text-slate-700 block">
        Company / Organisation (optional)
        <input
          name="organisation"
          className="h-11 w-full rounded-md border border-slate-300 px-3"
        />
      </label>

      <label className="space-y-1 text-sm text-slate-700 block">
        Message
        <textarea
          name="message"
          required
          rows={7}
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      </label>

      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button type="submit" disabled={status === "loading"} className="btn-primary">
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      <p className="text-xs text-slate-600">
        Please do not submit confidential information, trade instructions, mandate enquiries, or requests for investment advice.
      </p>

      {message ? (
        <p className={`text-sm ${status === "error" ? "text-red-700" : "text-slate-700"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
