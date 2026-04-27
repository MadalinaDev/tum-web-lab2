"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Pregatire() {
  const { t } = useLanguage();
  const data = t.pregatire;

  return (
    <section
      id="pregatire"
      className="bg-[#fff4e8] border-y border-line py-9 sm:py-12 md:py-[78px]"
    >
      <div className="container">
        <span className="inline-block font-semibold tracking-wide uppercase text-[11px] sm:text-[13px] text-accent-dark mb-2 sm:mb-2.5">
          {data.sectionLabel}
        </span>
        <h2 className="font-display text-xl sm:text-[26px] md:text-[34px] mb-3 sm:mb-3.5">
          {data.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[26px]">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="bg-white border border-line rounded-xl sm:rounded-[18px] p-3.5 sm:p-[18px] md:p-6 shadow-card"
            >
              <h3 className="mb-2 sm:mb-2.5 text-base sm:text-xl">
                {item.title}
              </h3>
              <p className="mb-3.5 text-ink-soft leading-relaxed">
                {item.description}
              </p>
              <ul className="pl-[18px] text-ink-soft leading-[1.7]">
                {item.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
