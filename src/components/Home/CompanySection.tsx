import LinkButton from "../Button/LinkButton";
import { numberOfDev, numberOfRider, numberOfStore } from "../../Data/Appdata";
import CompanyStats from "./CompanyStats";
import Reveal from "./Reveal";
import Section from "./Section";
import { Eyebrow, sectionTitleClass } from "./SectionHeader";

const CompanySection = () => {
  return (
    <Section
      tone="tint"
      innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-[clamp(28px,5vw,64px)]"
    >
      <Reveal>
        <Eyebrow>06 — The company</Eyebrow>
        <h2 className={`${sectionTitleClass} max-w-[20ch]`}>
          Built in Nairobi, run by{" "}
          <span className="text-primary">{numberOfDev} people</span>
        </h2>
        <p className="mt-4.5 max-w-[46ch] text-base leading-[1.55] text-ink/68">
          {numberOfStore} dark stores, {numberOfRider} salaried riders, and farm
          contracts in Kiambu and Nakuru. Our story, our standards, and the
          roles we are hiring for.
        </p>
        <div className="mt-6.5 flex flex-wrap gap-3">
          <LinkButton href="/about" variant="ink">
            About Harraka
          </LinkButton>
          <LinkButton href="/about#riders" variant="outline">
            Ride with us
          </LinkButton>
        </div>
      </Reveal>

      <CompanyStats />
    </Section>
  );
};

export default CompanySection;
