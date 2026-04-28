import { NextResponse } from "next/server";
import { sendContactEnquiryEmail } from "@/lib/email";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      name?: string;
      email?: string;
      organisation?: string;
      message?: string;
      website?: string;
    };

    if (body.website) {
      return NextResponse.json({ message: "Submitted." });
    }

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json({ message: "Invalid email address." }, { status: 400 });
    }

    await sendContactEnquiryEmail({
      name: body.name,
      email: body.email,
      organisation: body.organisation,
      message: body.message,
    });

    return NextResponse.json({
      message: "Thank you. Your enquiry has been sent.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to submit enquiry right now." },
      { status: 500 },
    );
  }
}
