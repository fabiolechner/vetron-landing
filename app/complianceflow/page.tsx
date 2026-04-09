"use client";

import { motion } from "framer-motion";
import { ArrowRight, Upload, Cpu, Mail, Database, Bell, ClipboardList, BarChart2, FileSearch, Shield } from "lucide-react";
import CfDemo from "@/components/complianceflow/cf-demo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="mb-6">
          <img src="/logo-white.png" alt="ComplianceFlow" style={{ height: "40px", width: "auto" }} className="mx-auto opacity-90" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold tracking-widest uppercase text-[#10b981] mb-5"
        >
          ComplianceFlow by Vetron
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6"
        >
          CE-Dokumente.{" "}
          <span className="text-[#10b981]">Automatisiert.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          ComplianceFlow übernimmt die wöchentliche Lieferanten-Kommunikation für
          CE-Erklärungen und Sicherheitsdatenblätter — damit Ihr Team sich auf das
          Wesentliche konzentriert.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <a href="#demo">
            <button className="h-11 px-8 text-sm font-semibold rounded-[4px] bg-[#10b981] hover:bg-[#0d9e6e] text-white transition-all duration-200 flex items-center gap-2.5 group">
              Demo anfragen
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </a>
          <a href="https://web-production-f4a88.up.railway.app" target="_blank" rel="noopener noreferrer">
            <button className="h-11 px-8 text-sm font-semibold rounded-[4px] bg-transparent border border-white/20 hover:border-white/40 text-white transition-all duration-200">
              Direkt starten
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

// ─── STATS ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "95%", label: "Weniger manuelle Arbeit" },
  { value: "10h", label: "Gespart pro Woche" },
  { value: "100%", label: "DSGVO-konform" },
];

function Stats() {
  return (
    <section className="bg-[#111111] border-y border-[#222222] py-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="text-4xl font-bold text-[#10b981] mb-1">{s.value}</p>
            <p className="text-sm text-white/45">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Excel hochladen",
    desc: "Artikelliste mit Lieferantendaten importieren — kein ERP-Zugang nötig.",
  },
  {
    num: "02",
    icon: Cpu,
    title: "KI kategorisiert",
    desc: "Automatische Erkennung welche Dokumente für welchen Artikel benötigt werden.",
  },
  {
    num: "03",
    icon: Mail,
    title: "Emails versendet",
    desc: "Lieferanten werden automatisch kontaktiert und bei Bedarf erinnert.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-black py-28 px-6 border-b border-[#222222]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[#10b981] mb-4">
            So funktioniert&apos;s
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            In drei Schritten zu vollständiger Compliance
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#0a0a0a] border border-[#222222] rounded-[8px] p-8"
            >
              <p className="text-4xl font-bold text-[#10b981]/20 mb-4 font-mono">{step.num}</p>
              <step.icon size={22} className="text-[#10b981] mb-4" />
              <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ─────────────────────────────────────────────────────────────────

const features = [
  { icon: Database, title: "Artikel-Gedächtnis", desc: "Bekannte Artikel werden nicht erneut angefragt — das System merkt sich den Status." },
  { icon: Bell, title: "Eskalations-System", desc: "Automatische Erinnerungen nach Woche 1 und 2, ohne manuelle Nachverfolgung." },
  { icon: ClipboardList, title: "Audit Trail", desc: "Vollständige Nachverfolgung aller Anfragen, Antworten und Statusänderungen." },
  { icon: BarChart2, title: "Wochenbericht", desc: "Übersichtlicher Status aller Dokumente auf einen Blick — jederzeit abrufbar." },
  { icon: FileSearch, title: "PDF-Erkennung", desc: "KI liest eingegangene Dokumente automatisch aus und prüft auf Vollständigkeit." },
  { icon: Shield, title: "DSGVO-konform", desc: "Gehostet in der EU, Ihre Daten verlassen niemals unsere gesicherten Server." },
];

function Features() {
  return (
    <section className="bg-black py-28 px-6 border-b border-[#222222]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-[#10b981] mb-4">
            Features
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Alles was Sie brauchen
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-[#0a0a0a] border border-[#222222] hover:border-[#10b981]/25 rounded-[8px] p-6 transition-colors duration-200"
            >
              <f.icon size={20} className="text-[#10b981] mb-4" />
              <h3 className="text-sm font-semibold text-white mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/38 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ComplianceFlowPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Features />
        <CfDemo />
      </main>
      <Footer />
    </div>
  );
}
