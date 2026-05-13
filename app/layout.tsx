import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Vetron (Österreich)",
  description:
    "Intelligente Software für den österreichischen Mittelstand. CE-Erklärungen und Sicherheitsdatenblätter vollautomatisch verwaltet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
    </html>
  );
}
