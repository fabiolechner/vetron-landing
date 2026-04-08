"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWithMockupProps {
  label?: string;
  title: string;
  description: string;
  mockup: ReactNode;
  reverseLayout?: boolean;
}

export function SectionWithMockup({
  label,
  title,
  description,
  mockup,
  reverseLayout = false,
}: SectionWithMockupProps) {
  return (
    <motion.div
      className={`flex flex-col ${
        reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 lg:gap-20`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Text side */}
      <div className="flex-1 min-w-0">
        {label && (
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-3">
            {label}
          </p>
        )}
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
          {title}
        </h3>
        <p className="text-base text-white/50 leading-relaxed max-w-md">
          {description}
        </p>
      </div>

      {/* Mockup side */}
      <motion.div
        className="flex-1 w-full min-w-0"
        initial={{ opacity: 0, x: reverseLayout ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {mockup}
      </motion.div>
    </motion.div>
  );
}
