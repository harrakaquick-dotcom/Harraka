import { liveZones, upcomingZones } from "../../Data/Homedata";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const ZonesCard = () => (
  <div className="rounded-card border border-ink/14 px-5.5 py-5">
    <div className="font-mono text-[10px] uppercase tracking-[.13em] text-ink/45">
      Live zones
    </div>
    <div className="mt-3.5 flex flex-col gap-2.75">
      {liveZones.map((zone) => (
        <div key={zone.name} className="flex justify-between text-[14.5px]">
          <span>{zone.name}</span>
          <span className="font-mono text-xs text-primary-dark">
            {zone.time}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-5.5 border-t border-ink/12 pt-4 font-mono text-[10px] uppercase tracking-[.13em] text-ink/45">
      Opening Q4 2026
    </div>
    <div className="mt-3 flex flex-wrap gap-1.75">
      {upcomingZones.map((zone) => (
        <span
          key={zone}
          className="rounded-pill border border-secondary/40 bg-secondary-light px-2.75 py-1.25 font-mono text-[10.5px] text-secondary-dark"
        >
          {zone}
        </span>
      ))}
    </div>
  </div>
);

// The map is a standalone Leaflet page served from /public/coverage-map.html.
const CoverageSection = () => {
  return (
    <Section id="coverage" tone="surface">
      <SectionHeader eyebrow="03 — Coverage" title="Nairobi, zone by zone">
        <p className="max-w-[38ch] text-[15.5px] leading-[1.55] text-ink/60">
          Seven zones live today. Five more open as the Q4 stores come online.
          Karen and Langata are next.
        </p>
      </SectionHeader>

      <Reveal className="mt-7.5 grid items-start gap-5 lg:grid-cols-3">
        <div className="min-w-0 overflow-hidden rounded-card border border-ink/14 bg-surface-2 lg:col-span-2">
          <iframe
            src="/coverage-map.html"
            title="Harraka Nairobi coverage map"
            className="block h-80 w-full border-0 md:h-[min(62vh,480px)]"
          />
        </div>
        <ZonesCard />
      </Reveal>
    </Section>
  );
};

export default CoverageSection;
