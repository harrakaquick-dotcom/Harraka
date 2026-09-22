import "./home.css";
import { Apple, Check, Milk, ShoppingBasket, Timer, Wheat } from "lucide-react";

// Small looping scenes shown at the bottom of each "How it works" step.
// All three share the same height (h-9) so the cards line up.

const orderItems = [Milk, Wheat, Apple];

// Step 1 — items fly from the shelf into the basket, one after another.
export const OrderScene = () => (
  <div className="relative h-9" aria-hidden="true">
    <div className="absolute inset-x-0 bottom-1.5 border-t border-dashed border-ink/25" />
    {orderItems.map((Icon, i) => (
      <span
        key={i}
        className="hk-toss absolute bottom-0.5 left-0 grid size-7 place-items-center rounded-full border border-ink/15 bg-surface text-ink/70"
        style={{ animationDelay: `${i}s` }}
      >
        <Icon className="size-3.5" />
      </span>
    ))}
    <span className="absolute bottom-0 right-0 grid size-8 place-items-center rounded-xl bg-primary-light text-primary-dark">
      <ShoppingBasket className="size-4.5" />
    </span>
  </div>
);

// Step 2 — a pick list gets ticked off box by box, against the 90 s target.
export const PickScene = () => (
  <div
    className="flex h-9 items-center justify-between gap-3"
    aria-hidden="true"
  >
    <div className="flex items-center gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="hk-pick grid size-6 place-items-center rounded-md border border-ink/25"
          style={{ animationDelay: `${i * 0.9}s` }}
        >
          <Check className="size-3.5" strokeWidth={3} />
        </span>
      ))}
    </div>
    <span className="flex items-center gap-1 font-mono text-[11px] text-ink/55">
      <Timer className="size-4 text-primary" />
      90s
    </span>
  </div>
);
