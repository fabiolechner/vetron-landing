"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowRight } from "lucide-react";

const rotatingWords = ["Compliance", "Beschaffung", "Dokumentation", "Prozesse"];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden" style={{ verticalAlign: "bottom" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="inline-block text-[#1d4ed8]"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const headline = "Vetron automatisiert Ihre";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <AuroraBackground className="min-h-screen bg-black" showRadialGradient>
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-16">
        {/* Letter-by-letter headline */}
        <motion.div
          className="mb-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            {headline.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <br />
            <RotatingWord />
          </h1>
        </motion.div>

        {/* Subline */}
        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Automatisierung für Einkauf und Compliance
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Link href="/#produkte">
            <Button
              className="h-11 px-7 text-sm font-medium rounded-[4px] bg-transparent border border-white/30 text-white hover:bg-white/8 hover:border-white/50 transition-all duration-200"
            >
              Unsere Produkte
            </Button>
          </Link>
          <Link href="/#kontakt">
            <Button className="h-11 px-7 text-sm font-medium rounded-[4px] bg-white hover:bg-white/90 text-black border-0 transition-all duration-200 flex items-center gap-2 group">
              Kontakt aufnehmen
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-28 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
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
