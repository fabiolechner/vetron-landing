import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { firma, name, email, telefon, nachricht } = await req.json()

  if (!firma || !name || !email) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen' }, { status: 400 })
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'ComplianceFlow <noreply@vetron.at>',
      to: 'info@vetron.at',
      subject: `Demo-Anfrage: ${firma}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 32px;">
          <h2 style="color: #1B5E20; margin-bottom: 24px;">Neue Demo-Anfrage</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6B6B67; width: 120px;">Firma</td><td style="padding: 8px 0; font-weight: 500;">${firma}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B67;">Name</td><td style="padding: 8px 0; font-weight: 500;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6B6B67;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1B5E20;">${email}</a></td></tr>
            ${telefon ? `<tr><td style="padding: 8px 0; color: #6B6B67;">Telefon</td><td style="padding: 8px 0;">${telefon}</td></tr>` : ''}
            ${nachricht ? `<tr><td style="padding: 8px 0; color: #6B6B67; vertical-align: top;">Nachricht</td><td style="padding: 8px 0;">${nachricht}</td></tr>` : ''}
          </table>
        </div>
      `,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
