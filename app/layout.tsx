import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vetron — Think Deeper",
  description:
    "Vetron automatisiert die Busy Work produzierender Betriebe mit KI — damit Ihre Teams Zeit für das gewinnen, was zählt: tiefes, konzentriertes Denken. Entwickelt in Österreich.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
