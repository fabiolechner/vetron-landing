"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const plans = [
  {
    name: "Starter",
    monthlyPrice: 299,
    annualPrice: 239,
    description: "Ideal für kleinere Unternehmen",
    limit: "bis 50 Lieferanten",
    features: [
      "Bis zu 50 Lieferanten",
      "Automatische CE & TDB Anfragen",
      "Email-Gruppierung",
      "Wöchentliche Reports",
      "Audit Trail",
      "Email Support",
    ],
    cta: "Jetzt testen",
    highlighted: false,
  },
  {
    name: "Professional",
    monthlyPrice: 599,
    annualPrice: 479,
    description: "Für wachsende Unternehmen",
    limit: "bis 200 Lieferanten",
    badge: "Empfohlen",
    features: [
      "Bis zu 200 Lieferanten",
      "Automatische CE & TDB Anfragen",
      "Email-Gruppierung",
      "Eskalations-System",
      "Audit Trail & Export",
      "Wöchentliche Reports",
      "Prioritäts-Support",
      "KI-Kategorisierung",
    ],
    cta: "Jetzt testen",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "Für große Organisationen",
    limit: "Unbegrenzte Lieferanten",
    features: [
      "Unbegrenzte Lieferanten",
      "Alle Professional Features",
      "Individuelle Integrationen",
      "SLA-Garantie",
      "Dedizierter Account Manager",
      "On-Premise Option",
      "Custom Reporting",
    ],
    cta: "Kontakt aufnehmen",
    highlighted: false,
  },
];

export default function CfPricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-[#000] py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
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
            Preise
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Transparent &amp; fair
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-white/45 max-w-md mb-8"
          >
            Keine versteckten Kosten. 14 Tage kostenlos testen — keine Kreditkarte nötig.
          </motion.p>

          {/* Toggle */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1 bg-[#0f0f0f] border border-white/8 rounded-[6px] p-1"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-[4px] text-sm font-medium transition-all duration-200 ${
                !annual ? "bg-white text-black" : "text-white/45 hover:text-white"
              }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-[4px] text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                annual ? "bg-white text-black" : "text-white/45 hover:text-white"
              }`}
            >
              Jährlich
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-[3px]">
                -20%
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Plans */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className={`relative rounded-[8px] p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-white border border-white"
                  : "bg-[#0f0f0f] border border-white/8"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-[4px] text-xs font-bold bg-black text-white border border-white/10">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-black" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-black/55" : "text-white/40"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-2">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-end gap-1">
                    <span className={`text-5xl font-bold tabular-nums ${plan.highlighted ? "text-black" : "text-white"}`}>
                      €{annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-sm mb-2 ${plan.highlighted ? "text-black/50" : "text-white/40"}`}>
                      /Monat
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-white">Auf Anfrage</span>
                )}
              </div>

              {/* Limit */}
              <p className={`text-xs font-medium mb-6 ${plan.highlighted ? "text-black/50" : "text-white/35"}`}>
                {plan.limit}
              </p>

              {/* CTA */}
              <a href="/complianceflow#demo">
                <Button
                  className={`w-full h-10 text-sm font-semibold rounded-[4px] mb-6 transition-all duration-200 border-0 ${
                    plan.highlighted
                      ? "bg-black text-white hover:bg-black/85"
                      : "bg-white/8 text-white hover:bg-white/15"
                  }`}
                >
                  {plan.cta}
                </Button>
              </a>

              {/* Trial note */}
              <p className={`text-xs text-center mb-6 ${plan.highlighted ? "text-black/40" : "text-white/25"}`}>
                14 Tage kostenlos testen
              </p>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.highlighted ? "bg-black/12" : "bg-white/8"}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-black" : "text-white/50"}`}
                    />
                    <span className={`text-sm ${plan.highlighted ? "text-black/75" : "text-white/50"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
