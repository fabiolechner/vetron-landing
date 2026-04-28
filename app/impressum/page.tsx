'use client'

import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Link from 'next/link'
import styles from './impressum.module.css'

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

export default function ImpressumPage() {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable} ${styles.root}`}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLogo}>Vetron</Link>
        <Link href="/" className={styles.navBack}>← Zurück zur Startseite</Link>
      </nav>

      <main className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.tag}>Rechtliches</p>
          <h1 className={styles.headline}>Impressum</h1>
          <div className={styles.divider} />

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Angaben gemäß § 5 ECG</h2>
            <p className={styles.text}>Vetron GmbH</p>
            <p className={styles.text}>Musterstraße 1<br />2700 Wiener Neustadt<br />Österreich</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Kontakt</h2>
            <p className={styles.text}>E-Mail: <a href="mailto:info@vetron.at" className={styles.link}>info@vetron.at</a></p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Unternehmensgegenstand</h2>
            <p className={styles.text}>Entwicklung und Vertrieb von B2B-Softwarelösungen für produzierende Unternehmen.</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Haftungsausschluss</h2>
            <p className={styles.text}>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine
              Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte
              verantwortlich. Für externe Links übernehmen wir keine Haftung.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Urheberrecht</h2>
            <p className={styles.text}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 Vetron · <Link href="/datenschutz" className={styles.footerLink}>Datenschutz</Link></span>
      </footer>
    </div>
  )
}
