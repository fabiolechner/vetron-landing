"use client";

import { SectionWithMockup } from "@/components/ui/section-with-mockup";

/* ── Mockup 1: Upload & Email dispatch ─────────────────── */
function UploadMockup() {
  const rows = [
    { part: "Antriebswelle A-220", supplier: "Baumgartner GmbH", type: "CE", sent: true },
    { part: "Hydraulikzylinder HZ-08", supplier: "Müller Stahl AG", type: "CE", sent: true },
    { part: "Dichtungsset DS-Pro", supplier: "Voith Components", type: "TDB", sent: true },
    { part: "Lagergehäuse LG-44", supplier: "Steyr Metall GmbH", type: "CE", sent: false },
    { part: "Kupplung KP-120", supplier: "Pichler Technik", type: "TDB", sent: true },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#0d0d0d] border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3 bg-[#111] border-b border-white/8">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
        <span className="ml-3 text-xs text-white/40 font-medium">Upload — KW 14 · 23 Artikel erkannt</span>
      </div>

      {/* Upload bar */}
      <div className="px-5 py-4 border-b border-white/5 flex items-center gap-4">
        <div className="flex-1 h-8 rounded-lg bg-[#1d4ed8]/10 border border-[#1d4ed8]/20 flex items-center px-3 gap-2">
          <div className="w-4 h-4 rounded bg-[#1d4ed8]/30 flex-shrink-0" />
          <span className="text-[11px] text-[#1d4ed8]/70 font-medium">Zukaufteile_KW14.xlsx</span>
          <span className="ml-auto text-[10px] text-emerald-400 font-semibold">✓ Verarbeitet</span>
        </div>
        <div className="text-[10px] text-white/25 whitespace-nowrap">23 Artikel · 5 Emails</div>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-12 px-5 py-2 border-b border-white/5">
        <span className="col-span-4 text-[10px] font-semibold uppercase tracking-wider text-white/20">Artikel</span>
        <span className="col-span-4 text-[10px] font-semibold uppercase tracking-wider text-white/20">Lieferant</span>
        <span className="col-span-2 text-[10px] font-semibold uppercase tracking-wider text-white/20">Typ</span>
        <span className="col-span-2 text-[10px] font-semibold uppercase tracking-wider text-white/20">Email</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-white/4">
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-12 px-5 py-2.5 items-center">
            <span className="col-span-4 text-xs text-white/60 truncate pr-2">{row.part}</span>
            <span className="col-span-4 text-xs text-white/35 truncate pr-2">{row.supplier}</span>
            <span className="col-span-2">
              <span className="text-[10px] font-semibold text-white/40 bg-white/5 border border-white/8 px-2 py-0.5 rounded-md">
                {row.type}
              </span>
            </span>
            <span className="col-span-2">
              {row.sent ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Gesendet
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-yellow-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  Wartend
                </span>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-2.5 border-t border-white/5 bg-[#0a0a0a] flex items-center justify-between">
        <span className="text-[10px] text-white/20">Alle Anfragen automatisch gruppiert und versendet</span>
        <span className="text-[10px] text-[#1d4ed8] font-semibold">23 Artikel → 5 Emails</span>
      </div>
    </div>
  );
}

/* ── Mockup 2: Weekly report ────────────────────────────── */
function ReportMockup() {
  const items = [
    { supplier: "Baumgartner GmbH", docs: 4, status: "compliant" as const },
    { supplier: "Müller Stahl AG", docs: 2, status: "pending" as const },
    { supplier: "Steyr Metall GmbH", docs: 3, status: "overdue" as const },
    { supplier: "Voith Components", docs: 5, status: "compliant" as const },
    { supplier: "Pichler Technik", docs: 2, status: "compliant" as const },
  ];

  const statusMap = {
    compliant: { label: "Konform", color: "text-emerald-400", dot: "bg-emerald-400", bar: "bg-emerald-500" },
    pending:   { label: "Woche 1", color: "text-yellow-400",  dot: "bg-yellow-400",  bar: "bg-yellow-500"  },
    overdue:   { label: "Woche 2", color: "text-red-400",     dot: "bg-red-400",     bar: "bg-red-500"     },
  };

  const compliant = items.filter(i => i.status === "compliant").length;
  const total = items.length;

  return (
    <div className="w-full rounded-2xl bg-[#0d0d0d] border border-white/10 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-5 py-3 bg-[#111] border-b border-white/8">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
        <span className="ml-3 text-xs text-white/40 font-medium">Wochenbericht — Freitag, 11. April 2026</span>
      </div>

      {/* Summary bar */}
      <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <p className="text-xs text-white/30 mb-0.5">Gesamtstatus</p>
          <p className="text-lg font-bold text-white">
            {compliant}/{total}{" "}
            <span className="text-sm font-normal text-white/40">Lieferanten konform</span>
          </p>
        </div>
        {/* Progress ring placeholder */}
        <div className="relative w-14 h-14">
          <svg className="w-14 h-14 -rotate-90" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeOpacity="0.06" strokeWidth="4" />
            <circle
              cx="24" cy="24" r="20" fill="none"
              stroke="#1d4ed8" strokeWidth="4"
              strokeDasharray={`${(compliant / total) * 125.6} 125.6`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
            {Math.round((compliant / total) * 100)}%
          </span>
        </div>
      </div>

      {/* Supplier rows */}
      <div className="divide-y divide-white/4">
        {items.map((item, i) => {
          const s = statusMap[item.status];
          return (
            <div key={i} className="px-5 py-3 flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${s.dot}`} />
              <span className="flex-1 text-xs text-white/60 font-medium truncate">{item.supplier}</span>
              <span className="text-[10px] text-white/25">{item.docs} Dok.</span>
              <span className={`text-[10px] font-semibold ${s.color}`}>{s.label}</span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-5 py-2.5 border-t border-white/5 bg-[#0a0a0a] flex items-center justify-between">
        <span className="text-[10px] text-white/20">Automatisch generiert · keine manuelle Arbeit</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-white/30">Nächster Report: Fr. 18. Apr</span>
        </div>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────── */
export default function CfMockupSections() {
  return (
    <section className="bg-[#050505] py-28 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col gap-28">
        <SectionWithMockup
          label="Schritt 1"
          title="Excel hochladen. System übernimmt."
          description="Laden Sie Ihre wöchentliche Zukaufteil-Liste hoch. ComplianceFlow erkennt automatisch welche Dokumente fehlen und schreibt alle Lieferanten in einer einzigen strukturierten Email an."
          mockup={<UploadMockup />}
        />
        <SectionWithMockup
          label="Schritt 2"
          title="Jeden Freitag. Ihr Report. Fertig."
          description="Ausstehende Dokumente werden automatisch nachgefasst. Nach zwei Wochen ohne Antwort eskaliert das System direkt an Sie. Sie sehen immer genau wo was fehlt."
          mockup={<ReportMockup />}
          reverseLayout
        />
      </div>
    </section>
  );
}
