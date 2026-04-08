"use client";

import { motion } from "framer-motion";
import { Upload, Settings2, FileText } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Excel hochladen",
    description:
      "Laden Sie Ihre wöchentliche Zukaufteil-Liste einfach als Excel-Datei hoch. Kein spezielles Format nötig — das System erkennt die Struktur automatisch.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "System übernimmt",
    description:
      "ComplianceFlow sendet automatisch Anfragen an alle Lieferanten, verschickt Erinnerungen und archiviert eingehende Dokumente vollständig.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Report erhalten",
    description:
      "Jeden Freitag erhalten Sie eine übersichtliche Zusammenfassung des aktuellen Compliance-Status aller Teile — fertig, ohne Aufwand.",
  },
];

export default function CfHow() {
  return (
    <section className="bg-[#000] py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4"
          >
            Ablauf
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            So einfach funktioniert es
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <div className="hidden md:block absolute top-9 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} variants={fadeUp} transition={{ duration: 0.5 }}>
                <div className="bg-[#0f0f0f] border border-white/8 rounded-[8px] p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-9 h-9 rounded-[6px] bg-white/6 border border-white/10 flex items-center justify-center">
                      <Icon size={16} className="text-white/60" />
                    </div>
                    <span className="text-3xl font-bold text-white/6 tabular-nums">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
