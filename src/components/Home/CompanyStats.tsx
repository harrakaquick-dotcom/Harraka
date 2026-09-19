import { Bike, Store, Users, type LucideIcon } from "lucide-react";
import { companyStats, type CompanyStatId } from "../../Data/Homedata";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const icons: Record<Exclude<CompanyStatId, "since">, LucideIcon> = {
  riders: Bike,
  stores: Store,
  team: Users,
};

// Concentric rings — the same "delivery radius" idea as the coverage map.
const Rings = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-16 -top-16 grid size-64 place-items-center"
  >
    <span className="absolute size-64 rounded-full border border-primary/25" />
    <span className="absolute size-44 rounded-full border border-primary/40" />
    <span className="absolute size-24 rounded-full bg-primary/25 blur-xl" />
    <span className="size-2.5 rounded-full bg-primary shadow-[0_0_18px_4px_rgb(232_68_42/0.6)]" />
  </div>
);

// Bento grid: a dark "since" card across the top, three icon cards below.
const CompanyStats = () => {
  const since = companyStats.find((stat) => stat.id === "since");
  const others = companyStats.filter((stat) => stat.id !== "since");

  return (
    <Reveal className="grid grid-cols-3 gap-3">
      {since && (
        <div className="relative col-span-3 overflow-hidden rounded-card bg-ink px-6 py-6 text-onink">
          <Rings />
          <div className="relative font-mono text-[10px] uppercase tracking-[.14em] text-onink/50">
            Since
          </div>
          <div className="relative mt-1 font-mono text-[clamp(44px,6vw,64px)] font-semibold leading-none tracking-[-0.04em]">
            {since.value}
          </div>
          <div className="relative mt-2 text-sm text-onink/65">
            {since.label}
          </div>
        </div>
      )}

      {others.map((stat) => {
        const Icon = icons[stat.id as keyof typeof icons];
        return (
          <div
            key={stat.id}
            className="rounded-card border border-ink/10 bg-surface p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-20px_rgb(23_18_15/0.35)] sm:p-5"
          >
            <span className="grid size-9 place-items-center rounded-xl bg-primary-light text-primary-dark">
              <Icon className="size-4.5" />
            </span>
            <div className="mt-4 font-mono text-[clamp(28px,3.4vw,38px)] font-semibold leading-none tracking-[-0.03em]">
              <CountUp to={stat.value} />
            </div>
            <div className="mt-2 text-xs leading-normal text-ink/62 sm:text-[13px]">
              {stat.label}
            </div>
          </div>
        );
      })}
    </Reveal>
  );
};

export default CompanyStats;
