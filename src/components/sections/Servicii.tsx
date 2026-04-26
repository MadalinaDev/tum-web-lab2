interface ServiceItem {
  title: string;
  description: string;
}

interface ServiciiData {
  heading: string;
  items: ServiceItem[];
}

export default function Servicii({ data }: { data: ServiciiData }) {
  return (
    <section id="servicii" className="py-9 sm:py-12 md:py-[78px]">
      <div className="container">
        <span className="inline-block font-semibold tracking-wide uppercase text-[11px] sm:text-[13px] text-accent-dark mb-2 sm:mb-2.5">
          Servicii
        </span>
        <h2 className="font-display text-xl sm:text-[26px] md:text-[34px] mb-6">
          {data.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[22px]">
          {data.items.map((svc) => (
            <article
              key={svc.title}
              className="bg-[#fffaf4] border border-line rounded-xl sm:rounded-[18px] p-3.5 sm:p-[18px] md:p-[22px] shadow-card"
            >
              <h3 className="mb-2 sm:mb-2.5 text-base sm:text-xl">
                {svc.title}
              </h3>
              <p className="text-ink-soft leading-relaxed">{svc.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
