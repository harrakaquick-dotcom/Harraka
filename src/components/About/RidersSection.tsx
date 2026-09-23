import { riderPerks } from "../../Data/Aboutdata";
import LinkButton from "../Button/LinkButton";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";
import { Eyebrow, sectionTitleClass } from "../Home/SectionHeader";

// Anchored as #riders — the Home company section and the footer link here.
const RidersSection = () => {
  return (
    <Section
      id="riders"
      tone="tint"
      innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] items-center gap-[clamp(24px,4vw,48px)]"
    >
      <Reveal>
        <Eyebrow>05 — Ride with us</Eyebrow>
        <h2 className={`${sectionTitleClass} max-w-[20ch]`}>
          Salaried riders, not gig shifts
        </h2>
        <p className="mt-4.5 max-w-[46ch] text-base leading-[1.55] text-ink/68">
          A monthly wage, an electric bike we maintain, NHIF and NSSF from day
          one, and a route that never leaves your neighbourhood. We are hiring
          120 riders across Nairobi this quarter.
        </p>
        <div className="mt-6.5">
          <LinkButton href="/contact" variant="ink">
            Apply to ride
          </LinkButton>
        </div>
      </Reveal>

      <Reveal className="grid gap-px overflow-hidden rounded-card border border-ink/14 bg-ink/14">
        {riderPerks.map((perk) => (
          <div
            key={perk.label}
            className="flex items-baseline justify-between gap-3 bg-primary-light px-5.5 py-5"
          >
            <span className="text-[15px] font-semibold">{perk.label}</span>
            <span className="font-mono text-[17px] font-semibold">
              {perk.value}
            </span>
          </div>
        ))}
      </Reveal>
    </Section>
  );
};

export default RidersSection;
