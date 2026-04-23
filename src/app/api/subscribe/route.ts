import { NextResponse } from "next/server";
import { sendTransactionalEmail } from "@/lib/email";
import { siteConfig } from "@/lib/seo";
import { subscribeEmail } from "@/lib/subscribers";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
    }

    const response = await subscribeEmail(email);
    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "Subscription provider is not configured yet. Set BUTTONDOWN_API_KEY to enable signup.",
        },
        { status: 500 },
      );
    }

    await sendTransactionalEmail({
      to: email,
      subject: `Welcome to ${siteConfig.name}`,
      html: `
        <p>Thanks for subscribing to ${siteConfig.name}.</p>
        <p>You will receive new notes and selected tool updates.</p>
        <p>To unsubscribe at any time, visit <a href="${siteConfig.url}/unsubscribe">${siteConfig.url}/unsubscribe</a>.</p>
      `,
    });

    return NextResponse.json({
      message: "Subscription confirmed. Please check your inbox.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to subscribe at the moment." },
      { status: 500 },
    );
  }
}
