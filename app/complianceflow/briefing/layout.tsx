export default function BriefingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        html, body { background-color: #F5F4F0 !important; color: #1A1A18 !important; }
        ::-webkit-scrollbar-track { background: #F5F4F0 !important; }
        ::-webkit-scrollbar-thumb { background: rgba(26,26,24,0.15) !important; }
      `}</style>
      {children}
    </>
  );
}
