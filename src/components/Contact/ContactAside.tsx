import { useState } from "react";
import { faqs } from "../../Data/Contactdata";

const OfficeMap = () => (
  <div className="overflow-hidden rounded-[22px] border border-line bg-surface">
    <div className="border-b border-ink/10 px-5.5 py-4.5">
      <div className="text-lg font-bold tracking-[-0.03em]">Head office</div>
      <p className="mt-1.5 text-[14.5px] leading-[1.55] text-ink/62">
        Chiromo Road, Westlands, Nairobi. Visits by appointment — the stores
        are working sites.
      </p>
    </div>
    <iframe
      src="/coverage-map.html"
      title="Harraka Nairobi coverage map"
      loading="lazy"
      className="block h-[min(46vh,340px)] w-full border-0 max-md:h-75"
    />
  </div>
);

const Faqs = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="overflow-hidden rounded-[22px] border border-line bg-surface">
      <div className="border-b border-ink/10 px-5.5 py-4.5 font-mono text-[10px] uppercase tracking-[.13em] text-ink/45">
        Common questions
      </div>
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className="border-b border-ink/10 last:border-b-0">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5.5 py-4 text-left text-[15.5px] font-semibold tracking-[-0.02em]"
            >
              <span>{faq.q}</span>
              <span
                aria-hidden="true"
                className={`flex-none font-mono text-[17px] text-primary transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="max-w-[52ch] px-5.5 pb-4 text-[14.5px] leading-[1.6] text-ink/64">
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

const ContactAside = () => (
  <div className="flex flex-col gap-5">
    <OfficeMap />
    <Faqs />
  </div>
);

export default ContactAside;
