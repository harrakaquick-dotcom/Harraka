import { MapPinOff, Store } from "lucide-react";
import { Link } from "react-router-dom";
import LinkButton from "../components/Button/LinkButton";
import Reveal from "../components/Home/Reveal";
import Section from "../components/Home/Section";
import { Eyebrow, sectionTitleClass } from "../components/Home/SectionHeader";
import { navItems } from "../Data/navigation";

// A route that runs off the map: a duka marks the start, a dashed line climbs
// toward the missing page, and breaks into static where the trail goes cold.
// The pulsing dot (same "live" marker used on Home) is the rider, stuck.
const LostRoute = () => (
  <div className="relative mx-auto h-36 w-full max-w-90" aria-hidden="true">
    <svg
      viewBox="0 0 320 140"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full"
    >
      <path
        d="M32 104 Q130 20 216 50"
        fill="none"
        stroke="rgb(23 18 15 / 0.22)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 8"
      />
      <path
        d="M214 50 L224 40 L232 54 L242 42"
        fill="none"
        className="stroke-primary"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <span className="absolute left-[10%] top-[74%] grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink">
      <Store className="size-4.5 text-onink" strokeWidth={2} />
    </span>

    <span className="live-dot absolute left-[39%] top-[33%] -translate-x-1/2 -translate-y-1/2" />

    <span className="absolute left-[76%] top-[24%] -translate-x-1/2 -translate-y-1/2 text-primary">
      <MapPinOff className="size-7" strokeWidth={2} />
    </span>
  </div>
);

const NotFound = () => {
  const tryLinks = navItems.filter((item) => item.to !== "/");

  return (
    <div className="font-display">
      <Section tone="canvas" bordered={false} innerClassName="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 select-none text-center font-heading text-[clamp(140px,26vw,340px)] leading-none text-ink/5"
        >
          404
        </span>

        <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 py-[clamp(20px,5vw,48px)] text-center">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className={sectionTitleClass}>
            This one never made it to your door.
          </h1>
          <p className="max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-ink/68">
            We checked every duka on the route and couldn't find the page you're
            after — it may have moved, changed its name, or never stocked here
            in the first place.
          </p>

          <LostRoute />

          <div className="mt-1 flex flex-wrap justify-center gap-3">
            <LinkButton href="/">Back to home</LinkButton>
            <LinkButton href="/shop" variant="outline">
              Browse the shop
            </LinkButton>
          </div>

          <div className="mt-5 flex w-full flex-col items-center gap-3.5 border-t border-ink/10 pt-6.5">
            <Eyebrow>Try one of these instead</Eyebrow>
            <div className="flex flex-wrap justify-center gap-2.5">
              {tryLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-pill border border-ink/16 px-4 py-1.75 text-[13.5px] text-ink/70 transition-colors hover:border-ink/40 hover:text-ink"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default NotFound;
