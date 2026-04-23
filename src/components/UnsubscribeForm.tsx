"use client";

import { FormEvent, useState } from "react";

export function UnsubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/unsubscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = (await response.json()) as { message: string };
    if (!response.ok) {
      setStatus("error");
      setMessage(data.message || "Unable to process request.");
      return;
    }

    setStatus("success");
    setMessage(data.message);
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@company.com"
        className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm"
      />
      <button type="submit" disabled={status === "loading"} className="btn-secondary">
        {status === "loading" ? "Submitting..." : "Unsubscribe"}
      </button>
      {message ? (
        <p className={`text-sm ${status === "error" ? "text-red-700" : "text-slate-700"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
