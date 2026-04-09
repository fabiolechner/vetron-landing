"use client";

import SectionWithMockup from "@/components/ui/section-with-mockup";

export default function CfMockupSections() {
  return (
    <>
      <SectionWithMockup
        title="Excel hochladen. System übernimmt."
        description="Laden Sie Ihre wöchentliche Zukaufteil-Liste hoch. ComplianceFlow erkennt automatisch welche Dokumente fehlen und schreibt alle Lieferanten in einer einzigen strukturierten Email an."
        primaryImageSrc="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800"
        secondaryImageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
      />
      <SectionWithMockup
        title="Jeden Freitag. Ihr Report. Fertig."
        description="Ausstehende Dokumente werden automatisch nachgefasst. Nach zwei Wochen ohne Antwort eskaliert das System direkt an Sie. Sie sehen immer genau wo was fehlt."
        primaryImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
        secondaryImageSrc="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800"
        reverseLayout={true}
      />
    </>
  );
}
