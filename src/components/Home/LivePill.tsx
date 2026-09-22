import { location } from "../../Data/Appdata";

const LivePill = () => {
  return (
    <div className="flex w-fit items-center gap-3 rounded-pill border border-primary bg-primary-light px-3 py-1.5 font-mono text-[11px] tracking-[.09em] text-primary-dark">
      <span className="live-dot" aria-hidden="true" />
      <span className="uppercase">now live in {location}</span>
    </div>
  );
};

export default LivePill;
