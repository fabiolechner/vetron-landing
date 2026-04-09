import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firma, name, email, telefon, nachricht } = body;

  if (!firma || !name || !email) {
    return NextResponse.json(
      { success: false, error: "Pflichtfelder fehlen." },
      { status: 400 }
    );
  }

  console.log("=== DEMO ANFRAGE ===");
  console.log(`Firma:     ${firma}`);
  console.log(`Name:      ${name}`);
  console.log(`Email:     ${email}`);
  console.log(`Telefon:   ${telefon || "—"}`);
  console.log(`Nachricht: ${nachricht || "—"}`);
  console.log(`Zeit:      ${new Date().toISOString()}`);
  console.log("===================");

  return NextResponse.json({ success: true });
}
