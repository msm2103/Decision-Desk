const buttondownApi = "https://api.buttondown.email/v1/subscribers";

function hasButtondownConfig() {
  return Boolean(process.env.BUTTONDOWN_API_KEY);
}

export async function subscribeEmail(email: string) {
  if (!hasButtondownConfig()) {
    return {
      ok: false,
      provider: "buttondown",
      message: "BUTTONDOWN_API_KEY is not configured.",
    };
  }

  const response = await fetch(buttondownApi, {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      tags: ["site"],
      metadata: { source: "the-decision-room" },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    return { ok: false, provider: "buttondown", message: error };
  }

  return { ok: true, provider: "buttondown" };
}

export async function unsubscribeEmail(email: string) {
  if (!hasButtondownConfig()) {
    return {
      ok: false,
      provider: "buttondown",
      message: "BUTTONDOWN_API_KEY is not configured.",
    };
  }

  const encoded = encodeURIComponent(email);
  const response = await fetch(`${buttondownApi}/${encoded}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    return { ok: false, provider: "buttondown", message: error };
  }

  return { ok: true, provider: "buttondown" };
}
