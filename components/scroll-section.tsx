"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import DashboardMockup from "@/components/dashboard-mockup";

export default function ScrollSection() {
  return (
    <section className="bg-black border-t border-white/5">
      <ContainerScroll
        titleComponent={
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Produkt
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
              Compliance.{" "}
              <span className="text-[#1d4ed8]">Endlich automatisiert.</span>
            </h2>
            <p className="text-white/40 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Ihr System fordert Dokumente an, verfolgt sie nach und archiviert
              sie — vollautomatisch.
            </p>
          </div>
        }
      >
        <DashboardMockup />
        <p className="text-center text-[11px] text-white/20 font-medium tracking-wide mt-3 pb-1">
          ComplianceFlow by Vetron
        </p>
      </ContainerScroll>
    </section>
  );
}
