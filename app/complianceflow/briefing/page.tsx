import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-dm-sans-briefing",
});

export const metadata: Metadata = {
  title: "Executive Briefing — Vetron ComplianceFlow",
  description:
    "In 15 Minuten zum Fahrplan für Ihren ersten autonomen Pilot-Loop. Keine IT-Integration. Keine System-Migration.",
};

const COLORS = {
  cream: "#F5F4F0",
  forest: "#1B5E20",
  ink: "#1A1A18",
  muted: "#6B6B67",
  border: "rgba(26,26,24,0.09)",
} as const;

export default function BriefingPage() {
  return (
    <div
      className={`${playfair.variable} ${dmSans.variable} min-h-screen flex flex-col`}
      style={{
        backgroundColor: COLORS.cream,
        color: COLORS.ink,
        fontFamily: "var(--font-dm-sans-briefing), system-ui, sans-serif",
      }}
    >
      <header
        className="w-full"
        style={{ borderBottom: `1px solid ${COLORS.border}` }}
      >
        <div className="mx-auto max-w-6xl px-6 sm:px-10 h-16 flex items-center">
          <Link
            href="/"
            aria-label="Vetron — Startseite"
            className="text-xl tracking-tight"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 500,
              color: COLORS.forest,
              letterSpacing: "-0.01em",
            }}
          >
            Vetron
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 sm:px-10 pt-20 pb-12 sm:pt-28 sm:pb-16 flex flex-col items-center text-center">
          <p
            className="text-xs sm:text-[13px] mb-8"
            style={{
              color: COLORS.muted,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            ComplianceFlow
          </p>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-8"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: COLORS.ink,
            }}
          >
            Executive Briefing.
          </h1>

          <p
            className="text-base sm:text-lg leading-relaxed max-w-[600px] mx-auto"
            style={{ color: COLORS.muted, fontWeight: 400 }}
          >
            In 15 Minuten zum Fahrplan für Ihren ersten autonomen Pilot-Loop.
            Keine IT-Integration. Keine System-Migration.
          </p>

          <ul
            className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-[13px]"
            style={{
              color: COLORS.muted,
              letterSpacing: "0.08em",
              fontWeight: 500,
            }}
            aria-label="Trust signals"
          >
            <li>Made in Austria</li>
            <li aria-hidden="true" style={{ color: COLORS.border }}>
              •
            </li>
            <li>100% DSGVO-Konform</li>
            <li aria-hidden="true" style={{ color: COLORS.border }}>
              •
            </li>
            <li>Zero Integration</li>
          </ul>
        </section>

        <section className="mx-auto max-w-3xl px-6 sm:px-10 pb-24">
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              backgroundColor: COLORS.cream,
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/DEIN_LINK?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f5f4f0&text_color=1a1a18&primary_color=1b5e20"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        </section>
      </main>

      <footer
        className="w-full"
        style={{ borderTop: `1px solid ${COLORS.border}` }}
      >
        <div
          className="mx-auto max-w-6xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px]"
          style={{ color: COLORS.muted }}
        >
          <p>© 2026 Vetron</p>
          <nav className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="hover:opacity-70 transition-opacity"
              style={{ color: COLORS.muted }}
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:opacity-70 transition-opacity"
              style={{ color: COLORS.muted }}
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
