import { team } from "../../Data/Aboutdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";
import { Eyebrow } from "../Home/SectionHeader";

// Striped placeholder until real portraits are shot.
const PortraitPlaceholder = () => (
  <div className="flex h-37.5 items-end bg-[repeating-linear-gradient(135deg,rgb(23_18_15/0.07)_0_1px,transparent_1px_7px)] p-2.5">
    <span className="rounded-[3px] bg-canvas px-1.25 py-0.75 font-mono text-[9px] uppercase tracking-[.07em] text-ink/40">
      portrait
    </span>
  </div>
);

const LeadershipSection = () => {
  return (
    <Section tone="surface">
      <Reveal>
        <Eyebrow>04 — Leadership</Eyebrow>
      </Reveal>

      <Reveal className="mt-6.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4.5">
        {team.map((member) => (
          <div
            key={member.name}
            className="overflow-hidden rounded-[18px] border border-line bg-canvas transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-20px_rgb(23_18_15/0.35)]"
          >
            <PortraitPlaceholder />
            <div className="px-4.5 pb-4.5 pt-4">
              <div className="text-base font-bold tracking-[-0.02em]">
                {member.name}
              </div>
              <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[.06em] text-primary-dark">
                {member.role}
              </div>
              <p className="mt-2.75 text-sm leading-[1.55] text-ink/62">
                {member.note}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
};

export default LeadershipSection;
