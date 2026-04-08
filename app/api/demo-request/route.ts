import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firma, name, email, telefon, nachricht } = body;

    if (!firma || !name || !email) {
      return NextResponse.json(
        { success: false, error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    // Log to console (visible in Railway logs)
    console.log("=== DEMO ANFRAGE ===");
    console.log(`Firma:     ${firma}`);
    console.log(`Name:      ${name}`);
    console.log(`Email:     ${email}`);
    console.log(`Telefon:   ${telefon || "—"}`);
    console.log(`Nachricht: ${nachricht || "—"}`);
    console.log(`Zeit:      ${new Date().toISOString()}`);
    console.log("===================");

    // Send notification email if SMTP env vars are configured
    const smtpUser = process.env.SMTP_USER;
    const notifyEmail = process.env.NOTIFY_EMAIL || smtpUser;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = process.env.SMTP_PORT || "587";

    if (smtpUser && smtpPassword && notifyEmail) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(smtpPort),
          secure: false,
          auth: { user: smtpUser, pass: smtpPassword },
        });

        await transporter.sendMail({
          from: smtpUser,
          to: notifyEmail,
          subject: `Demo Anfrage: ${firma} — ${name}`,
          text: [
            `Neue Demo-Anfrage über die Vetron Landing Page`,
            ``,
            `Firma:     ${firma}`,
            `Name:      ${name}`,
            `Email:     ${email}`,
            `Telefon:   ${telefon || "—"}`,
            `Nachricht: ${nachricht || "—"}`,
            ``,
            `Zeit: ${new Date().toLocaleString("de-AT")}`,
          ].join("\n"),
        });
      } catch (mailErr) {
        // Don't fail the request if email fails — data is already logged
        console.error("Email send failed:", mailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Demo request error:", err);
    return NextResponse.json(
      { success: false, error: "Interner Fehler." },
      { status: 500 }
    );
  }
}
