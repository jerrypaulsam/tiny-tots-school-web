import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Features", href: "#features" },
  { label: "Management", href: "#management" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/tinytotsns2006", icon: Facebook },
  { label: "Instagram", href: null, icon: Instagram },
  { label: "LinkedIn", href: null, icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-white/15 bg-white">
                <Image src="/tiny-tots-logo.jpeg" alt="Tiny Tots Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-base leading-none">TINY TOTS</p>
                <p className="text-gold-400 text-xs tracking-widest uppercase">National School</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed italic mb-3">
              "Place Your Child at the Right Place"
            </p>
            <p className="text-white/40 text-xs">Estd. 2006 | CBSE Syllabus</p>
            <p className="text-white/30 text-xs mt-1">UDISE No: 32141102801</p>
            <div className="mt-5">
              <p className="text-gold-400 font-semibold text-xs tracking-widest uppercase mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors duration-200 hover:border-gold-400/40 hover:text-gold-300"
                    >
                      <Icon size={16} />
                    </a>
                  ) : (
                    <span
                      key={label}
                      aria-label={`${label} link coming soon`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/35"
                    >
                      <Icon size={16} />
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-gold-300 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {"-> "}{l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-4">Contact</p>
            <address className="not-italic space-y-2 text-white/60 text-sm">
              <p>Opp. CSI Church, Mangad,</p>
              <p>Thirumala PO, Trivandrum - 695 006</p>
              <p className="pt-2">
                <a href="tel:+919895108777" className="hover:text-gold-300 transition-colors">+91 98951 08777</a>
              </p>
              <p>
                <a href="tel:+916235169877" className="hover:text-gold-300 transition-colors">+91 62351 69877</a>
              </p>
              <p>
                <a href="tel:04712355877" className="hover:text-gold-300 transition-colors">0471 - 235 5877</a>
              </p>
              <p className="pt-2">
                <a href="mailto:tinytotsns2006@gmail.com" className="hover:text-gold-300 transition-colors break-all">
                  tinytotsns2006@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>(c) {new Date().getFullYear()} Tiny Tots National School. All rights reserved.</p>
          <p>Reg No: T/721/11 | Mangad, Thirumala, Trivandrum</p>
        </div>
      </div>
    </footer>
  );
}
