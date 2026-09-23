import { ArrowRight } from "lucide-react";
import { companyStory, growthStats } from "../../Data/Aboutdata";
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

        <div className="mt-2 flex flex-wrap gap-2.5">
          {growthStats.map((stat) => (
            <div
              key={stat.to}
              className="flex items-center gap-2 rounded-pill border border-line bg-surface px-3.5 py-2 font-mono text-[12.5px]"
            >
              <span className="text-ink/45">{stat.from}</span>
              <ArrowRight className="size-3 text-primary" strokeWidth={2.5} />
              <span className="font-semibold text-ink">{stat.to}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};

export default StorySection;
