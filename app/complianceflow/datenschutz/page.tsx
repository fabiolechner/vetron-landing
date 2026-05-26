'use client'

import { Playfair_Display, DM_Sans } from 'next/font/google'
import Link from 'next/link'
import styles from './datenschutz.module.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function CfDatenschutzPage() {
  return (
    <div className={`${playfair.variable} ${dmSans.variable} ${styles.root}`}>
      <nav className={styles.nav}>
        <Link href="/complianceflow" className={styles.navLogo}>
          <img src="/CF-Logo-Mai.svg" style={{ height: '44px', width: 'auto', display: 'block' }} alt="ComplianceFlow" />
        </Link>
        <Link href="/complianceflow" className={styles.navBack}>← Zurück zu ComplianceFlow</Link>
      </nav>

      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.tag}>Rechtliches</p>
          <h1 className={styles.headline}>Datenschutz&shy;erklärung</h1>
          <div className={styles.divider} />

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>1. Einleitung</h2>
            <p className={styles.text}>
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten
              Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO,
              TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten
              Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>2. Kontakt mit uns</h2>
            <p className={styles.text}>
              Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen,
              werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>3. Datenspeicherung (SaaS & B2B-Kunden)</h2>
            <p className={styles.text}>
              Zum Zweck der Vertragsabwicklung und der Software-Bereitstellung (ComplianceFlow)
              werden folgende Daten bei uns gespeichert: Name, E-Mail-Adresse, Unternehmensdaten
              (inkl. Rechnungsadresse) sowie Zahlungsdaten. Die von Ihnen bereitgestellten Daten
              sind zur Vertragserfüllung bzw. zur Durchführung vorvertraglicher Maßnahmen
              erforderlich. Die Zahlungsabwicklung erfolgt über externe Zahlungsdienstleister
              (z.B. Stripe). Es werden keine Kreditkartendaten direkt auf unseren Servern
              gespeichert.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>4. Server-Logfiles</h2>
            <p className={styles.text}>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              Browsertyp/Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Diese Daten werden
              nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>5. Ihre Rechte</h2>
            <p className={styles.text}>
              Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte
              auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf
              und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
              Datenschutzrecht verstößt, können Sie sich bei der Datenschutzbehörde beschweren.
              Kontakt:{' '}
              <a href="mailto:info@vetron.at" className={styles.link}>info@vetron.at</a>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerBrand}>Compliance<span>Flow</span></span>
        <ul className={styles.footerLinks}>
          <li><a href="https://vetron.at">vetron.at</a></li>
          <li><Link href="/complianceflow/impressum">Impressum</Link></li>
        </ul>
      </footer>
    </div>
  )
}
