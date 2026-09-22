import { Bike, Footprints, Store, type LucideIcon } from "lucide-react";
import LinkButton from "../Button/LinkButton";
import { investorPoints, type InvestorPointId } from "../../Data/Homedata";
import InvestorMetrics from "./InvestorMetrics";
import Reveal from "./Reveal";
import Section from "./Section";
import { Eyebrow, sectionTitleClass } from "./SectionHeader";

const pointIcons: Record<InvestorPointId, LucideIcon> = {
  radius: Store,
  picking: Footprints,
  riders: Bike,
};

const InvestorSection = () => {
  return (
    <Section
      id="numbers"
      tone="ink"
      bordered={false}
      innerClassName="grid items-center gap-[clamp(28px,5vw,64px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
    >
      <Reveal>
        <Eyebrow dark>04 — For investors & partners</Eyebrow>
        <h2 className={`${sectionTitleClass} max-w-[20ch]`}>
          A dark-store model built for African unit economics
        </h2>
        <p className="mt-4.5 max-w-[46ch] text-base leading-[1.55] text-onink/66">
          Small stores close to the customer, quick picking and our own riders
          keep every order cheap to serve.
        </p>

        <ul className="mt-7 flex flex-col gap-4">
          {investorPoints.map((point) => {
            const Icon = pointIcons[point.id];
            return (
              <li key={point.id} className="flex items-start gap-3.5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-onink/14 text-primary">
                  <Icon className="size-4.5" />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold">
                    {point.title}
                  </span>
                  <span className="mt-0.5 block text-sm leading-normal text-onink/60">
                    {point.text}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <LinkButton href="/contact" variant="outline-light">
            Request the deck
          </LinkButton>
          <span className="font-mono text-[10px] uppercase tracking-widest text-onink/40">
            Pilot figures · Nairobi stores
          </span>
        </div>
      </Reveal>

      <Reveal>
        <InvestorMetrics />
      </Reveal>
    </Section>
  );
};

export default InvestorSection;
