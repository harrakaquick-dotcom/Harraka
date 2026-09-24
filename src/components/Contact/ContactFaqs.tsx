import { useState } from "react";
import { faqs } from "../../Data/Contactdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";
import { Eyebrow } from "../Home/SectionHeader";

// Two independent columns (not one grid) so opening an answer in one column
// never stretches the row beside it.
const columns = [
  faqs.slice(0, Math.ceil(faqs.length / 2)),
  faqs.slice(Math.ceil(faqs.length / 2)),
];

const ContactFaqs = () => {
  const [open, setOpen] = useState<string | null>(faqs[0].q);

  return (
    <Section tone="surface">
      <Reveal>
        <Eyebrow>Common questions</Eyebrow>
      </Reveal>

      <Reveal className="mt-6.5 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
        {columns.map((items, col) => (
          <div
            key={col}
            className="overflow-hidden rounded-[22px] border border-line bg-canvas"
          >
            {items.map((faq) => {
              const isOpen = open === faq.q;
              return (
                <div
                  key={faq.q}
                  className="border-b border-ink/10 last:border-b-0"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : faq.q)}
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
        ))}
      </Reveal>
    </Section>
  );
};

export default ContactFaqs;
