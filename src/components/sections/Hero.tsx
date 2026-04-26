interface HeroData {
  badge: string;
  heading: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  highlights: string[];
  card: {
    formatTitle: string;
    formats: { label: string; value: string }[];
    audienceTitle: string;
    audiences: { label: string; value: string }[];
    cardCta: string;
  };
}

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section
      id="hero"
      className="pt-9 pb-12 sm:pt-12 sm:pb-[60px] md:pt-[72px] md:pb-[90px]"
    >
      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 py-[5px] px-2.5 sm:py-1.5 sm:px-3 rounded-full bg-[#fff1e4] text-accent-dark font-semibold text-[11px] sm:text-[13px] tracking-wide uppercase">
            {data.badge}
          </span>
          <h1 className="font-display text-[22px] leading-[1.2] mt-3 mb-3.5 sm:text-[28px] md:text-[42px] md:leading-[1.12] md:mt-4 md:mb-[18px]">
            {data.heading}
          </h1>
          <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[520px]">
            {data.description}
          </p>
          <div className="flex flex-col gap-3 mt-5 mb-3.5 md:flex-row md:items-center md:gap-4 md:mt-[26px] md:mb-[18px]">
            <a className="cta text-center md:w-auto" href="#contact">
              {data.ctaPrimary}
            </a>
            <a className="ghost text-center md:w-auto" href="#servicii">
              {data.ctaSecondary}
            </a>
          </div>
          <ul className="hero-highlights list-none p-0 m-0 grid gap-2 sm:gap-2.5">
            {data.highlights.map((item) => (
              <li
                key={item}
                className="pl-[18px] sm:pl-[22px] relative text-ink-soft text-sm sm:text-[15px] before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-2.5 before:h-2.5 before:rounded-full before:bg-accent before:shadow-[0_0_0_4px_rgba(217,122,53,0.18)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#fffaf4] border border-line rounded-[14px] sm:rounded-[20px] p-4 sm:p-5 md:p-[26px] shadow-card">
          <p className="font-display text-base sm:text-lg mb-3.5">
            {data.card.formatTitle}
          </p>
          {data.card.formats.map((fmt) => (
            <div
              key={fmt.label}
              className="hero-card-row flex justify-between items-center py-2 mb-4 sm:py-2.5 border-b border-dashed border-line text-sm sm:text-[15px] text-ink-soft"
            >
              <span>{fmt.label}</span>
              <span>{fmt.value}</span>
            </div>
          ))}
          {/* <div className="h-px bg-line my-[18px]" /> */}
          <p className="font-display text-base sm:text-lg mb-3.5">
            {data.card.audienceTitle}
          </p>
          {data.card.audiences.map((aud) => (
            <div
              key={aud.label}
              className="hero-card-row flex justify-between items-center py-2 sm:py-2.5 border-b border-dashed border-line text-sm sm:text-[15px] text-ink-soft"
            >
              <span>{aud.label}</span>
              <span>{aud.value}</span>
            </div>
          ))}
          <a
            className="inline-flex mt-4 font-semibold text-accent-dark no-underline"
            href="#contact"
          >
            {data.card.cardCta}
          </a>
        </div>
      </div>
    </section>
  );
}
