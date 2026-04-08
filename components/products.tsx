"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowRight, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* ─── Count-up hook ─────────────────────────────────────── */
function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

/* ─── Stat card ─────────────────────────────────────────── */
function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(value, 1800, inView);

  return (
    <motion.div ref={ref} variants={fadeUp} transition={{ delay }} className="text-center">
      <div className="text-5xl sm:text-6xl font-bold text-white tabular-nums">
        {count}{suffix}
      </div>
      <p className="mt-3 text-sm text-white/40 font-medium tracking-wide uppercase">
        {label}
      </p>
    </motion.div>
  );
}

/* ─── Products ──────────────────────────────────────────── */
export default function Products() {
  return (
    <>
      {/* Products section */}
      <section id="produkte" className="bg-[#000] py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
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
              Software
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4"
            >
              Unsere Lösungen
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-white/45 max-w-lg text-base leading-relaxed"
            >
              Spezialisierte Software die repetitive Prozesse eliminiert und
              Ihrem Team Zeit für das Wesentliche gibt.
            </motion.p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {/* ComplianceFlow card */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <Link href="/complianceflow" className="group block h-full">
                <div className="h-full relative bg-[#0f0f0f] border border-white/8 rounded-[8px] p-8 transition-all duration-300 group-hover:border-white/20 cursor-pointer overflow-hidden">
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-[6px] bg-white/6 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                      <Shield size={18} className="text-white/70" />
                    </div>

                    {/* Badge */}
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Verfügbar
                    </span>

                    <h3 className="text-xl font-bold text-white mb-3">ComplianceFlow</h3>
                    <p className="text-white/45 text-sm leading-relaxed mb-7">
                      CE-Erklärungen und Sicherheitsdatenblätter vollautomatisch verwaltet.
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white/55 group-hover:text-white group-hover:gap-3 transition-all duration-200">
                      Mehr erfahren
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Placeholder card */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="h-full bg-[#0a0a0a] border border-white/5 rounded-[8px] p-8 flex flex-col items-start opacity-40">
                <div className="w-10 h-10 rounded-[6px] bg-white/4 border border-white/6 flex items-center justify-center mb-6">
                  <Clock size={18} className="text-white/25" />
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-[4px] text-xs font-medium bg-white/4 text-white/35 border border-white/6 mb-5">
                  In Entwicklung
                </span>
                <h3 className="text-xl font-bold text-white/35 mb-3">Weitere Tools</h3>
                <p className="text-white/20 text-sm leading-relaxed">
                  Weitere Tools in Entwicklung. Bleiben Sie auf dem Laufenden.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats section */}
      <section className="bg-black border-t border-white/5 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <StatCard value={95} suffix="%" label="Weniger manuelle Arbeit" delay={0} />
            <StatCard value={10} suffix="h" label="Gespart pro Woche" delay={0.15} />
            <StatCard value={100} suffix="%" label="DSGVO-konform" delay={0.3} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
