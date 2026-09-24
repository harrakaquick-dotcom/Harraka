import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css";

// min-h-dvh + flex-1 on <main> keeps the footer at the bottom of the viewport
// on short pages, and pushes it below the content on long ones.
//
// The basket lives here so the Shop, the Cart page and the header's basket
// button all share it. It's a {productId: quantity} map (ids come from
// Data/Shopdata.ts); pages read it through Outlet context. In-memory only —
// there's no backend or persistence yet, so a refresh empties it.
const Applayout = () => {
  const [cart, setCart] = useState<Record<string, number>>({});

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const changeQty = (id: string, delta: number) =>
    setCart((prev) => {
      const next = { ...prev };
      const qty = (prev[id] ?? 0) + delta;
      if (qty > 0) next[id] = qty;
      else delete next[id];
      return next;
    });

  return (
    <div className="flex min-h-dvh flex-col">
      <Header cartCount={cartCount} />
      <main className="flex-1">
        <Outlet
          context={
            {
              cart,
              cartCount,
              changeQty,
              clearCart: () => setCart({}),
            } satisfies CartContext
          }
        />
      </main>
      <Footer />
    </div>
  );
};

export type CartContext = {
  cart: Record<string, number>;
  cartCount: number;
  /** Adds (delta > 0) or removes (delta < 0) units; a line at 0 disappears. */
  changeQty: (id: string, delta: number) => void;
  clearCart: VoidFunction;
};

export default Applayout;
