"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label={
        lang === "ro" ? "Schimbă în rusă" : "Переключить на румынский"
      }
      className="lang-toggle"
      type="button"
    >
      <span
        className={
          lang === "ro" ? "lang-toggle__active" : "lang-toggle__inactive"
        }
      >
        RO
      </span>
      <span className="lang-toggle__sep">/</span>
      <span
        className={
          lang === "ru" ? "lang-toggle__active" : "lang-toggle__inactive"
        }
      >
        RU
      </span>
    </button>
  );
}
