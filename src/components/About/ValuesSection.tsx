import { Bike, Sprout, Tag, Timer, type LucideIcon } from "lucide-react";
import { values, type ValueId } from "../../Data/Aboutdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";
import { Eyebrow } from "../Home/SectionHeader";

const icons: Record<ValueId, LucideIcon> = {
  pricing: Tag,
  delivery: Timer,
  riders: Bike,
  supply: Sprout,
};

const ValuesSection = () => {
  return (
    <Section tone="surface">
      <Reveal>
        <Eyebrow>02 — What we hold ourselves to</Eyebrow>
      </Reveal>

      <Reveal className="mt-6.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px overflow-hidden rounded-card border border-line bg-line">
        {values.map((value) => {
          const Icon = icons[value.id];
          return (
            <div key={value.id} className="bg-surface p-[clamp(22px,3vw,32px)]">
              <span className="grid size-10 place-items-center rounded-xl border border-ink/14 text-primary">
                <Icon className="size-4.5" />
              </span>
              <h3 className="mt-4 text-[19px] font-bold tracking-tight">
                {value.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.6] text-ink/64">
                {value.text}
              </p>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
};

export default ValuesSection;
