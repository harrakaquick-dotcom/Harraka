import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import BasketBar from "../components/Shop/BasketBar";
import ShopCatalog from "../components/Shop/ShopCatalog";
import ShopHero from "../components/Shop/ShopHero";
import { shopZones } from "../Data/Shopdata";
import type { CartContext } from "../layout/Applayout";

const Shop = () => {
  const { cart, changeQty } = useOutletContext<CartContext>();
  const [zoneName, setZoneName] = useState(shopZones[0].name);
  const zone = shopZones.find((z) => z.name === zoneName) ?? shopZones[0];

  return (
    <div className="max-w-full overflow-x-hidden font-display">
      <ShopHero zone={zone.name} onZone={setZoneName} />
      <ShopCatalog cart={cart} onChange={changeQty} />
      <BasketBar cart={cart} zone={zone.name} eta={zone.eta} />
    </div>
  );
};

export default Shop;
