"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? t.theme.light : t.theme.dark}
      className="inline-flex items-center gap-2 text-sm text-[rgba(245,239,230,0.6)] hover:text-[#f0c59b] transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 font-[inherit]"
    >
      <span className="text-base" aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
      {isDark ? t.theme.light : t.theme.dark}
    </button>
  );
}
