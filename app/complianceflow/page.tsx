'use client'

import { useEffect, useState } from 'react'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import styles from './complianceflow.module.css'

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

// CF Logo Icon — real vectorized paths
function CFIcon({ size = 28, color = '#1B5E20' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="185 228 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, transform: 'translateY(2px)' }}
    >
      <g fill={color}>
        <path d="M206.40 269.50 c-12.20 -3.79 -16.28 -18.47 -7.78 -27.90 c3.65 -4.03 7.19 -5.54 13.32 -5.54 c3.16 -0.05 4.08 0.15 6.85 1.51 c1.70 0.88 3.69 2.14 4.33 2.87 l1.22 1.26 l-4.38 -0.29 c-2.38 -0.19 -5.88 -0.44 -7.78 -0.58 c-4.33 -0.34 -6.56 0.34 -9.38 2.87 c-2.87 2.67 -4.03 5.35 -4.03 9.33 c0 3.45 1.02 6.32 3.16 8.85 c1.46 1.70 6.27 4.33 7.05 3.79 c0.34 -0.19 0.53 -4.08 0.53 -11.18 c0 -9.43 0.10 -10.89 0.78 -11.13 c0.44 -0.15 5.25 -0.29 10.69 -0.29 l9.92 0 l0 1.94 l0 1.94 l-8.51 0 l-8.51 0 l0 2.19 l0 2.14 l4.72 0.15 l4.67 0.15 l0.10 1.46 c0.15 2.38 -0.44 2.67 -5.15 2.67 l-4.33 0 l0 5.15 c0 5.10 0 5.10 1.12 4.81 c1.56 -0.49 4.91 -2.48 5.69 -3.35 c0.34 -0.44 0.97 -0.78 1.41 -0.78 c1.22 0.05 3.16 1.75 2.82 2.53 c-0.49 1.31 -6.13 5.25 -8.26 5.74 c-2.92 0.68 -7.49 0.53 -10.26 -0.29z" />
      </g>
    </svg>
  )
}

function CheckIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color }}>
      <path d="M2 7l3 3 7-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ComplianceFlowPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [videoClicked, setVideoClicked] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    firma: '', name: '', email: '', telefon: '', nachricht: ''
  })

  // Nav scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-cycle workflow steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  function openModal() { setShowModal(true) }
  function closeModal() {
    setShowModal(false)
    setFormState('idle')
    setFormData({ firma: '', name: '', email: '', telefon: '', nachricht: '' })
  }

  const workflowSteps = [
    {
      num: '01',
      title: 'Excel hochladen',
      desc: 'Montag morgen laden Sie Ihre Artikelliste hoch — Bestellnummer, Artikelname, Lieferant. Die KI übernimmt vollständig ab hier.',
      vtLabel: 'Montag',
      vtDay: 'Upload',
    },
    {
      num: '02',
      title: 'KI kategorisiert & sucht Emails',
      desc: 'Jeder Artikel wird als CE oder TDB eingestuft. Gleichzeitig findet der Email-Finder die Compliance-Abteilung jedes Lieferanten.',
      vtLabel: 'Montag',
      vtDay: 'KI & Email',
    },
    {
      num: '03',
      title: 'Review & Versand',
      desc: 'Sie prüfen die gefundenen Kontakte kurz — ein Klick, und professionelle Anfragen gehen automatisch von compliance@vetron.at raus.',
      vtLabel: 'Dienstag',
      vtDay: 'Versand',
    },
    {
      num: '04',
      title: 'Eingang & automatische Zuordnung',
      desc: 'Freitags liest das System alle eingegangenen PDFs ein, ordnet sie zu. Fehlende Dokumente werden automatisch eskaliert.',
      vtLabel: 'Freitag',
      vtDay: 'Abgleich',
    },
  ]

  return (
    <div className={`${playfair.variable} ${dmSans.variable} ${styles.page}`}>

      {/* NAV */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <a href="#" className={styles.navLogo}>
          <CFIcon size={28} color="#1B5E20" />
          <span className={styles.navLogoWordmark}>ComplianceFlow</span>
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#features">Funktionen</a></li>
          <li><a href="#workflow">Ablauf</a></li>
          <li><a href="#pricing">Preise</a></li>
          <li><a href="mailto:info@vetron.at">Kontakt</a></li>
          <li>
            <button onClick={openModal} className={styles.navCta}>Demo anfragen</button>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <div className={styles.hero}>
        <div>
          <div className={`${styles.heroEyebrow} ${styles.fuBase}`}>
            <span className={styles.heroDot} />
            KI-gestützte Compliance-Automatisierung
          </div>
          <h1 className={`${styles.heroHeadline} ${styles.fuBase} ${styles.fuD1}`}>
            CE-Konformität.<br />
            <em>Vollständig automatisiert.</em>
          </h1>
          <p className={`${styles.heroSub} ${styles.fuBase} ${styles.fuD2}`}>
            ComplianceFlow übernimmt die wöchentliche Dokumentenanforderung bei Ihren Lieferanten — von der Excel-Liste bis zum signierten PDF, ohne manuelle Nachverfolgung.
          </p>
          <div className={`${styles.heroActions} ${styles.fuBase} ${styles.fuD3}`}>
            <button onClick={openModal} className={styles.btnPrimary}>
              Demo anfragen
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a href="#workflow" className={styles.btnGhost}>So funktioniert&apos;s</a>
          </div>
        </div>

        <div className={`${styles.fuBase} ${styles.fuD2}`}>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNum}>87<span>%</span></div>
              <div className={styles.heroStatLabel}>Email-Trefferquote automatisch</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatNum}>~<span>0</span></div>
              <div className={styles.heroStatLabel}>Manuelle Stunden pro Zyklus</div>
            </div>
          </div>
          <div className={styles.heroCard}>
            <div className={styles.heroCardHeader}>
              <span className={styles.heroCardTitle}>Wochenzyklus KW 17 — laufend</span>
              <span className={styles.heroCardBadge}>Live</span>
            </div>
            {[
              { label: 'Phoenix Contact', pct: 100, display: '✓' },
              { label: 'Siemens AG', pct: 100, display: '✓' },
              { label: 'Wago GmbH', pct: 72, display: '72%' },
              { label: 'Beckhoff', pct: 18, display: '18%' },
            ].map((row) => (
              <div key={row.label} className={styles.progressRow}>
                <span className={styles.progressLabel}>{row.label}</span>
                <div className={styles.progressBg}>
                  <div className={styles.progressBar} style={{ width: `${row.pct}%` }} />
                </div>
                <span className={styles.progressPct}>{row.display}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENTO FEATURES */}
      <section id="features" className={styles.section}>
        <div className={styles.bentoHeader}>
          <div>
            <p className={styles.sectionLabel}>Funktionen</p>
            <h2 className={styles.sectionHeadline}>Alles, was Ihr Compliance-Team braucht.</h2>
          </div>
          <p className={styles.sectionSub}>Von der Excel-Liste bis zum vollständigen Audit Trail — ComplianceFlow bildet den gesamten Dokumentenprozess ab.</p>
        </div>

        <div className={styles.bentoGrid}>

          {/* WIDE: KI Scan */}
          <div className={`${styles.bentoCard} ${styles.bcScan}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusScanWrapper}>
                <div className={styles.illusDocs}>
                  {[
                    [24, 18, 22],
                    [22, 16, 20],
                    [26, 14, 22],
                  ].map((widths, i) => (
                    <div key={i} className={styles.illusDoc}>
                      <div className={styles.illusDocLines}>
                        {widths.map((w, j) => (
                          <div key={j} className={styles.illusDocLine} style={{ width: w }} />
                        ))}
                      </div>
                      <div className={styles.illusScanBeam} style={{ animationDelay: `${i * 0.3}s` }} />
                    </div>
                  ))}
                </div>
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" style={{ margin: '0 8px', opacity: 0.3 }}>
                  <path d="M4 8h12M12 4l4 4-4 4" stroke="#1B5E20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={styles.illusBadges}>
                  <span className={styles.badgeCe}>CE</span>
                  <span className={styles.badgeTdb}>TDB</span>
                </div>
              </div>
            </div>
            <div className={styles.bentoTitle}>KI-Kategorisierung in Sekunden</div>
            <div className={styles.bentoDesc}>Claude analysiert jeden Artikel automatisch — CE-Konformitätserklärung oder Sicherheitsdatenblatt. 100% Genauigkeit in Tests, keine manuelle Vorsortierung.</div>
          </div>

          {/* TALL ACCENT: Weekly cycle */}
          <div className={`${styles.bentoCard} ${styles.bentoAccent} ${styles.bcCycle}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusClockWrap}>
                <div className={styles.illusClockFace} />
                <div className={styles.illusClockHour} />
                <div className={styles.illusClockMin} />
                <div className={styles.illusClockCenter} />
              </div>
            </div>
            <div className={styles.bentoTitle}>Wöchentlicher Automatik-Zyklus</div>
            <div className={styles.bentoDesc}>Montag Upload, Freitag Abgleich — vollständig automatisiert, mit Eskalation bei ausbleibenden Antworten.</div>
            <div className={styles.weekPills}>
              {['Mo', 'Di', 'Mi', 'Do', 'Fr'].map((d) => (
                <span key={d} className={`${styles.weekPill} ${(d === 'Mo' || d === 'Fr') ? styles.weekPillActive : ''}`}>{d}</span>
              ))}
            </div>
          </div>

          {/* SQUARE: Email Finder */}
          <div className={`${styles.bentoCard} ${styles.bcEmail}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusEnvWrap}>
                <div className={styles.illusEnv}>
                  <div className={styles.illusEnvFlap} />
                  <div className={styles.illusEnvLines}>
                    <div className={styles.illusEnvLine} style={{ width: 26 }} />
                    <div className={styles.illusEnvLine} style={{ width: 18 }} />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bentoTitle}>Email-Finder</div>
            <div className={styles.bentoDesc}>87% Trefferquote — findet automatisch die Compliance-Abteilung des Lieferanten.</div>
          </div>

          {/* SQUARE: Gmail */}
          <div className={`${styles.bentoCard} ${styles.bcGmail}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusInbox}>
                <div className={styles.illusInboxCheck}>
                  <svg viewBox="0 0 11 11" width="11" height="11">
                    <path d="M2 5.5l2.5 2.5 4.5-5" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.bentoTitle}>Gmail-Integration</div>
            <div className={styles.bentoDesc}>Eingehende PDFs werden gelesen und via KI dem richtigen Artikel zugeordnet.</div>
          </div>

          {/* WIDE: Article memory */}
          <div className={`${styles.bentoCard} ${styles.bcMemory}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusMemGrid}>
                <div className={styles.illusMemRow}>
                  {[1, 0.6, 0.6, 1, 1, 0.4].map((op, i) => (
                    <div key={i} className={styles.illusMemCell} style={{ opacity: op }} />
                  ))}
                </div>
                <div className={styles.illusMemRow}>
                  {[1, 1, 0.5, 0.3].map((op, i) => (
                    <div key={i} className={styles.illusMemCell} style={{ opacity: op }} />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.bentoTitle}>Artikel-Gedächtnis — 60 Tage</div>
            <div className={styles.bentoDesc}>Einmal gefundene Supplier-Daten werden gecacht — keine doppelte Suche, kein redundanter Aufwand beim nächsten Zyklus. Spart API-Kosten und Zeit.</div>
          </div>

          {/* SQUARE: Audit trail */}
          <div className={`${styles.bentoCard} ${styles.bcAudit}`}>
            <div className={styles.bentoIllus}>
              <div className={styles.illusBars}>
                {[12, 18, 14, 22, 28].map((h, i) => (
                  <div key={i} className={styles.illusBar} style={{ height: h }} />
                ))}
              </div>
            </div>
            <div className={styles.bentoTitle}>Audit Trail</div>
            <div className={styles.bentoDesc}>Lückenloser Nachweis für Ihr QM — jederzeit exportierbar.</div>
          </div>

        </div>
      </section>

      {/* WORKFLOW + VIDEO */}
      <div className={styles.workflowWrap} id="workflow">
        <div className={styles.workflowInner}>
          <p className={styles.sectionLabel}>Ablauf</p>
          <h2 className={styles.sectionHeadline}>Von der Excel-Datei zur vollständigen Dokumentation.</h2>
          <p className={styles.sectionSub}>Der gesamte Compliance-Prozess in einem wöchentlichen Automatik-Zyklus.</p>

          <div className={styles.workflowLayout}>
            <div className={styles.workflowSteps}>
              {workflowSteps.map((step, i) => (
                <div
                  key={i}
                  className={`${styles.workflowStep} ${activeStep === i ? styles.workflowStepActive : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <span className={styles.wsNum}>{step.num}</span>
                  <div>
                    <div className={styles.wsTitle}>{step.title}</div>
                    <div className={styles.wsDesc}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.workflowVideoPanel}>
              <div className={styles.videoBox}>
                <div className={styles.videoPlaceholder}>
                  <div className={styles.videoPlay} onClick={() => setVideoClicked(true)}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff" style={{ marginLeft: 3 }}>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className={styles.videoCaption}>
                    {videoClicked ? 'Demo-Video wird in Kürze verfügbar' : 'Demo-Video ansehen'}
                  </span>
                </div>
              </div>
              <div className={styles.videoTimeline}>
                {workflowSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`${styles.vtStep} ${activeStep === i ? styles.vtStepActive : ''}`}
                    onClick={() => setActiveStep(i)}
                  >
                    <div className={styles.vtLabel}>{step.vtLabel}</div>
                    <div className={styles.vtDay}>{step.vtDay}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section id="pricing" className={styles.section}>
        <div className={styles.pricingHead}>
          <p className={styles.sectionLabel}>Preise</p>
          <h2 className={styles.sectionHeadline}>Transparent. Skalierbar.</h2>
          <p className={styles.sectionSub}>Alle Pläne inklusive Setup, Support und monatlicher Kündigung.</p>
        </div>
        <div className={styles.pricingGrid}>

          {/* Starter */}
          <div className={styles.pricingCard}>
            <div className={styles.pTier}>Starter</div>
            <div className={styles.pPrice}>€399</div>
            <div className={styles.pPeriod}>pro Monat, zzgl. MwSt.</div>
            <hr className={styles.pDivider} />
            <ul className={styles.pFeatures}>
              {['Bis zu 50 Lieferanten/Monat', 'CE & TDB Kategorisierung', 'Email-Finder + Auto-Versand', 'Wochenbericht (Excel)', 'Email-Support'].map(f => (
                <li key={f} className={styles.pFeature}><CheckIcon />{f}</li>
              ))}
            </ul>
            <a href="mailto:info@vetron.at" className={`${styles.pCta} ${styles.pCtaOutline}`}>Jetzt starten</a>
          </div>

          {/* Professional */}
          <div className={`${styles.pricingCard} ${styles.pricingFeatured}`}>
            <div className={styles.pricingBadge}>Beliebtester Plan</div>
            <div className={styles.pTier}>Professional</div>
            <div className={styles.pPrice}>€699</div>
            <div className={styles.pPeriod}>pro Monat, zzgl. MwSt.</div>
            <hr className={styles.pDivider} />
            <ul className={styles.pFeatures}>
              {['Unbegrenzte Lieferanten', 'Gmail-Integration (automatisch)', 'KI PDF-Matching & Zuordnung', 'Artikel-Gedächtnis (60 Tage)', 'Eskalations-Automatik', 'Priority-Support (24h)'].map(f => (
                <li key={f} className={styles.pFeature}><CheckIcon color="#4ADE80" />{f}</li>
              ))}
            </ul>
            <button onClick={openModal} className={`${styles.pCta} ${styles.pCtaWhite}`}>Demo anfragen</button>
          </div>

          {/* Enterprise */}
          <div className={styles.pricingCard}>
            <div className={styles.pTier}>Enterprise</div>
            <div className={styles.pPrice} style={{ fontSize: 28, paddingTop: 6, letterSpacing: '-0.01em' }}>Auf Anfrage</div>
            <div className={styles.pPeriod}>individuelles Angebot</div>
            <hr className={styles.pDivider} />
            <ul className={styles.pFeatures}>
              {['Alles aus Professional', 'Multi-Mandanten', 'ERP-Integration auf Anfrage', 'Dedizierter Account Manager', 'SLA-Garantie'].map(f => (
                <li key={f} className={styles.pFeature}><CheckIcon />{f}</li>
              ))}
            </ul>
            <a href="mailto:info@vetron.at" className={`${styles.pCta} ${styles.pCtaOutline}`}>Kontakt aufnehmen</a>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <div className={styles.ctaWrap}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeadline}>
            Bereit, Compliance endlich <em>automatisch</em> zu machen?
          </h2>
          <div className={styles.ctaBtns}>
            <button onClick={openModal} className={styles.btnPrimary} style={{ fontSize: 15, padding: '14px 30px' }}>
              Demo anfragen
            </button>
            <span className={styles.ctaNote}>Kostenlose Erstberatung · Keine Bindung</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerBrand}>Compliance<span>Flow</span></span>
          <span className={styles.footerCopy}>by Vetron · © 2026</span>
        </div>
        <ul className={styles.footerLinks}>
          <li><a href="https://vetron.at">vetron.at</a></li>
          <li><a href="mailto:info@vetron.at">info@vetron.at</a></li>
          <li><a href="#">Impressum</a></li>
          <li><a href="#">Datenschutz</a></li>
        </ul>
      </footer>

      {/* MODAL */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}>
          <div className={styles.modalBox}>
            <button className={styles.modalClose} onClick={closeModal}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {formState === 'success' ? (
              <div className={styles.modalSuccess}>
                <div className={styles.modalSuccessIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l5 5L19 7" stroke="#1B5E20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.modalSuccessTitle}>Anfrage gesendet!</div>
                <div className={styles.modalSuccessText}>
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen. Wir freuen uns auf das Gespräch.
                </div>
                <button className={styles.btnPrimary} onClick={() => { setShowModal(false); setFormState('idle') }}>
                  Schließen
                </button>
              </div>
            ) : (
              <>
                <div className={styles.modalEyebrow}>Kontakt</div>
                <h2 className={styles.modalHeadline}>Demo anfragen</h2>
                <p className={styles.modalSub}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>

                <form className={styles.modalForm} onSubmit={handleSubmit}>
                  <div className={styles.modalRow}>
                    <div className={styles.modalField}>
                      <label className={styles.modalLabel}>Firma <span style={{ color: '#EF4444' }}>*</span></label>
                      <input
                        className={styles.modalInput}
                        placeholder="Mustermann GmbH"
                        value={formData.firma}
                        onChange={e => setFormData(p => ({ ...p, firma: e.target.value }))}
                        required
                      />
                    </div>
                    <div className={styles.modalField}>
                      <label className={styles.modalLabel}>Name <span style={{ color: '#EF4444' }}>*</span></label>
                      <input
                        className={styles.modalInput}
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.modalRow}>
                    <div className={styles.modalField}>
                      <label className={styles.modalLabel}>Email <span style={{ color: '#EF4444' }}>*</span></label>
                      <input
                        type="email"
                        className={styles.modalInput}
                        placeholder="max@mustermann.at"
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className={styles.modalField}>
                      <label className={styles.modalLabel}>Telefon <span className={styles.modalLabelOptional}>(optional)</span></label>
                      <input
                        className={styles.modalInput}
                        placeholder="+43 1 234 5678"
                        value={formData.telefon}
                        onChange={e => setFormData(p => ({ ...p, telefon: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className={styles.modalField}>
                    <label className={styles.modalLabel}>Nachricht <span className={styles.modalLabelOptional}>(optional)</span></label>
                    <textarea
                      className={`${styles.modalInput} ${styles.modalTextarea}`}
                      placeholder="Beschreiben Sie kurz Ihren Anwendungsfall..."
                      value={formData.nachricht}
                      onChange={e => setFormData(p => ({ ...p, nachricht: e.target.value }))}
                    />
                  </div>

                  <hr className={styles.modalDivider} />

                  <div className={styles.modalSubmit}>
                    <span className={styles.modalNote}>
                      Ihre Daten werden vertraulich behandelt<br />und nicht an Dritte weitergegeben.
                    </span>
                    <button
                      type="submit"
                      className={styles.btnPrimary}
                      disabled={formState === 'loading'}
                    >
                      {formState === 'loading' ? 'Wird gesendet...' : 'Anfrage senden →'}
                    </button>
                  </div>

                  {formState === 'error' && (
                    <p style={{ fontSize: 13, color: '#EF4444', textAlign: 'center' }}>
                      Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@vetron.at
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  )
}
