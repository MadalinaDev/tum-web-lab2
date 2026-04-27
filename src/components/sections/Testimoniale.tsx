"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Testimoniale() {
  const { t } = useLanguage();
  const data = t.testimoniale;

  return (
    <section
      id="testimoniale"
      className="bg-[#fff9f2] border-y border-line py-9 sm:py-12 md:py-[78px]"
    >
      <div className="container">
        <span className="inline-block font-semibold tracking-wide uppercase text-[11px] sm:text-[13px] text-accent-dark mb-2 sm:mb-2.5">
          {data.sectionLabel}
        </span>
        <h2 className="font-display text-xl sm:text-[26px] md:text-[34px] mb-3 sm:mb-3.5">
          {data.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[22px] mt-6">
          {data.items.map((t) => (
            <article
              key={t.name}
              className="testimonial-card bg-white border border-line rounded-xl sm:rounded-[18px] p-3.5 sm:p-[18px] md:p-[22px] shadow-card relative before:content-['\201C'] before:absolute before:-top-[18px] before:left-4 before:font-display before:text-[52px] before:text-[rgba(217,122,53,0.22)]"
            >
              <div className="flex items-center gap-3.5 mb-3.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-14 h-14 rounded-full border-2 border-[#fff1e4] object-cover shadow-[0_10px_20px_rgba(17,18,21,0.12)]"
                  src={t.image}
                  alt="Portret elev"
                />
                <div
                  className="testimonial-rating flex items-center gap-1.5 text-[#e0a135]"
                  aria-label={`Evaluare ${t.rating} din 5`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.5l2.94 5.95 6.56.95-4.75 4.63 1.12 6.53L12 17.77l-5.87 3.09 1.12-6.53L2.5 9.4l6.56-.95L12 2.5z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="mb-[18px] text-ink-soft leading-relaxed">
                {t.text}
              </p>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold">{t.name}</span>
                <span className="text-sm text-ink-soft">{t.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
