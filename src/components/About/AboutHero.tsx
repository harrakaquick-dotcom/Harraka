import { Link } from "react-router-dom";
import { aboutIntro } from "../../Data/Aboutdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";

const AboutHero = () => {
  return (
    <Section tone="surface" bordered={false}>
      <Reveal>
        <div className="font-mono text-[10.5px] uppercase tracking-widest text-ink/42">
          <Link to="/" className="text-ink/42 hover:text-ink">
            Home
          </Link>{" "}
          / About
        </div>
        <h1 className="mt-4 max-w-[24ch] text-[clamp(34px,5.4vw,70px)] font-bold leading-[.96] tracking-[-0.05em]">
          {aboutIntro.title}
        </h1>
        <p className="mt-5 max-w-[62ch] text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-ink/66">
          {aboutIntro.text}
        </p>
      </Reveal>
    </Section>
  );
};

export default AboutHero;
