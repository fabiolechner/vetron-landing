'use client'

import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Link from 'next/link'
import styles from './datenschutz.module.css'

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

export default function DatenschutzPage() {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable} ${styles.root}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>Vetron</Link>
        <Link href="/" className={styles.navBack}>← Zurück zur Startseite</Link>
      </nav>

      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.tag}>Rechtliches</p>
          <h1 className={styles.headline}>Datenschutz&shy;erklärung</h1>
          <div className={styles.divider} />

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Verantwortlicher</h2>
            <p className={styles.text}>Vetron GmbH</p>
            <p className={styles.text}>Musterstraße 1<br />2700 Wiener Neustadt<br />Österreich</p>
            <p className={styles.text}>E-Mail: <a href="mailto:info@vetron.at" className={styles.link}>info@vetron.at</a></p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Erhebung von Daten</h2>
            <p className={styles.text}>
              Beim Besuch unserer Website werden automatisch technische Daten (IP-Adresse, Browser,
              Zeitpunkt) erfasst. Diese Daten dienen ausschließlich der technischen Bereitstellung
              der Website.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Kontaktformular</h2>
            <p className={styles.text}>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage
              gespeichert. Eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Cookies</h2>
            <p className={styles.text}>
              Diese Website verwendet nur technisch notwendige Cookies. Es werden keine Tracking-
              oder Marketing-Cookies eingesetzt.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Ihre Rechte</h2>
            <p className={styles.text}>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO. Kontakt:{' '}
              <a href="mailto:info@vetron.at" className={styles.link}>info@vetron.at</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Hosting</h2>
            <p className={styles.text}>
              Diese Website wird über Vercel Inc. gehostet. Verarbeitungsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 Vetron · <Link href="/impressum" className={styles.footerLink}>Impressum</Link></span>
      </footer>
    </div>
  )
}
