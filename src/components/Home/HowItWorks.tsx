import type { ComponentType } from "react";
import { howSteps, type StepVisual } from "../../Data/Homedata";
import Reveal from "./Reveal";
import RiderTrack from "./RiderTrack";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { OrderScene, PickScene } from "./StepScenes";

const scenes: Record<StepVisual, ComponentType> = {
  order: OrderScene,
  pick: PickScene,
  ride: RiderTrack,
};

const HowItWorks = ({ clock }: { clock: string }) => {
  return (
    <Section id="how">
      <SectionHeader
        eyebrow="02 — How it works"
        title="Three dark stores, one ten-minute radius"
        titleClassName="max-w-[22ch]"
      />

      <Reveal className="mt-8.5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-px overflow-hidden rounded-card border border-ink/12 bg-ink/12">
        {howSteps.map((step) => {
          const Scene = scenes[step.visual];
          return (
            <div
              key={step.num}
              className="flex flex-col bg-canvas p-[clamp(22px,3vw,34px)]"
            >
              <div className="font-mono text-[34px] font-semibold tracking-[-0.03em] text-primary">
                {step.num}
              </div>
              <h3 className="mt-4 text-xl font-bold tracking-[-0.025em]">
                {step.title}
              </h3>
              <p className="mt-2.25 text-[15px] leading-[1.55] text-ink/62">
                {step.body.replace("{clock}", clock)}
              </p>
              {/* pinned to the bottom so the three scenes line up */}
              <div className="mt-auto pt-5">
                <Scene />
              </div>
            </div>
          );
        })}
      </Reveal>
    </Section>
  );
};

export default HowItWorks;
