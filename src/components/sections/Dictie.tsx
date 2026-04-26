interface DictieStep {
  number: string;
  title: string;
  description: string;
}

interface DictieData {
  heading: string;
  description: string;
  steps: DictieStep[];
}

export default function Dictie({ data }: { data: DictieData }) {
  return (
    <section id="dictie" className="py-9 sm:py-12 md:py-[78px]">
      <div className="container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-7 lg:gap-9">
        <div>
          <span className="inline-block font-semibold tracking-wide uppercase text-[11px] sm:text-[13px] text-accent-dark mb-2 sm:mb-2.5">
            Dictie
          </span>
          <h2 className="font-display text-xl sm:text-[26px] md:text-[34px] mb-3 sm:mb-3.5">
            {data.heading}
          </h2>
          <p className="text-ink-soft text-[15px] sm:text-base md:text-lg leading-relaxed max-w-[620px]">
            {data.description}
          </p>
        </div>
        <div className="grid gap-4">
          {data.steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-3 md:gap-4 items-start p-3.5 md:p-[18px] rounded-2xl bg-[#fffaf4] border border-line shadow-card"
            >
              <span className="font-display text-xl md:text-2xl text-accent-dark">
                {step.number}
              </span>
              <div>
                <h3 className="mb-1.5 text-lg">{step.title}</h3>
                <p className="text-ink-soft leading-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
