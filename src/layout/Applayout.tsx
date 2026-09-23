import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./style.css";

// min-h-dvh + flex-1 on <main> keeps the footer at the bottom of the viewport
// on short pages, and pushes it below the content on long ones.
//
// Cart count lives here (not in Header — the header's cart icon just links to
// /cart, it doesn't add anything) so a future per-product "Add to cart"
// button can call onAddToCart via Outlet context once Shop/products exist
// (see CLAUDE.md); until then this stays at 0 and Cart shows its empty state.
const Applayout = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Outlet
          context={
            {
              cartCount,
              onAddToCart: () => setCartCount((count) => count + 1),
            } satisfies CartContext
          }
        />
      </main>
      <Footer />
    </div>
  );
};

export type CartContext = { cartCount: number; onAddToCart: VoidFunction };

export default Applayout;
