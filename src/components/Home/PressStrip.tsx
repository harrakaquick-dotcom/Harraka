import { pressNames } from "../../Data/Homedata";
import Reveal from "./Reveal";

const PressStrip = () => {
  return (
    <Reveal className="mx-auto flex max-w-7xl flex-wrap items-center gap-[clamp(18px,3vw,40px)] px-[clamp(16px,4vw,44px)] py-[clamp(22px,3vw,34px)]">
      <span className="font-mono text-[10px] uppercase tracking-[.13em] text-ink/38">
        As covered in
      </span>
      <div className="flex flex-1 flex-wrap items-center gap-[clamp(16px,3vw,38px)]">
        {pressNames.map((name) => (
          <span
            key={name}
            className="text-[17px] font-bold tracking-[-0.02em] text-ink/34"
          >
            {name}
          </span>
        ))}
      </div>
    </Reveal>
  );
};

export default PressStrip;
