import { Search, X } from "lucide-react";
import { useState } from "react";
import {
  DELIVERY_FEE,
  FREE_DELIVERY_FROM,
  allProducts,
  formatKsh,
  shopCategories,
  sortOptions,
  type SortId,
} from "../../Data/Shopdata";
import LinkButton from "../Button/LinkButton";
import Section from "../Home/Section";
import ProductCard from "./ProductCard";
import "./shop.css";

const monoLabel =
  "font-mono text-[10px] uppercase tracking-[.13em] text-ink/45";

const categoryOf = new Map(
  shopCategories.flatMap((c) => c.products.map((p) => [p.id, c] as const)),
);

const ALL = "all";

const ShopCatalog = ({
  cart,
  onChange,
}: {
  cart: Record<string, number>;
  onChange: (id: string, delta: number) => void;
}) => {
  const [activeId, setActiveId] = useState(ALL);
  const [sort, setSort] = useState<SortId>("popular");
  const [query, setQuery] = useState("");

  const searching = query.trim().length > 0;
  const active = shopCategories.find((c) => c.id === activeId);

  let products = searching
    ? allProducts.filter((p) =>
        `${p.name} ${p.unit}`.toLowerCase().includes(query.trim().toLowerCase()),
      )
    : (active?.products ?? allProducts);
  if (sort !== "popular") {
    products = [...products].sort((a, b) =>
      sort === "low" ? a.price - b.price : b.price - a.price,
    );
  }

  const heading = searching
    ? `Results for “${query.trim()}”`
    : (active?.name ?? "All products");

  const categoryButton = (id: string, name: string, emoji: string, count: number) => {
    const on = !searching && activeId === id;
    return (
      <button
        key={id}
        type="button"
        aria-pressed={on}
        onClick={() => {
          setActiveId(id);
          setQuery("");
        }}
        className={`flex flex-none cursor-pointer items-center gap-2.75 whitespace-nowrap border-b-[3px] px-4 py-3.25 text-left text-[14.5px] font-medium transition-colors hover:bg-primary-light lg:border-b-0 lg:border-l-[3px] ${
          on
            ? "border-primary bg-primary-light"
            : "border-transparent bg-surface"
        }`}
      >
        <span
          aria-hidden="true"
          className="grid size-6.5 place-items-center rounded-lg bg-canvas text-[15px]"
        >
          {emoji}
        </span>
        <span className="flex-1">{name}</span>
        <span className="font-mono text-[10.5px] text-ink/42">{count}</span>
      </button>
    );
  };

  return (
    <Section bordered={false} innerClassName="py-[clamp(24px,3.5vw,44px)]!">
      <div className="grid items-start gap-[clamp(20px,3vw,38px)] lg:grid-cols-[260px_1fr]">
        <aside className="overflow-hidden rounded-card border border-line bg-surface lg:sticky lg:top-24">
          <div className={`hidden border-b border-ink/10 px-4.5 py-4 lg:block ${monoLabel}`}>
            Categories
          </div>
          <div
            role="group"
            aria-label="Categories"
            className="shop-scroll flex overflow-x-auto lg:flex-col lg:overflow-visible"
          >
            {categoryButton(ALL, "All products", "🛒", allProducts.length)}
            {shopCategories.map((c) =>
              categoryButton(c.id, c.name, c.emoji, c.products.length),
            )}
          </div>
          <div className="hidden border-t border-ink/10 bg-canvas px-4.5 py-4 lg:block">
            <div className={monoLabel}>Delivery</div>
            <p className="mt-2 text-[13px] leading-[1.6] text-ink/62">
              {formatKsh(DELIVERY_FEE)} under {formatKsh(FREE_DELIVERY_FROM)}.
              Free above it. No surge, no subscription.
            </p>
          </div>
        </aside>

        <div className="min-w-0">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-ink/40"
              strokeWidth={2}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search milk, tomatoes, rice…"
              className="w-full rounded-pill border border-line-strong bg-surface py-3.25 pl-11.5 pr-11 text-[15px] outline-none transition-colors placeholder:text-ink/38 focus:border-primary"
            />
            {searching && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 cursor-pointer place-items-center rounded-pill text-ink/50 transition-colors hover:bg-canvas hover:text-ink"
              >
                <X className="size-4" />
              </button>
            )}
          </label>

          <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[clamp(22px,2.4vw,30px)] font-bold tracking-[-0.03em]">
              {heading}
              <span className="ml-2.5 font-mono text-xs font-normal tracking-normal text-ink/42">
                {products.length} item{products.length === 1 ? "" : "s"}
              </span>
            </h2>
            <div className="flex gap-1.75" role="group" aria-label="Sort by">
              {sortOptions.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  aria-pressed={sort === o.id}
                  onClick={() => setSort(o.id)}
                  className={`min-h-9 cursor-pointer whitespace-nowrap rounded-pill border px-3 py-2 font-mono text-[11.5px] tracking-wide transition-colors hover:border-ink ${
                    sort === o.id
                      ? "border-ink bg-ink text-onink"
                      : "border-line-strong text-ink/60"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>

          {products.length > 0 ? (
            <div className="mt-5 grid grid-cols-2 gap-3.5 md:grid-cols-[repeat(auto-fill,minmax(196px,1fr))]">
              {products.map((product, i) => {
                const category = categoryOf.get(product.id)!;
                return (
                  <ProductCard
                    key={`${heading}-${sort}-${product.id}`}
                    product={product}
                    category={category}
                    qty={cart[product.id] ?? 0}
                    onChange={(delta) => onChange(product.id, delta)}
                    index={i}
                  />
                );
              })}
            </div>
          ) : (
            <div className="mt-5 rounded-card border border-dashed border-line-strong bg-surface px-6 py-12 text-center">
              <div className="text-4xl" aria-hidden="true">
                🔍
              </div>
              <p className="mt-3 font-semibold">Nothing matches “{query.trim()}”</p>
              <p className="mt-1.5 text-sm text-ink/60">
                Check the spelling, or tell us and the store will stock it.
              </p>
            </div>
          )}

          <div className="mt-7.5 flex flex-wrap items-center justify-between gap-4.5 rounded-card border border-line bg-primary-light p-[clamp(20px,3vw,30px)]">
            <div>
              <h3 className="text-xl font-bold tracking-[-0.025em]">
                Out of stock on something?
              </h3>
              <p className="mt-2 max-w-[46ch] text-[14.5px] leading-[1.55] text-ink/66">
                Tell us the item and the store stocks it within the week. Our
                buyers work off this list.
              </p>
            </div>
            <LinkButton href="/contact" variant="ink">
              Request an item
            </LinkButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ShopCatalog;
