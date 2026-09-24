import { Minus, Plus } from "lucide-react";
import {
  discountPercent,
  formatKsh,
  type Product,
  type ShopCategory,
} from "../../Data/Shopdata";

const tagStyles: Record<NonNullable<Product["tag"]>, string> = {
  "Best seller": "bg-primary-light text-primary-dark",
  Deal: "bg-primary-light text-primary-dark",
  "In season": "bg-secondary-light text-secondary-dark",
  "Baked today": "bg-secondary-light text-secondary-dark",
  "Fresh in": "bg-secondary-light text-secondary-dark",
};

const stepperButton =
  "grid size-8 cursor-pointer place-items-center rounded-pill text-onink transition-colors hover:bg-onink/15";

const ProductCard = ({
  product,
  category,
  qty,
  onChange,
  index,
}: {
  product: Product;
  category: ShopCategory;
  qty: number;
  onChange: (delta: number) => void;
  index: number;
}) => {
  const off = discountPercent(product);

  return (
    <article
      className="shop-rise group flex flex-col overflow-hidden rounded-tile border border-line bg-surface transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-0.75 hover:shadow-[0_16px_32px_-24px_rgb(23_18_15/0.5)]"
      // Stagger the first row or two; later cards just appear.
      style={{ animationDelay: `${Math.min(index, 8) * 35}ms` }}
    >
      <div
        className="relative grid aspect-4/3 place-items-center"
        style={{ backgroundColor: category.tint }}
      >
        {product.tag && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-pill px-2 py-0.75 font-mono text-[9px] uppercase tracking-[.07em] ${tagStyles[product.tag]}`}
          >
            {product.tag}
          </span>
        )}
        {off > 0 && (
          <span className="absolute right-2.5 top-2.5 rounded-pill bg-primary px-2 py-0.75 font-mono text-[9.5px] font-semibold text-white">
            −{off}%
          </span>
        )}
        <span
          role="img"
          aria-label={product.name}
          className="select-none text-[clamp(52px,6vw,68px)] leading-none drop-shadow-[0_8px_10px_rgb(23_18_15/0.18)] transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-110 group-hover:-rotate-3"
        >
          {product.emoji}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-0.75 px-3.5 pb-3.5 pt-3.25">
        <h3 className="text-[14.5px] font-semibold tracking-[-0.015em]">
          {product.name}
        </h3>
        <span className="font-mono text-[10.5px] text-ink/45">
          {product.unit}
        </span>

        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <span className="min-w-0">
            <span className="block whitespace-nowrap font-mono text-sm font-semibold">
              {formatKsh(product.price)}
            </span>
            <span className="block whitespace-nowrap font-mono text-[10px] text-ink/40 line-through">
              {formatKsh(product.was)}
            </span>
          </span>

          {qty === 0 ? (
            <button
              type="button"
              onClick={() => onChange(1)}
              aria-label={`Add ${product.name} to basket`}
              className="flex min-h-10 cursor-pointer items-center gap-1.5 rounded-pill bg-ink px-4 font-mono text-xs font-semibold tracking-wide text-canvas transition-colors hover:bg-primary"
            >
              <Plus className="size-3.5" strokeWidth={2.5} />
              Add
            </button>
          ) : (
            <div className="flex items-center rounded-pill bg-primary-dark p-1">
              <button
                type="button"
                onClick={() => onChange(-1)}
                aria-label={`Remove one ${product.name}`}
                className={stepperButton}
              >
                <Minus className="size-3.5" strokeWidth={2.5} />
              </button>
              <span
                aria-live="polite"
                className="min-w-5 text-center font-mono text-[13px] font-semibold text-onink"
              >
                {qty}
              </span>
              <button
                type="button"
                onClick={() => onChange(1)}
                aria-label={`Add one more ${product.name}`}
                className={stepperButton}
              >
                <Plus className="size-3.5" strokeWidth={2.5} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
