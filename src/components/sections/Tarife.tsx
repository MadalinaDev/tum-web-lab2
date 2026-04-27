"use client";

import { useLanguage } from "@/context/LanguageContext";

function selectPackageAndScroll(title: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("selectPackage", { detail: title }));
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Tarife() {
  const { t } = useLanguage();
  const data = t.tarife;
  const published = data.items.filter((plan) => !plan.draft);

  return (
    <section
      id="tarife"
      className="bg-[#fff4e8] border-y border-line py-9 sm:py-12 md:py-[78px]"
    >
      <div className="container">
        <span className="inline-block font-semibold tracking-wide uppercase text-[11px] sm:text-[13px] text-accent-dark mb-2 sm:mb-2.5">
          {data.sectionLabel}
        </span>
        <h2 className="font-display text-xl sm:text-[26px] md:text-[34px] mb-3 sm:mb-3.5">
          {data.heading}
        </h2>
        <p className="text-ink-soft text-[15px] sm:text-base md:text-lg leading-relaxed max-w-[620px] mb-7">
          {data.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[22px]">
          {published.map((plan) => (
            <article
              key={plan.title}
              className={`price-card ${
                plan.recommended
                  ? "bg-[#fffaf3] border border-[rgba(217,122,53,0.45)]"
                  : "bg-white border border-line"
              } rounded-xl sm:rounded-[18px] p-3.5 sm:p-5 md:p-[26px] shadow-card relative grid gap-3`}
            >
              {plan.recommended && (
                <div className="absolute top-[18px] right-[18px] bg-[#fbe2cc] text-accent-dark py-1.5 px-2.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                  {data.recommended}
                </div>
              )}
              <h3 className="text-base sm:text-xl">{plan.title}</h3>
              <div className="flex items-baseline gap-2.5">
                <p className="font-display text-[22px] sm:text-[26px] md:text-[32px] text-accent-dark">
                  {plan.price}
                </p>
                {plan.hasDiscount && plan.oldPrice && (
                  <>
                    <p className="font-display text-[15px] sm:text-[17px] md:text-[20px] text-ink-soft line-through opacity-60">
                      {plan.oldPrice}
                    </p>
                    <span className="inline-block bg-[#d3f5e0] text-[#1a7a3a] text-[11px] sm:text-xs font-semibold uppercase tracking-wide py-1 px-2 rounded-full">
                      {data.discount}
                    </span>
                  </>
                )}
              </div>
              <p className="text-ink-soft text-[13px] sm:text-[15px]">
                {plan.subtitle}
              </p>
              <ul className="pl-[18px] text-ink-soft leading-[1.7]">
                {plan.features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
              <button
                className={plan.ctaStyle}
                type="button"
                onClick={() => selectPackageAndScroll(plan.title)}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
