import "./home.css";
import { MapPin, Quote, ShoppingBasket } from "lucide-react";
import { testimonials } from "../../Data/Homedata";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

type Testimonial = (typeof testimonials)[number];

// Alternate the avatar tint so neighbouring cards don't look identical.
const avatarTones = [
  "bg-primary-light text-primary-dark",
  "bg-secondary-light text-secondary-dark",
  "bg-surface-2 text-ink",
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

const TestimonialCard = ({
  item,
  tone,
}: {
  item: Testimonial;
  tone: string;
}) => (
  <figure className="flex w-[min(340px,82vw)] shrink-0 flex-col rounded-card border border-ink/12 bg-surface p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_-20px_rgb(23_18_15/0.35)]">
    <div className="flex items-center justify-between gap-3">
      <span className="grid size-10 place-items-center rounded-full bg-ink text-primary">
        <Quote className="size-4.5 fill-current" />
      </span>
      <span className="rounded-pill border border-ink/12 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[.08em] text-ink/55">
        {item.topic}
      </span>
    </div>

    <blockquote className="mt-5 flex-1 text-[17px] font-medium leading-[1.4] tracking-[-0.02em]">
      “{item.quote}”
    </blockquote>

    <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
      <span
        className={`grid size-11 shrink-0 place-items-center rounded-full font-mono text-sm font-semibold ${tone}`}
      >
        {initials(item.name)}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-semibold">{item.name}</span>
        <span className="mt-0.5 flex items-center gap-1 font-mono text-[11px] text-ink/50">
          <MapPin className="size-3" />
          {item.area}
        </span>
      </span>
      <span className="flex shrink-0 items-center gap-1.5 rounded-pill bg-primary-light px-2.5 py-1.5 font-mono text-[11px] font-semibold text-primary-dark">
        <ShoppingBasket className="size-3.5" />
        {item.orders} orders
      </span>
    </figcaption>
  </figure>
);

// Seamless loop: the track holds two identical halves and slides left by
// exactly one half (-50%). The second half is aria-hidden and hidden entirely
// when motion is reduced — the first half then becomes a plain swipeable row.
// Keep at least ~10 testimonials so the repeat isn't noticeable on wide screens.
const Half = ({ hidden = false }: { hidden?: boolean }) => (
  <div
    aria-hidden={hidden || undefined}
    className={`flex gap-4.5 pr-4.5 ${hidden ? "motion-reduce:hidden" : ""}`}
  >
    {testimonials.map((item, i) => (
      <TestimonialCard
        key={`${item.name}-${i}`}
        item={item}
        tone={avatarTones[i % avatarTones.length]}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <Section>
      <SectionHeader eyebrow="05 — Customers" title="What our customers say">
        <p className="max-w-[38ch] text-[15.5px] leading-[1.55] text-ink/60">
          Words from households in the neighbourhoods we deliver to.
        </p>
      </SectionHeader>

      <Reveal className="mt-8 overflow-hidden py-3 mask-[linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] motion-reduce:overflow-x-auto">
        <div className="hk-testimonials flex w-max">
          <Half />
          <Half hidden />
        </div>
      </Reveal>
    </Section>
  );
};

export default Testimonials;
