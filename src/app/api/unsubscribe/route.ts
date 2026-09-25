import { NextResponse } from "next/server";
import { unsubscribeEmail } from "@/lib/subscribers";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
    }

    const response = await unsubscribeEmail(email);
    if (!response.ok) {
      if (response.code === "not_found") {
        return NextResponse.json(
          { message: "That email is not on the subscriber list." },
          { status: 404 },
        );
      }

      if (response.code !== "not_configured") {
        console.error("Buttondown unsubscribe failed:", response.message);
        return NextResponse.json(
          { message: "Unable to unsubscribe at the moment." },
          { status: 502 },
        );
      }

      return NextResponse.json(
        {
          message:
            "Unsubscribe provider is not configured yet. Set BUTTONDOWN_API_KEY to enable this flow.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "You have been unsubscribed successfully.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to unsubscribe at the moment." },
      { status: 500 },
    );
  }
}
