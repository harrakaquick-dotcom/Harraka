import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import LinkButton from "../components/Button/LinkButton";
import Section from "../components/Home/Section";
import { Eyebrow, sectionTitleClass } from "../components/Home/SectionHeader";
import {
  DELIVERY_FEE,
  FREE_DELIVERY_FROM,
  cartLines,
  cartSubtotal,
  deliveryFee,
  formatKsh,
} from "../Data/Shopdata";
import type { CartContext } from "../layout/Applayout";

const stepper =
  "grid size-7 cursor-pointer place-items-center rounded-pill border border-line-strong transition-colors hover:border-ink";

const Cart = () => {
  const { cart, changeQty, clearCart } = useOutletContext<CartContext>();
  const [placed, setPlaced] = useState(false);

  const lines = cartLines(cart);
  const subtotal = cartSubtotal(lines);
  const fee = deliveryFee(subtotal);

  if (placed) {
    return (
      <div className="font-display">
        <Section bordered={false}>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 py-[clamp(20px,5vw,48px)] text-center">
            <div className="text-6xl" aria-hidden="true">
              🛵
            </div>
            <Eyebrow>Order placed</Eyebrow>
            <h1 className={sectionTitleClass}>Rider assigned</h1>
            <p className="max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-ink/68">
              Your order is being packed at the nearest store. The ten-minute
              clock has started.
            </p>
            <LinkButton href="/shop">Keep shopping</LinkButton>
          </div>
        </Section>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="font-display">
        <Section bordered={false}>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 py-[clamp(20px,5vw,48px)] text-center">
            <div className="text-6xl" aria-hidden="true">
              🧺
            </div>
            <Eyebrow>Your basket</Eyebrow>
            <h1 className={sectionTitleClass}>Your basket is empty</h1>
            <p className="max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-ink/68">
              Nothing here yet. Browse the shop and whatever you add will show
              up here.
            </p>
            <div className="mt-1 flex flex-wrap justify-center gap-3">
              <LinkButton href="/shop">Start shopping</LinkButton>
              <LinkButton href="/" variant="outline">
                Back to home
              </LinkButton>
            </div>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="font-display">
      <Section bordered={false}>
        <Eyebrow>Your basket</Eyebrow>
        <h1 className={sectionTitleClass}>
          {lines.reduce((n, l) => n + l.qty, 0)} items ready to go
        </h1>

        <div className="mt-8 grid items-start gap-[clamp(20px,3vw,38px)] lg:grid-cols-[1fr_360px]">
          <ul className="overflow-hidden rounded-card border border-line bg-surface">
            {lines.map(({ product, qty }) => (
              <li
                key={product.id}
                className="flex items-center gap-3.5 border-b border-ink/10 px-4.5 py-3.5 last:border-b-0"
              >
                <span
                  aria-hidden="true"
                  className="grid size-14 flex-none place-items-center rounded-xl bg-canvas text-3xl"
                >
                  {product.emoji}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-semibold tracking-[-0.01em]">
                    {product.name}
                  </div>
                  <div className="font-mono text-[10.5px] text-ink/50">
                    {formatKsh(product.price)} · {product.unit}
                  </div>
                </div>
                <div className="flex flex-none items-center gap-2">
                  <button
                    type="button"
                    className={stepper}
                    aria-label={`Remove one ${product.name}`}
                    onClick={() => changeQty(product.id, -1)}
                  >
                    <Minus className="size-3.5" />
                  </button>
                  <span className="min-w-4 text-center font-mono text-[13px]">
                    {qty}
                  </span>
                  <button
                    type="button"
                    className={stepper}
                    aria-label={`Add one more ${product.name}`}
                    onClick={() => changeQty(product.id, 1)}
                  >
                    <Plus className="size-3.5" />
                  </button>
                </div>
                <span className="hidden w-24 flex-none text-right font-mono text-sm font-semibold sm:block">
                  {formatKsh(product.price * qty)}
                </span>
              </li>
            ))}
          </ul>

          <aside className="rounded-card border border-line bg-surface p-5.5 lg:sticky lg:top-24">
            <div className="flex justify-between text-[13.5px] text-ink/60">
              <span>Subtotal</span>
              <span className="font-mono">{formatKsh(subtotal)}</span>
            </div>
            <div className="mt-2 flex justify-between text-[13.5px] text-ink/60">
              <span>Delivery</span>
              <span className="font-mono">
                {fee === 0 ? "Free" : formatKsh(fee)}
              </span>
            </div>
            {fee > 0 && (
              <p className="mt-2 text-xs text-secondary-dark">
                Add {formatKsh(FREE_DELIVERY_FROM - subtotal)} more and delivery
                is free (otherwise {formatKsh(DELIVERY_FEE)}).
              </p>
            )}
            <div className="mt-3.5 flex justify-between border-t border-ink/10 pt-3.5 text-lg font-bold tracking-[-0.02em]">
              <span>Total</span>
              <span className="font-mono">{formatKsh(subtotal + fee)}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                clearCart();
                setPlaced(true);
              }}
              className="mt-4 w-full cursor-pointer rounded-pill bg-primary px-4 py-3.75 text-[15px] font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Pay with M-Pesa
            </button>
            <p className="mt-2.5 text-center font-mono text-[10px] tracking-wider text-ink/42">
              M-Pesa · Card · Cash at the gate
            </p>
            <div className="mt-4 text-center">
              <LinkButton href="/shop" variant="outline" size="sm">
                Keep shopping
              </LinkButton>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
};

export default Cart;
