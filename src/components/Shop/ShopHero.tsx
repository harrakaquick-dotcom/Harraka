import { ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { shopZones } from "../../Data/Shopdata";
import { useDeliveryClock } from "../Home/useDeliveryClock";
import Section from "../Home/Section";

const monoLabel =
  "font-mono text-[10px] uppercase tracking-[.11em] text-ink/45";

const ShopHero = ({
  zone,
  onZone,
}: {
  zone: string;
  onZone: (name: string) => void;
}) => {
  const { clock } = useDeliveryClock();

  return (
    <Section tone="surface" bordered={false} innerClassName="py-[clamp(26px,4vw,52px)]!">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-widest text-ink/45"
      >
        <Link to="/" className="transition-colors hover:text-primary-dark">
          Home
        </Link>
        <ChevronRight className="size-3 text-ink/30" strokeWidth={2.25} />
        <span className="text-ink/70">Shop</span>
      </nav>

      <div className="mt-3.5 flex flex-wrap items-end justify-between gap-5">
        <div>
          <h1 className="text-[clamp(32px,4.6vw,58px)] font-bold leading-[.98] tracking-tighter">
            The everyday basket
          </h1>
          <p className="mt-3.5 max-w-[52ch] text-base leading-[1.55] text-ink/64">
            2,400 items held in our Nairobi dark stores. Prices are what you
            would pay in-store, minus the walk. Build a basket and the
            ten-minute clock starts at checkout.
          </p>
        </div>
        <div className="flex flex-wrap gap-6.5">
          <div>
            <div className="font-mono text-[clamp(20px,2.2vw,28px)] font-semibold tracking-tight">
              {clock}
            </div>
            <div className={`mt-1 ${monoLabel}`}>average delivery, live</div>
          </div>
          <div>
            <div className="font-mono text-[clamp(20px,2.2vw,28px)] font-semibold tracking-tight">
              {zone}
            </div>
            <div className={`mt-1 ${monoLabel}`}>delivering to</div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className={`mr-1 flex items-center gap-1.5 ${monoLabel}`}>
          <MapPin className="size-3" strokeWidth={2.25} />
          Deliver to
        </span>
        {shopZones.map((z) => {
          const active = z.name === zone;
          return (
            <button
              key={z.name}
              type="button"
              aria-pressed={active}
              onClick={() => onZone(z.name)}
              className={`min-h-9.5 cursor-pointer whitespace-nowrap rounded-pill border px-3.5 py-2 text-[12.5px] font-medium transition-colors hover:border-ink ${
                active
                  ? "border-ink bg-ink text-onink"
                  : "border-line-strong text-ink/66"
              }`}
            >
              {z.name} · {z.eta} min
            </button>
          );
        })}
      </div>
    </Section>
  );
};

export default ShopHero;
