import {
  Repeat,
  ShoppingBasket,
  Timer,
  TrendingUp,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { investorStats, type InvestorMetricId } from "../../Data/Homedata";
import CountUp from "./CountUp";
import { useInView } from "./useInView";

type Metric = (typeof investorStats)[number];

const icons: Record<InvestorMetricId, LucideIcon> = {
  orders: Repeat,
  basket: ShoppingBasket,
  retention: UserCheck,
  breakeven: Timer,
};

// Each metric gets a small visual that says the same thing as its number.

// 3.4× → three full dots and a 40% one: orders per customer.
const OrderDots = ({ value, active }: { value: number; active: boolean }) => (
  <div className="flex gap-1.5">
    {[0, 1, 2, 3].map((i) => {
      const fill = Math.min(1, Math.max(0, value - i)) * 100;
      return (
        <span
          key={i}
          className="size-4 rounded-full border border-onink/25 transition-[opacity,transform] duration-500"
          style={{
            background: `linear-gradient(90deg, var(--color-primary) ${fill}%, transparent ${fill}%)`,
            opacity: active ? 1 : 0,
            transform: active ? "scale(1)" : "scale(0.5)",
            transitionDelay: `${i * 150}ms`,
          }}
        />
      );
    })}
  </div>
);

// 245 up 18% → a green trend chip.
const TrendChip = ({ change }: { change: string }) => (
  <span className="inline-flex items-center gap-1 rounded-pill bg-secondary/20 px-2.5 py-1 font-mono text-[11px] font-semibold text-secondary">
    <TrendingUp className="size-3.5" />
    {change}
  </span>
);

// 62% → a bar filled to 62%.
const RetentionBar = ({ value, active }: { value: number; active: boolean }) => (
  <div className="h-2 w-full overflow-hidden rounded-full bg-onink/12">
    <div
      className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
      style={{ width: active ? `${value}%` : "0%" }}
    />
  </div>
);

// 11 wks → 11 of 12 weekly ticks fill in, one after another.
const WeekTicks = ({ value, active }: { value: number; active: boolean }) => (
  <div className="flex w-full gap-1">
    {Array.from({ length: 12 }, (_, i) => (
      <span
        key={i}
        className="h-4 flex-1 rounded-[3px] transition-colors duration-300"
        style={{
          background:
            active && i < value ? "var(--color-primary)" : "rgb(251 247 244 / 0.12)",
          transitionDelay: `${i * 90}ms`,
        }}
      />
    ))}
  </div>
);

const Visual = ({ stat, active }: { stat: Metric; active: boolean }) => {
  switch (stat.id) {
    case "orders":
      return <OrderDots value={stat.value} active={active} />;
    case "basket":
      return stat.change ? <TrendChip change={stat.change} /> : null;
    case "retention":
      return <RetentionBar value={stat.value} active={active} />;
    case "breakeven":
      return <WeekTicks value={stat.value} active={active} />;
  }
};

const MetricCard = ({ stat }: { stat: Metric }) => {
  const [ref, active] = useInView<HTMLDivElement>();
  const Icon = icons[stat.id];

  return (
    <div
      ref={ref}
      className="flex flex-col rounded-card border border-onink/12 bg-onink/4 p-5 transition-colors duration-300 hover:bg-onink/7 sm:p-6"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary">
        <Icon className="size-4.5" />
      </span>
      <div className="mt-5 font-mono text-[clamp(30px,3.4vw,42px)] font-semibold leading-none tracking-[-0.03em]">
        <CountUp
          to={stat.value}
          decimals={stat.decimals}
          prefix={stat.prefix}
          suffix={stat.suffix}
        />
      </div>
      <div className="mt-2 text-sm leading-normal text-onink/60">
        {stat.label}
      </div>
      <div className="mt-auto flex min-h-6 items-center pt-4">
        <Visual stat={stat} active={active} />
      </div>
    </div>
  );
};

const InvestorMetrics = () => (
  <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-4">
    {investorStats.map((stat) => (
      <MetricCard key={stat.id} stat={stat} />
    ))}
  </div>
);

export default InvestorMetrics;
