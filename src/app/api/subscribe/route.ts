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

    const ip = request.headers.get("cf-connecting-ip");
    const response = await subscribeEmail(email, ip);
    if (!response.ok) {
      if (response.code === "not_configured") {
        return NextResponse.json(
          {
            message:
              "Subscription provider is not configured yet. Set BUTTONDOWN_API_KEY to enable signup.",
          },
          { status: 500 },
        );
      }

      console.error("Buttondown subscribe failed:", response.message);
      const rejectedAddress =
        response.providerCode === "subscriber_blocked" ||
        response.providerCode?.startsWith("email_address_");
      return NextResponse.json(
        {
          message: rejectedAddress
            ? "That email address could not be subscribed. Please use a different address."
            : "Unable to subscribe at the moment.",
        },
        { status: rejectedAddress ? 400 : 502 },
      );
    }

    const alreadyActive = response.type === "regular";
    if (!alreadyActive) {
      await sendTransactionalEmail({
        to: email,
        subject: `Welcome to ${siteConfig.name}`,
        html: `
          <p>Thanks for subscribing to ${siteConfig.name}.</p>
          <p>Please confirm the subscription from the email Buttondown just sent. After that, you will receive an email when a new macro note is published.</p>
          <p>To unsubscribe at any time, visit <a href="${siteConfig.url}/unsubscribe">${siteConfig.url}/unsubscribe</a>.</p>
        `,
      });
    }

    return NextResponse.json({
      message: alreadyActive
        ? "This address is already subscribed."
        : "Check your inbox and confirm the subscription.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to subscribe at the moment." },
      { status: 500 },
    );
  }
}
