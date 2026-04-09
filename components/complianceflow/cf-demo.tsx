"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CfDemo() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      firma: (form.elements.namedItem("firma") as HTMLInputElement).value,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      telefon: (form.elements.namedItem("telefon") as HTMLInputElement).value,
      nachricht: (form.elements.namedItem("nachricht") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Serverfehler. Bitte versuchen Sie es erneut.");

      window.location.href = "/danke";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ein Fehler ist aufgetreten.");
      setLoading(false);
    }
  }

  return (
    <section id="demo" className="bg-[#000] py-32 px-6 border-t border-white/5">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
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
            Kontakt
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Demo anfragen
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="text-white/45 text-base leading-relaxed"
          >
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          {/* Row 1: Firma + Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firma" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Firma <span className="text-white/30">*</span>
              </label>
              <input
                id="firma"
                name="firma"
                type="text"
                required
                placeholder="Mustermann GmbH"
                className="bg-[#0f0f0f] border border-white/10 rounded-[4px] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#10b981] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Name <span className="text-white/30">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Max Mustermann"
                className="bg-[#0f0f0f] border border-white/10 rounded-[4px] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#10b981] transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email + Telefon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Email <span className="text-white/30">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="max@mustermann.at"
                className="bg-[#0f0f0f] border border-white/10 rounded-[4px] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#10b981] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="telefon" className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Telefon <span className="text-white/20">(optional)</span>
              </label>
              <input
                id="telefon"
                name="telefon"
                type="tel"
                placeholder="+43 1 234 5678"
                className="bg-[#0f0f0f] border border-white/10 rounded-[4px] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#10b981] transition-colors"
              />
            </div>
          </div>

          {/* Nachricht */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nachricht" className="text-xs font-medium text-white/50 uppercase tracking-wider">
              Nachricht <span className="text-white/20">(optional)</span>
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              rows={4}
              placeholder="Beschreiben Sie kurz Ihren Anwendungsfall..."
              className="bg-[#0f0f0f] border border-white/10 rounded-[4px] px-4 py-2.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#10b981] transition-colors resize-none"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-red-400 bg-red-400/8 border border-red-400/15 rounded-[4px] px-4 py-2.5">
              {error}
            </p>
          )}

          {/* Submit */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="h-11 px-8 text-sm font-semibold rounded-[4px] bg-[#10b981] hover:bg-[#0d9e6e] text-white border-0 transition-all duration-200 flex items-center gap-2.5 group disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  Demo anfragen
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
