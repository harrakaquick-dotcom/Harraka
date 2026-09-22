import "./home.css";
import { marqueeItems } from "../../Data/Homedata";

const Track = ({ hidden = false }: { hidden?: boolean }) => (
  <div
    aria-hidden={hidden || undefined}
    className="flex gap-11 whitespace-nowrap px-5.5 py-3.25 font-mono text-[11.5px] uppercase tracking-[.12em] text-ink/50"
  >
    {marqueeItems.map((item) => (
      <span key={item} className="flex gap-11">
        <span>{item}</span>
        <span>·</span>
      </span>
    ))}
  </div>
);

// Endless category ticker. The track is rendered twice and shifted by -50%
// so the loop is seamless.
const Marquee = () => {
  return (
    <div className="overflow-hidden border-b border-ink/10 bg-surface">
      <div className="hk-marquee flex w-max">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
};

export default Marquee;
