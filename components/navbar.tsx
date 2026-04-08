"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hover:opacity-75 transition-opacity">
  <img src="/logo-white.png" alt="Vetron" height={44} style={{ height: "44px", width: "auto" }} />
 </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#produkte" className="text-sm text-white/55 hover:text-white transition-colors">
            Produkte
          </Link>
          <Link href="/#ueber-uns" className="text-sm text-white/55 hover:text-white transition-colors">
            Über uns
          </Link>
          <Link href="/#kontakt" className="text-sm text-white/55 hover:text-white transition-colors">
            Kontakt
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="bg-white hover:bg-white/90 text-black border-0 px-5 h-9 text-sm font-medium rounded-[4px] transition-all duration-200">
            Jetzt starten
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-xl border-b border-white/8 px-6 py-5 flex flex-col gap-4">
          <Link href="/#produkte" className="text-sm text-white/55 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>
            Produkte
          </Link>
          <Link href="/#ueber-uns" className="text-sm text-white/55 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>
            Über uns
          </Link>
          <Link href="/#kontakt" className="text-sm text-white/55 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>
            Kontakt
          </Link>
          <Button className="bg-white hover:bg-white/90 text-black border-0 w-full h-10 text-sm font-medium rounded-[4px]">
            Jetzt starten
          </Button>
        </div>
      )}
    </header>
  );
}
