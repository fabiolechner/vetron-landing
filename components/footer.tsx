import Link from "next/link";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-black border-t border-white/8 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-white hover:opacity-60 transition-opacity">
          Vetron
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link href="/#produkte" className="text-sm text-white/35 hover:text-white/60 transition-colors">Produkte</Link>
          <Link href="/#ueber-uns" className="text-sm text-white/35 hover:text-white/60 transition-colors">Über uns</Link>
          <Link href="/#kontakt" className="text-sm text-white/35 hover:text-white/60 transition-colors">Kontakt</Link>
          <Link href="/complianceflow" className="text-sm text-white/35 hover:text-white/60 transition-colors">ComplianceFlow</Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/25">© 2026 Vetron. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
