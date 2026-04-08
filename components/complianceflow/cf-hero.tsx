"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowRight } from "lucide-react";

export default function CfHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <AuroraBackground className="min-h-screen bg-black" showRadialGradient>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-16">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6"
        >
          ComplianceFlow
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 120, damping: 20 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight"
        >
          Compliance.{" "}
          <span className="text-[#1d4ed8]">Automatisiert.</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          CE-Erklärungen und Sicherheitsdatenblätter — Ihr System fordert sie
          automatisch an, verfolgt sie nach und archiviert sie.{" "}
          <span className="text-white/75 font-medium">Sie machen nichts.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10"
        >
          <a href="/complianceflow#demo">
            <Button className="h-11 px-8 text-sm font-semibold rounded-[4px] bg-white hover:bg-white/90 text-black border-0 transition-all duration-200 flex items-center gap-2.5 mx-auto group">
              Demo anfragen
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-28 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
      </AuroraBackground>
    </section>
  );
}
