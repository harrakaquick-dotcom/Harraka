import {
  ArrowUpRight,
  Baby,
  Carrot,
  Cookie,
  Croissant,
  CupSoda,
  Milk,
  Package,
  SprayCan,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import LinkButton from "../Button/LinkButton";
import {
  categories,
  type CategoryId,
  type Tone,
} from "../../Data/Homedata";
import Reveal from "./Reveal";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const icons: Record<CategoryId, LucideIcon> = {
  produce: Carrot,
  dairy: Milk,
  bakery: Croissant,
  pantry: Package,
  drinks: CupSoda,
  snacks: Cookie,
  home: SprayCan,
  baby: Baby,
};

const tones: Record<Tone, { tile: string; icon: string }> = {
  primary: {
    tile: "bg-primary-light border-primary/15 hover:border-primary/40",
    icon: "text-primary-dark",
  },
  secondary: {
    tile: "bg-secondary-light border-secondary/20 hover:border-secondary/50",
    icon: "text-secondary-dark",
  },
};

const CategoriesSection = () => {
  return (
    <Section tone="surface">
      <SectionHeader eyebrow="01 — Shop" title="The everyday basket">
        <LinkButton href="/shop" variant="outline" size="sm">
          Browse all 2,400 items
        </LinkButton>
      </SectionHeader>

      <Reveal className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {categories.map((category) => {
          const Icon = icons[category.id];
          const tone = tones[category.tone];
          return (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className={`group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-card border p-4 transition-colors duration-300 sm:min-h-44 sm:p-5 ${tone.tile}`}
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.25}
                className={`pointer-events-none absolute -bottom-5 -right-4 size-28 -rotate-12 opacity-[0.12] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110 sm:size-32 ${tone.icon}`}
              />

              <span
                className={`relative grid size-11 place-items-center rounded-2xl bg-surface shadow-sm transition-transform duration-300 group-hover:scale-105 ${tone.icon}`}
              >
                <Icon className="size-5.5" />
              </span>

              <span className="relative">
                <span className="block text-base font-semibold tracking-[-0.015em] text-ink">
                  {category.name}
                </span>
                <span className="mt-1 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.08em] text-ink/55">
                  {category.count} items
                  <ArrowUpRight className="size-4 text-ink/30 transition-[translate,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </span>
              </span>
            </Link>
          );
        })}
      </Reveal>
    </Section>
  );
};

export default CategoriesSection;
