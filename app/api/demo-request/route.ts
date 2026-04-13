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

  try {
    await fetch("https://app.vetron.at/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firma, name, email, telefon, nachricht }),
    });
  } catch (err) {
    console.error("Railway forward failed:", err);
  }

  return NextResponse.json({ success: true });
}
