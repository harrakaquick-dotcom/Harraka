import { milestones } from "../../Data/Aboutdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";
import SectionHeader from "../Home/SectionHeader";

const TimelineSection = () => {
  return (
    <Section>
      <SectionHeader eyebrow="03 — Timeline" title="Two years, seven zones" />

      <Reveal className="mt-7.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-5">
        {milestones.map((milestone, i) => (
          <div
            key={milestone.when}
            className={`border-t-2 pt-4 ${i === 0 ? "border-primary" : "border-line-strong"}`}
          >
            <div
              className={`font-mono text-[11px] tracking-widest ${
                i === 0 ? "text-primary-dark" : "text-ink/50"
              }`}
            >
              {milestone.when}
            </div>
            <p className="mt-2.25 text-[15px] leading-[1.6] text-ink/70">
              {milestone.text}
            </p>
          </div>
        ))}
      </Reveal>

      <p className="mt-5 font-mono text-[10px] tracking-[.06em] text-ink/40">
        Dates and figures are placeholders from the brief — confirm before
        publishing.
      </p>
    </Section>
  );
};

export default TimelineSection;
