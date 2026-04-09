export default function Datenschutz() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-white">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">1. Verantwortlicher</h2>
        <p>Fabio Lechner</p>
        <p>Schafflerweg 17, 2721 Bad Fischau-Brunn, Österreich</p>
        <p>E-Mail: vetron.docs@gmail.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Demo-Anfrage
          freiwillig mitteilen. Dies betrifft: Name, Firmenname, E-Mail-Adresse, Telefonnummer und
          Ihre Nachricht.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">3. Zweck der Verarbeitung</h2>
        <p>
          Die von Ihnen übermittelten Daten werden ausschließlich zur Bearbeitung Ihrer Demo-Anfrage
          und zur Kontaktaufnahme mit Ihnen verwendet. Eine Weitergabe an Dritte erfolgt nicht.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">4. Rechtsgrundlage</h2>
        <p>
          Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
          sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">5. Speicherdauer</h2>
        <p>
          Ihre Daten werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage
          erforderlich ist, oder bis Sie einer weiteren Speicherung widersprechen.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">6. Ihre Rechte</h2>
        <p>Sie haben das Recht auf:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p className="mt-2">
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: vetron.docs@gmail.com
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">7. Hosting</h2>
        <p>
          Diese Website wird über Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104,
          USA gehostet. Vercel kann dabei Server-Logdaten erfassen. Weitere Informationen finden Sie
          in der Datenschutzerklärung von Vercel:{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://vercel.com/legal/privacy-policy
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">8. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren:
          Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien,
          dsb@dsb.gv.at
        </p>
      </section>
    </main>
  );
}
