interface ContactData {
  heading: string;
  description: string;
  phone: string;
  email: string;
  location: string;
}

export default function Contact({ data }: { data: ContactData }) {
  return (
    <section
      id="contact"
      className="bg-[#fff4e8] border-y border-line py-9 sm:py-12 md:py-[78px]"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-7 lg:gap-9 items-start">
        <div>
          <span className="inline-block font-semibold tracking-wide uppercase text-[11px] sm:text-[13px] text-accent-dark mb-2 sm:mb-2.5">
            Contact
          </span>
          <h2 className="font-display text-xl sm:text-[26px] md:text-[34px] mb-3 sm:mb-3.5">
            {data.heading}
          </h2>
          <p className="text-ink-soft text-[15px] sm:text-base md:text-lg leading-relaxed max-w-[620px]">
            {data.description}
          </p>
          <div className="grid gap-4 mt-6">
            <div>
              <p className="mb-1.5 text-xs sm:text-[13px] uppercase tracking-wide text-accent-dark font-semibold">
                Telefon / WhatsApp
              </p>
              <p className="text-base sm:text-lg text-ink-soft">{data.phone}</p>
            </div>
            <div>
              <p className="mb-1.5 text-xs sm:text-[13px] uppercase tracking-wide text-accent-dark font-semibold">
                Email
              </p>
              <p className="text-base sm:text-lg text-ink-soft">{data.email}</p>
            </div>
            <div>
              <p className="mb-1.5 text-xs sm:text-[13px] uppercase tracking-wide text-accent-dark font-semibold">
                Locatie
              </p>
              <p className="text-base sm:text-lg text-ink-soft">
                {data.location}
              </p>
            </div>
          </div>
        </div>

        <form className="bg-white border border-line rounded-[18px] p-6 shadow-card grid gap-3 md:gap-4">
          <label className="grid gap-2 text-[13px] sm:text-sm text-ink-soft">
            Nume si prenume
            <input
              className="border border-line rounded-xl py-[10px] px-3 sm:py-3 sm:px-3.5 font-[inherit] text-sm sm:text-[15px] bg-[#fffaf4]"
              type="text"
              name="name"
              placeholder="Numele tau"
            />
          </label>
          <label className="grid gap-2 text-[13px] sm:text-sm text-ink-soft">
            Telefon
            <input
              className="border border-line rounded-xl py-[10px] px-3 sm:py-3 sm:px-3.5 font-[inherit] text-sm sm:text-[15px] bg-[#fffaf4]"
              type="tel"
              name="phone"
              placeholder="Numar de telefon"
            />
          </label>
          <label className="grid gap-2 text-[13px] sm:text-sm text-ink-soft">
            Mesaj
            <textarea
              className="border border-line rounded-xl py-[10px] px-3 sm:py-3 sm:px-3.5 font-[inherit] text-sm sm:text-[15px] bg-[#fffaf4] resize-y"
              name="message"
              rows={5}
              placeholder="Spune-mi ce obiectiv ai"
            />
          </label>
          <button className="cta border-0 cursor-pointer" type="submit">
            Trimite mesaj
          </button>
        </form>
      </div>
    </section>
  );
}
