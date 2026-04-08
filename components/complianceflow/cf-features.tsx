"use client";

import { motion } from "framer-motion";
import { Brain, Mail, AlertTriangle, ShieldCheck, Server, Database } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: Database,
    title: "Artikel-Gedächtnis",
    description: "Bekannte Teile werden nie doppelt angefragt. Das System merkt sich jeden Artikel und dessen Status dauerhaft.",
  },
  {
    icon: Brain,
    title: "Automatische Kategorisierung",
    description: "KI erkennt automatisch ob CE-Erklärung oder Sicherheitsdatenblatt (TDB) benötigt wird — ohne manuelle Eingabe.",
  },
  {
    icon: Mail,
    title: "Email-Gruppierung",
    description: "Mehrere Positionen vom selben Lieferanten werden zu einer einzigen Email zusammengefasst. Professionell und effizient.",
  },
  {
    icon: AlertTriangle,
    title: "Eskalations-System",
    description: "Nach Woche 1 wird der Status gelb markiert, nach Woche 2 rot — mit automatischer Eskalations-Email an den Lieferanten.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Trail",
    description: "Lückenloser digitaler Nachweis aller Anfragen, Antworten und Dokumente — jederzeit bereit für Behördenkontrollen.",
  },
  {
    icon: Server,
    title: "Kein ERP-Zugang",
    description: "ComplianceFlow arbeitet vollständig unabhängig. Ihr ERP-System bleibt völlig unberührt — keine Integration nötig.",
  },
];

export default function CfFeatures() {
  return (
    <section className="bg-[#000] py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
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
            Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Alles was Sie brauchen
          </motion.h2>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="bg-[#0f0f0f] border border-white/8 rounded-[8px] p-6 hover:border-white/15 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-[6px] bg-white/6 border border-white/10 flex items-center justify-center mb-4">
                  <Icon size={15} className="text-white/55" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
