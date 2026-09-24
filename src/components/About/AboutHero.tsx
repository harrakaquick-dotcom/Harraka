import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Since } from "../../Data/Appdata";
import { aboutIntro } from "../../Data/Aboutdata";
import LinkButton from "../Button/LinkButton";
import Section from "../Home/Section";

const Breadcrumb = () => (
  <nav
    aria-label="Breadcrumb"
    className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-widest text-ink/45"
  >
    <Link
      to="/"
      className="flex items-center gap-1 text-ink/45 transition-colors hover:text-primary-dark"
    >
      {/* <House className="size-3" strokeWidth={2.25} /> */}
      Home
    </Link>
    <ChevronRight className="size-3 text-ink/30" strokeWidth={2.25} />
    <span className="text-ink/70">About</span>
  </nav>
);


const AboutHero = () => {
  return (
    <Section tone="surface" bordered={false}>
      <Breadcrumb />

      <div className="mt-5 flex w-fit items-center gap-3 rounded-pill border border-primary bg-primary-light px-3 py-1.5 font-mono text-[11px] tracking-[.09em] text-primary-dark">
        <span className="live-dot" aria-hidden="true" />
        <span className="uppercase">building since {Since}</span>
      </div>

      <h1 className="mt-4.5 max-w-[24ch] text-[clamp(34px,5.4vw,70px)] font-bold leading-[.96] tracking-tighter">
        {aboutIntro.title}
      </h1>
      <p className="mt-5 max-w-[62ch] text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-ink/66">
        {aboutIntro.text}
      </p>

      <div className="mt-7.5 flex flex-wrap gap-3">
        <LinkButton href="#riders">Ride with us</LinkButton>
        <LinkButton href="/#numbers" variant="outline">
          See the numbers
        </LinkButton>
      </div>
    </Section>
  );
};

export default AboutHero;
