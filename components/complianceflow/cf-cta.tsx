"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CfCta() {
  return (
    <section className="bg-black border-t border-white/5 py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">
            Jetzt starten
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Bereit, Stunden zu sparen?
          </h2>

          <p className="text-lg text-white/45 max-w-xl mx-auto mb-10 leading-relaxed">
            Starten Sie noch heute kostenlos. Kein ERP-Zugang nötig, keine
            Kreditkarte, keine lange Einrichtung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="https://web-production-f4a88.up.railway.app">
              <Button className="h-11 px-9 text-sm font-semibold rounded-[4px] bg-white hover:bg-white/90 text-black border-0 transition-all duration-200 flex items-center gap-2.5 group">
                Jetzt kostenlos starten
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>
            <p className="text-sm text-white/25">14 Tage gratis · keine Kreditkarte</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
