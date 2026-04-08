/* Pure presentational — no client directive needed */

const suppliers = [
  { name: "Baumgartner GmbH", part: "Antriebswelle A-220", type: "CE", status: "compliant", week: "—" },
  { name: "Müller Stahl AG", part: "Hydraulikzylinder HZ-08", type: "CE", status: "pending", week: "Woche 1" },
  { name: "Voith Components", part: "Dichtungsset DS-Pro", type: "TDB", status: "compliant", week: "—" },
  { name: "Steyr Metall GmbH", part: "Lagergehäuse LG-44", type: "CE", status: "overdue", week: "Woche 2" },
  { name: "Pichler Technik", part: "Kupplung KP-120", type: "TDB", status: "compliant", week: "—" },
  { name: "AVL Components", part: "Sensor SX-09", type: "CE", status: "pending", week: "Woche 1" },
  { name: "Engel Hydraulik", part: "Ventilblock VB-33", type: "CE", status: "compliant", week: "—" },
  { name: "KTM Industries", part: "Rahmenstrebe RS-07", type: "CE", status: "overdue", week: "Woche 3" },
];

const statusConfig = {
  compliant: {
    dot: "bg-emerald-400",
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    label: "Konform",
  },
  pending: {
    dot: "bg-yellow-400",
    badge: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
    label: "Ausstehend",
  },
  overdue: {
    dot: "bg-red-400",
    badge: "bg-red-500/15 text-red-400 border-red-500/25",
    label: "Überfällig",
  },
};

export default function DashboardMockup() {
  const compliant = suppliers.filter((s) => s.status === "compliant").length;
  const pending = suppliers.filter((s) => s.status === "pending").length;
  const overdue = suppliers.filter((s) => s.status === "overdue").length;

  return (
    <div className="w-full h-[420px] md:h-[520px] bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-[0_0_80px_rgba(0,0,0,0.8)]">

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-[#111] shrink-0">
        <div className="flex items-center gap-2.5">
          {/* Traffic lights */}
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          <span className="ml-3 text-xs font-semibold text-white/60 tracking-wide">
            ComplianceFlow — Dashboard
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-white/30 hidden sm:block">KW 14 · 2026</span>
          <div className="w-6 h-6 rounded-full bg-[#1d4ed8]/20 border border-[#1d4ed8]/30 flex items-center justify-center">
            <span className="text-[8px] font-bold text-[#1d4ed8]">V</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-px bg-white/5 border-b border-white/8 shrink-0">
        {[
          { label: "Gesamt", value: suppliers.length, color: "text-white" },
          { label: "Konform", value: compliant, color: "text-emerald-400" },
          { label: "Ausstehend", value: pending, color: "text-yellow-400" },
          { label: "Überfällig", value: overdue, color: "text-red-400" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#0d0d0d] px-4 py-3 flex flex-col gap-0.5">
            <span className={`text-xl font-bold tabular-nums ${stat.color}`}>
              {stat.value}
            </span>
            <span className="text-[10px] text-white/35 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Table header */}
      <div className="grid grid-cols-12 px-5 py-2 border-b border-white/5 shrink-0">
        <span className="col-span-4 text-[10px] font-semibold uppercase tracking-wider text-white/25">Lieferant</span>
        <span className="col-span-4 text-[10px] font-semibold uppercase tracking-wider text-white/25 hidden sm:block">Artikel</span>
        <span className="col-span-2 text-[10px] font-semibold uppercase tracking-wider text-white/25">Typ</span>
        <span className="col-span-2 text-[10px] font-semibold uppercase tracking-wider text-white/25">Status</span>
      </div>

      {/* Table rows */}
      <div className="flex-1 overflow-hidden divide-y divide-white/4">
        {suppliers.map((row, i) => {
          const cfg = statusConfig[row.status as keyof typeof statusConfig];
          return (
            <div
              key={i}
              className="grid grid-cols-12 px-5 py-2.5 items-center hover:bg-white/3 transition-colors"
            >
              <div className="col-span-4 flex items-center gap-2 min-w-0">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
                <span className="text-xs text-white/70 font-medium truncate">{row.name}</span>
              </div>
              <div className="col-span-4 hidden sm:block min-w-0 pr-2">
                <span className="text-xs text-white/35 truncate block">{row.part}</span>
              </div>
              <div className="col-span-2">
                <span className="text-[10px] font-semibold text-white/40 bg-white/5 border border-white/8 px-2 py-0.5 rounded-md">
                  {row.type}
                </span>
              </div>
              <div className="col-span-2">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${cfg.badge}`}
                >
                  {cfg.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom bar */}
      <div className="px-5 py-2.5 border-t border-white/8 bg-[#0a0a0a] flex items-center justify-between shrink-0">
        <span className="text-[10px] text-white/25">
          Nächster Report: Freitag, 10. April
        </span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-white/30">System aktiv</span>
        </div>
      </div>
    </div>
  );
}
