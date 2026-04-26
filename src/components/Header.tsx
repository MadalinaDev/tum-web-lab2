"use client";

import { useState } from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  navigation: { items: NavItem[]; footerLinks: NavItem[] };
  site: { siteName: string; siteNameFull: string };
}

export default function Header({ navigation, site }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-[rgba(246,241,234,0.92)] backdrop-blur-[10px] border-b border-line">
      <div className="container flex items-center gap-2 py-2 sm:py-5 md:gap-6">
        <a
          className="inline-flex items-center gap-2 sm:gap-3.5 text-inherit no-underline"
          href="#hero"
        >
          <span className="inline-flex items-center justify-center w-11 h-11 bg-[#fff1e4] rounded-xl p-1.5 shadow-card">
            <Image
              className="w-full h-full object-contain"
              src="/images/mascot.png"
              alt="Mascota"
              width={44}
              height={44}
            />
          </span>
          <span className="hidden sm:inline font-display font-semibold leading-tight text-sm md:text-lg">
            {site.siteNameFull}
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            style={
              menuOpen
                ? { transform: "rotate(45deg) translateY(12px)" }
                : undefined
            }
          />
          <span style={menuOpen ? { opacity: 0 } : undefined} />
          <span
            style={
              menuOpen
                ? { transform: "rotate(-45deg) translateY(-12px)" }
                : undefined
            }
          />
        </button>

        <nav
          className={`site-nav${menuOpen ? " open" : ""}`}
          aria-label="Navigatie principala"
        >
          {navigation.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="cta" href="#contact">
          Programeaza o sedinta
        </a>
      </div>
    </header>
  );
}
