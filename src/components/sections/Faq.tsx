"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Faq() {
  const { t } = useLanguage();
  const data = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#fff9f2] border-t border-line py-9 sm:py-12 md:py-[78px]"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 lg:gap-10 items-start">
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
        <div className="grid gap-3 md:gap-4">
          {data.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <article
                key={item.question}
                className="bg-white border border-line rounded-xl sm:rounded-2xl shadow-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-3.5 sm:px-[18px] sm:py-4 md:px-[22px] md:py-5 cursor-pointer bg-transparent border-0 font-[inherit]"
                >
                  <h3 className="text-base md:text-lg text-ink">
                    {item.question}
                  </h3>
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#fff1e4] text-accent-dark transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer${isOpen ? " open" : ""}`}>
                  <div>
                    <p className="text-ink-soft leading-relaxed px-3.5 pb-4 sm:px-[18px] sm:pb-5 md:px-[22px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
