import LinkButton from "../Button/LinkButton";
import { heroStats } from "../../Data/Homedata";
import LivePill from "./LivePill";
import OrderPhone from "./OrderPhone";
import type { DeliveryClock } from "./useDeliveryClock";

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-mono text-[clamp(22px,2.4vw,30px)] font-semibold tracking-[-0.02em]">
      {value}
    </div>
    <div className="mt-1 font-mono text-[10px] uppercase tracking-[.11em] text-ink/45">
      {label}
    </div>
  </div>
);

const Hero = ({ clock, mins, progress }: DeliveryClock) => {
  return (
    <section id="top" className="border-b border-ink/10">
      <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-[clamp(28px,4vw,56px)] px-[clamp(16px,4vw,44px)] pb-[clamp(36px,5vw,72px)] pt-[clamp(28px,5vw,64px)]">
        <div>
          <LivePill />
          <h1 className="mt-5.5 text-[clamp(36px,5.4vw,68px)] font-bold leading-[.98] tracking-[-0.045em]">
            Your dukas,
            <br />
            ten minutes
            <br />
            from your door<span className="text-primary">.</span>
          </h1>
          <p className="mt-5.5 max-w-[46ch] text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-ink/68">
            Harraka stocks the everyday basket — fresh produce, milk, bread,
            home care — in dark stores across Nairobi. Order in seconds, pay on
            delivery or M-Pesa, and pay less than the shop on your street.
          </p>
          <div className="mt-7.5 flex flex-wrap gap-3">
            <LinkButton href="/shop">Start an order</LinkButton>
            <LinkButton href="#coverage" variant="outline">
              See coverage
            </LinkButton>
          </div>
          <div className="mt-9 flex flex-wrap gap-[clamp(18px,3vw,40px)] border-t border-ink/12 pt-6.5">
            <Stat value={clock} label="average delivery, live" />
            {heroStats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <OrderPhone mins={mins} progress={progress} />
      </div>
    </section>
  );
};

export default Hero;
