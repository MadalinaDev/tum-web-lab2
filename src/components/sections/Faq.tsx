interface FaqItem {
  question: string;
  answer: string;
}

interface FaqData {
  heading: string;
  description: string;
  items: FaqItem[];
}

export default function Faq({ data }: { data: FaqData }) {
  return (
    <section
      id="faq"
      className="bg-[#fff9f2] border-t border-line py-9 sm:py-12 md:py-[78px]"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-7 lg:gap-10 items-start">
        <div>
          <span className="inline-block font-semibold tracking-wide uppercase text-[11px] sm:text-[13px] text-accent-dark mb-2 sm:mb-2.5">
            FAQ
          </span>
          <h2 className="font-display text-xl sm:text-[26px] md:text-[34px] mb-3 sm:mb-3.5">
            {data.heading}
          </h2>
          <p className="text-ink-soft text-[15px] sm:text-base md:text-lg leading-relaxed max-w-[620px]">
            {data.description}
          </p>
        </div>
        <div className="grid gap-3 md:gap-4">
          {data.items.map((item) => (
            <article
              key={item.question}
              className="bg-white border border-line rounded-xl sm:rounded-2xl p-3.5 sm:px-[18px] sm:py-4 md:px-[22px] md:py-5 shadow-card"
            >
              <h3 className="mb-2 text-base md:text-lg">{item.question}</h3>
              <p className="text-ink-soft leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
