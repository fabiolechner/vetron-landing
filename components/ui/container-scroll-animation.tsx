"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ContainerScroll({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.45], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.82, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 1]);

  return (
    /* Outer container — provides the scroll distance */
    <div ref={containerRef} className="relative h-[220vh]">
      {/* Sticky inner — stays pinned while outer scrolls */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-6">
        {/* Title */}
        <div className="relative z-10 text-center mb-10 md:mb-14 max-w-3xl mx-auto px-4">
          {titleComponent}
        </div>

        {/* 3-D perspective wrapper */}
        <div
          className="w-full max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            style={{ rotateX: rotate, scale, opacity }}
            className="w-full"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
