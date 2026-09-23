import { values } from "../../Data/Aboutdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";
import { Eyebrow } from "../Home/SectionHeader";

// Hairline grid: the 1px gap shows the line colour between white cells.
const ValuesSection = () => {
  return (
    <Section tone="surface">
      <Reveal>
        <Eyebrow>02 — What we hold ourselves to</Eyebrow>
      </Reveal>

      <Reveal className="mt-6.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px overflow-hidden rounded-card border border-line bg-line">
        {values.map((value) => (
          <div
            key={value.title}
            className="bg-surface p-[clamp(22px,3vw,32px)]"
          >
            <h3 className="text-[19px] font-bold tracking-[-0.025em]">
              {value.title}
            </h3>
            <p className="mt-2.5 text-[15px] leading-[1.6] text-ink/64">
              {value.text}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
};

export default ValuesSection;
