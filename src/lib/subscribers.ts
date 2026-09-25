const buttondownApi = "https://api.buttondown.com/v1/subscribers";

type SubscriberFailure = {
  ok: false;
  provider: "buttondown";
  code: "not_configured" | "not_found" | "rejected";
  providerCode?: string;
  message: string;
};

function buttondownKey() {
  const key = process.env.BUTTONDOWN_API_KEY?.trim();
  return key || null;
}

function notConfigured(): SubscriberFailure {
  return {
    ok: false,
    provider: "buttondown",
    code: "not_configured",
    message: "BUTTONDOWN_API_KEY is not configured.",
  };
}

async function readError(response: Response): Promise<{ code?: string; message: string }> {
  const body = await response.text();
  try {
    const parsed = JSON.parse(body) as { detail?: string; code?: string };
    return {
      code: parsed.code,
      message: [parsed.code, parsed.detail].filter(Boolean).join(": ") || body,
    };
  } catch {
    return { message: body };
  }
}

export async function subscribeEmail(email: string, ipAddress?: string | null) {
  const key = buttondownKey();
  if (!key) return notConfigured();

  const response = await fetch(buttondownApi, {
    method: "POST",
    headers: {
      Authorization: `Token ${key}`,
      "Content-Type": "application/json",
      "X-Buttondown-Collision-Behavior": "add",
    },
    body: JSON.stringify({
      email_address: email,
      metadata: { source: "decision-desk" },
      referrer_url: "https://decisiondesk.co.uk/subscribe",
      ...(ipAddress ? { ip_address: ipAddress } : {}),
    }),
  });

  if (!response.ok) {
    const error = await readError(response);
    return {
      ok: false as const,
      provider: "buttondown" as const,
      code: "rejected" as const,
      providerCode: error.code,
      message: error.message,
    };
  }

  const subscriber = (await response.json()) as { type?: string };
  return { ok: true as const, provider: "buttondown" as const, type: subscriber.type ?? "unactivated" };
}

export async function unsubscribeEmail(email: string) {
  const key = buttondownKey();
  if (!key) return notConfigured();

  const encoded = encodeURIComponent(email);
  const response = await fetch(`${buttondownApi}/${encoded}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${key}`,
    },
  });

  if (response.status === 404) {
    return {
      ok: false as const,
      provider: "buttondown" as const,
      code: "not_found" as const,
      message: "Subscriber not found.",
    };
  }

  if (!response.ok) {
    const error = await readError(response);
    return {
      ok: false as const,
      provider: "buttondown" as const,
      code: "rejected" as const,
      providerCode: error.code,
      message: error.message,
    };
  }

  return { ok: true as const, provider: "buttondown" as const };
}
