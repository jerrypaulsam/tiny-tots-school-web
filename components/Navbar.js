import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Features", href: "#features" },
  { label: "Management", href: "#management" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900 shadow-xl py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full overflow-hidden border border-white/15 bg-white">
            <Image
              src="/tiny-tots-logo.jpeg"
              alt="Tiny Tots National School Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="leading-tight">
            <p className="font-display font-bold text-white text-sm md:text-base leading-none">
              TINY TOTS
            </p>
            <p className="text-gold-300 text-xs tracking-widest uppercase">
              National School
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-gold-300 text-sm font-medium transition-colors duration-200 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-gold-gradient text-navy-900 font-bold text-sm px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Admissions Open
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-white/10 px-4 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-gold-300 text-sm font-medium border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-gold-gradient text-navy-900 font-bold text-sm px-5 py-2.5 rounded-full"
          >
            Admissions Open 2026-2027
          </a>
        </div>
      )}
    </nav>
  );
}
