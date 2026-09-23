import { milestones } from "../../Data/Aboutdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";
import SectionHeader from "../Home/SectionHeader";

const TimelineSection = () => {
  const lastIndex = milestones.length - 1;

  return (
    <Section>
      <SectionHeader eyebrow="03 — Timeline" title="Two years, seven zones" />

      <Reveal className="mt-8.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-5 gap-y-8">
        {milestones.map((milestone, i) => {
          const isNow = i === lastIndex;
          return (
            <div
              key={milestone.when}
              className={`relative border-t-2 pt-5 ${
                isNow ? "border-primary" : "border-line-strong"
              }`}
            >
              {isNow ? (
                <span
                  className="live-dot absolute -top-1.25 left-0"
                  aria-hidden="true"
                />
              ) : (
                <span
                  className="absolute top-[-5.5px] left-0 size-2.5 rounded-full bg-ink-62"
                  aria-hidden="true"
                />
              )}
              <div
                className={`font-mono text-[11px] tracking-widest ${
                  isNow ? "text-primary-dark" : "text-ink/50"
                }`}
              >
                {milestone.when}
              </div>
              <p className="mt-2.25 text-[15px] leading-[1.6] text-ink/70">
                {milestone.text}
              </p>
            </div>
          );
        })}
      </Reveal>

      {/* <p className="mt-5 font-mono text-[10px] tracking-[.06em] text-ink/40">
        Dates and figures are placeholders from the brief — confirm before
        publishing.
      </p> */}
    </Section>
  );
};

export default TimelineSection;
