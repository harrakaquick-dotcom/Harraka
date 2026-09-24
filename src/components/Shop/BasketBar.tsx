import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FREE_DELIVERY_FROM,
  cartLines,
  cartSubtotal,
  deliveryFee,
  formatKsh,
} from "../../Data/Shopdata";
import "./shop.css";

const BasketBar = ({
  cart,
  zone,
  eta,
}: {
  cart: Record<string, number>;
  zone: string;
  eta: number;
}) => {
  const lines = cartLines(cart);
  if (lines.length === 0) return null;

  const count = lines.reduce((sum, l) => sum + l.qty, 0);
  const subtotal = cartSubtotal(lines);
  const fee = deliveryFee(subtotal);
  const remaining = FREE_DELIVERY_FROM - subtotal;
  const progress = Math.min(100, (subtotal / FREE_DELIVERY_FROM) * 100);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4">
      <Link
        to="/cart"
        className="shop-bar-in pointer-events-auto flex w-full max-w-xl items-center gap-3.5 rounded-2xl bg-ink px-4 py-3 text-onink shadow-[0_18px_40px_-16px_rgb(23_18_15/0.7)] transition-transform hover:-translate-y-0.5"
      >
        <span className="relative grid size-11 flex-none place-items-center rounded-xl bg-primary">
          <ShoppingBag className="size-5" strokeWidth={2} />
          <span className="absolute -right-1.5 -top-1.5 grid min-w-5 place-items-center rounded-pill bg-onink px-1 font-mono text-[10.5px] font-bold text-ink">
            {count}
          </span>
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex items-baseline justify-between gap-3">
            <span className="text-[15px] font-semibold">View basket</span>
            <span className="font-mono text-sm font-semibold">
              {formatKsh(subtotal + fee)}
            </span>
          </span>
          <span className="mt-1.5 block h-1 overflow-hidden rounded-pill bg-onink/15">
            <span
              className="block h-full rounded-pill bg-secondary transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </span>
          <span className="mt-1.5 block truncate font-mono text-[10.5px] text-onink-66">
            {remaining > 0
              ? `Add ${formatKsh(remaining)} more for free delivery`
              : "Free delivery unlocked"}{" "}
            · {zone} in {eta} min
          </span>
        </span>

        <ArrowRight className="size-4.5 flex-none text-onink-66" />
      </Link>
    </div>
  );
};

export default BasketBar;
