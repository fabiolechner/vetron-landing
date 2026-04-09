export default function Impressum() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-white">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Angaben gemäß § 5 ECG</h2>
        <p>Fabio Lechner</p>
        <p>Schafflerweg 17</p>
        <p>2721 Bad Fischau-Brunn</p>
        <p>Österreich</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Kontakt</h2>
        <p>Telefon: +43 663 06043917</p>
        <p>E-Mail: vetron.docs@gmail.com</p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Online-Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
        </p>
        <p className="mt-2">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen.
        </p>
      </section>
    </main>
  );
}
