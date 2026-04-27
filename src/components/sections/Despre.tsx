"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Despre() {
  const { t } = useLanguage();
  const data = t.despre;

  return (
    <section
      id="despre"
      className="bg-[#fff9f2] border-y border-line py-9 sm:py-12 md:py-[78px]"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        <div>
          <span className="inline-block font-semibold tracking-wide uppercase text-[11px] sm:text-[13px] text-accent-dark mb-2 sm:mb-2.5">
            {data.sectionLabel}
          </span>
          <h2 className="font-display text-xl sm:text-[26px] md:text-[34px] mb-3 sm:mb-3.5">
            {data.heading}
          </h2>
          <p className="text-ink-soft text-[15px] sm:text-base md:text-lg leading-relaxed max-w-[620px]">
            {data.description}
          </p>
        </div>
        <div className="bg-white border border-line rounded-xl sm:rounded-[18px] p-3.5 sm:p-6 shadow-card">
          <h3 className="mb-2 sm:mb-3 text-base sm:text-xl">
            {data.cardTitle}
          </h3>
          <ul className="pl-[18px] text-ink-soft leading-[1.7]">
            {data.cardItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
