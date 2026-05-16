'use client'

import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Link from 'next/link'
import styles from './agb.module.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function AgbPage() {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable} ${styles.root}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>Vetron</Link>
        <Link href="/" className={styles.navBack}>← Zurück zur Startseite</Link>
      </nav>

      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.tag}>Rechtliches</p>
          <h1 className={styles.headline}>Allgemeine Geschäfts&shy;bedingungen</h1>
          <div className={styles.divider} />

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>1. Geltungsbereich</h2>
            <p className={styles.text}>
              1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge,
              Dienstleistungen und Software-Nutzungslizenzen (insbesondere „ComplianceFlow")
              zwischen Fabio Lechner (nachfolgend „Anbieter") und dem Kunden.
            </p>
            <p className={styles.text}>
              1.2 Das Angebot richtet sich ausschließlich an Unternehmer (B2B) im Sinne des UGB.
              Verbrauchergeschäfte sind ausgeschlossen.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>2. Leistungsgegenstand (ComplianceFlow)</h2>
            <p className={styles.text}>
              2.1 Der Anbieter stellt dem Kunden eine cloudbasierte Software (SaaS) zur
              Automatisierung von Compliance-Dokumentationen zur Verfügung.
            </p>
            <p className={styles.text}>
              2.2 Der Anbieter garantiert eine Verfügbarkeit der Software von 99 % im Jahresmittel,
              ausgenommen sind angekündigte Wartungsfenster.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>3. Nutzungsrechte</h2>
            <p className={styles.text}>
              Der Kunde erhält ein nicht-exklusives, nicht-übertragbares und zeitlich auf die
              Vertragslaufzeit beschränktes Recht, die Software für interne Geschäftszwecke
              zu nutzen.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>4. Vergütung und Zahlungsbedingungen</h2>
            <p className={styles.text}>
              4.1 Die Abrechnung erfolgt in der Regel über Kreditkarte (via externem
              Zahlungsdienstleister) oder nach gesonderter Vereinbarung per Rechnung.
            </p>
            <p className={styles.text}>
              4.2 Alle Preise verstehen sich netto zzgl. der gesetzlichen Umsatzsteuer.
            </p>
            <p className={styles.text}>
              4.3 Bei Kreditkartenzahlungen wird das Zahlungsmittel des Kunden automatisch
              am vereinbarten Stichtag belastet.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>5. Haftung</h2>
            <p className={styles.text}>
              5.1 Der Anbieter haftet nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung
              für leichte Fahrlässigkeit, entgangenen Gewinn, reine Vermögensschäden, mittelbare
              Schäden oder Datenverlust ist – soweit gesetzlich zulässig – ausgeschlossen.
            </p>
            <p className={styles.text}>
              5.2 Die durch „ComplianceFlow" generierten Excel-Reports und aggregierten Daten
              dienen der administrativen Unterstützung. Die rechtliche Letztverantwortung für
              die Korrektheit und Vollständigkeit der CE-Dokumentationen und Sicherheitsdatenblätter
              verbleibt ausnahmslos beim Kunden.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>6. Laufzeit und Kündigung</h2>
            <p className={styles.text}>
              Sofern nicht anders vereinbart, werden Verträge auf unbestimmte Zeit geschlossen
              und sind monatlich kündbar. Die Kündigung hat in Textform (z.B. E-Mail) zu erfolgen.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>7. Schlussbestimmungen</h2>
            <p className={styles.text}>
              7.1 Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className={styles.text}>
              7.2 Gerichtsstand für alle Streitigkeiten ist das sachlich zuständige Gericht
              für Wiener Neustadt.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          © 2026 Vetron ·{' '}
          <Link href="/impressum" className={styles.footerLink}>Impressum</Link>
          {' '}·{' '}
          <Link href="/datenschutz" className={styles.footerLink}>Datenschutz</Link>
        </span>
      </footer>
    </div>
  )
}
