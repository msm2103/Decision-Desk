"use client";

import { FormEvent, useState } from "react";

type SubscribeFormProps = {
  compact?: boolean;
};

export function SubscribeForm({ compact = false }: SubscribeFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = (await response.json()) as { message: string };
    if (!response.ok) {
      setStatus("error");
      setMessage(data.message || "Unable to subscribe right now.");
      return;
    }

    setStatus("success");
    setMessage(data.message);
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className={`flex ${compact ? "flex-col sm:flex-row" : "flex-col"} gap-3`}>
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@company.com"
          className="h-11 flex-1 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <button type="submit" disabled={status === "loading"} className="btn-primary h-11">
          {status === "loading" ? "Submitting..." : "Subscribe"}
        </button>
      </div>
      {message ? (
        <p className={`text-sm ${status === "error" ? "text-red-700" : "text-slate-700"}`}>
          {message}
        </p>
      ) : null}
      {!compact ? (
        <p className="text-xs text-slate-500">
          You can unsubscribe at any time from any email or via the unsubscribe page.
        </p>
      ) : null}
    </form>
  );
}
