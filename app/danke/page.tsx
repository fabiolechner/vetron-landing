import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Danke für Ihre Anfrage — Vetron",
  description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
};

export default function DankePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center max-w-xl mx-auto">
          {/* Checkmark */}
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-8">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
            Erhalten
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-5">
            Danke für Ihre Anfrage!
          </h1>
          <p className="text-lg text-white/45 leading-relaxed mb-10">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
