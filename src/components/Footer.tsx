"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1b1b1d] text-[#f5efe6] pt-12">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_0.6fr_0.8fr] gap-6 lg:gap-8 pb-8 border-b border-[rgba(245,239,230,0.2)]">
        <div>
          <p className="font-display text-lg sm:text-xl mb-2.5">
            {t.site.siteName}
          </p>
          <p className="mb-2 text-sm sm:text-base text-[rgba(245,239,230,0.72)] leading-relaxed">
            {t.site.description}
          </p>
        </div>
        <div className="grid gap-2">
          {t.navigation.footerLinks.map((link) => (
            <a
              key={link.href}
              className="text-[#f5efe6] no-underline hover:text-[#f0c59b]"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <p className="uppercase text-xs tracking-wide text-[rgba(245,239,230,0.6)] mb-2">
            {t.contact.sectionLabel}
          </p>
          <p className="mb-0.5 text-[11px] uppercase tracking-wide text-[rgba(245,239,230,0.45)] font-semibold">
            {t.contact.phoneLabel}
          </p>
          <p className="mb-2 text-sm sm:text-base text-[rgba(245,239,230,0.72)] leading-relaxed">
            {t.contact.phone}
          </p>
          <p className="mb-2 text-sm sm:text-base text-[rgba(245,239,230,0.72)] leading-relaxed">
            {t.contact.email}
          </p>
        </div>
      </div>
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 py-4 pb-6 text-[rgba(245,239,230,0.5)] text-sm">
        <p>{t.site.copyright}</p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
