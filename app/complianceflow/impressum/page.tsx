'use client'

import { Playfair_Display, DM_Sans } from 'next/font/google'
import Link from 'next/link'
import styles from './impressum.module.css'

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

export default function CfImpressumPage() {
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
          <h1 className={styles.headline}>Impressum</h1>
          <div className={styles.divider} />

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Informationspflicht</h2>
            <p className={styles.text}>
              Angaben gemäß § 5 E-Commerce Gesetz, § 14 Unternehmensgesetzbuch,
              § 63 Gewerbeordnung und Offenlegungspflicht laut § 25 Mediengesetz.
            </p>
            <p className={styles.text}>Fabio Lechner</p>
            <p className={styles.text}>
              Schafflerweg 17<br />
              2721 Bad Fischau-Brunn<br />
              Österreich
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Unternehmensgegenstand</h2>
            <p className={styles.text}>IT-Dienstleistungen / Software as a Service (SaaS)</p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Kontakt</h2>
            <p className={styles.text}>
              Tel.: <a href="tel:+4366306043917" className={styles.link}>0663 060 43917</a>
            </p>
            <p className={styles.text}>
              E-Mail: <a href="mailto:info@vetron.at" className={styles.link}>info@vetron.at</a>
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Mitgliedschaft</h2>
            <p className={styles.text}>
              Mitglied bei: WKO Niederösterreich, Fachgruppe Unternehmensberatung,
              Buchhaltung und Informationstechnologie (UBIT)
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Berufsrecht & Aufsichtsbehörde</h2>
            <p className={styles.text}>
              Berufsrecht: Gewerbeordnung —{' '}
              <a
                href="https://www.ris.bka.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                www.ris.bka.gv.at
              </a>
            </p>
            <p className={styles.text}>
              Aufsichtsbehörde/Gewerbebehörde: Bezirkshauptmannschaft Wiener Neustadt
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Umsatzsteuer</h2>
            <p className={styles.text}>
              Umsatzsteuerfrei aufgrund der Kleinunternehmerregelung gem. § 6 Abs. 1 Z 27 UStG
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerBrand}>Compliance<span>Flow</span></span>
        <ul className={styles.footerLinks}>
          <li><a href="https://vetron.at">vetron.at</a></li>
          <li><Link href="/complianceflow/datenschutz">Datenschutz</Link></li>
        </ul>
      </footer>
    </div>
  )
}
