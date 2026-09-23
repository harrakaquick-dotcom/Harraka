import { companyStory } from "../../Data/Aboutdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";
import { Eyebrow, sectionTitleClass } from "../Home/SectionHeader";

const StorySection = () => {
  return (
    <Section innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(24px,4vw,56px)]">
      <Reveal>
        <Eyebrow>01 — The company</Eyebrow>
        <h2 className={`${sectionTitleClass} max-w-[20ch]`}>
          {companyStory.title}
        </h2>
      </Reveal>

      <Reveal className="flex flex-col gap-4 text-base leading-[1.65] text-ink/70">
        {companyStory.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Reveal>
    </Section>
  );
};

export default StorySection;
