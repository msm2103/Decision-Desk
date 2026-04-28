import { Resend } from "resend";
import { siteConfig } from "@/lib/seo";

function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

export async function sendTransactionalEmail(input: {
  to: string;
  subject: string;
  html: string;
}) {
  const resend = getResendClient();
  if (!resend) {
    return { sent: false, reason: "RESEND_API_KEY not configured" };
  }

  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? `${siteConfig.name} <onboarding@resend.dev>`,
    to: input.to,
    subject: input.subject,
    html: input.html,
    replyTo: siteConfig.contactEmail,
  });

  return { sent: true };
}

export async function sendContactEnquiryEmail(payload: {
  name: string;
  email: string;
  organisation?: string;
  message: string;
}) {
  const html = `
    <h2>New enquiry from Decision Desk site</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company / Organisation:</strong> ${payload.organisation || "Not provided"}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, "<br />")}</p>
  `;

  return sendTransactionalEmail({
    to: siteConfig.contactEmail,
    subject: "New correspondence from Decision Desk",
    html,
  });
}
