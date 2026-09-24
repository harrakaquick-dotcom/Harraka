// Shop catalogue, delivery zones and the pricing rules shared by the Shop,
// the basket bar and the Cart page. Prices are in KSh.

export type Product = {
  id: string;
  name: string;
  unit: string;
  price: number;
  was: number;
  emoji: string;
  tag?: "Best seller" | "In season" | "Baked today" | "Fresh in" | "Deal";
};

export type ShopCategory = {
  id: string;
  name: string;
  emoji: string;
  /** Tile background behind the product picture. */
  tint: string;
  products: Product[];
};

type RawProduct = Omit<Product, "id">;

const slug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const category = (
  name: string,
  emoji: string,
  tint: string,
  products: RawProduct[],
): ShopCategory => ({
  id: slug(name),
  name,
  emoji,
  tint,
  products: products.map((p) => ({ ...p, id: `${slug(name)}/${slug(p.name)}` })),
});

export const shopCategories: ShopCategory[] = [
  category("Fresh produce", "🥬", "#E6F7ED", [
    { name: "Sukuma wiki", unit: "large bunch", price: 30, was: 40, emoji: "🥬", tag: "In season" },
    { name: "Tomatoes", unit: "1 kg", price: 120, was: 140, emoji: "🍅" },
    { name: "Red onions", unit: "1 kg", price: 95, was: 110, emoji: "🧅" },
    { name: "Bananas", unit: "bunch of 6", price: 80, was: 95, emoji: "🍌" },
    { name: "Avocado", unit: "2 pieces", price: 70, was: 90, emoji: "🥑", tag: "Best seller" },
    { name: "Potatoes", unit: "2 kg", price: 210, was: 240, emoji: "🥔" },
    { name: "Carrots", unit: "1 kg", price: 90, was: 105, emoji: "🥕" },
    { name: "Mangoes", unit: "3 pieces", price: 150, was: 180, emoji: "🥭", tag: "In season" },
  ]),
  category("Milk & eggs", "🥛", "#FDEDE9", [
    { name: "Fresh milk", unit: "1 L pouch", price: 75, was: 85, emoji: "🥛", tag: "Best seller" },
    { name: "Eggs", unit: "tray of 6", price: 95, was: 110, emoji: "🥚" },
    { name: "Yoghurt", unit: "500 ml", price: 165, was: 185, emoji: "🥣" },
    { name: "Butter", unit: "250 g", price: 320, was: 360, emoji: "🧈" },
    { name: "Cheddar", unit: "200 g", price: 430, was: 470, emoji: "🧀" },
  ]),
  category("Bread & bakery", "🍞", "#FDEDE9", [
    { name: "Brown bread", unit: "400 g", price: 65, was: 75, emoji: "🍞" },
    { name: "White bread", unit: "600 g", price: 85, was: 95, emoji: "🍞" },
    { name: "Mandazi", unit: "pack of 4", price: 60, was: 70, emoji: "🍩", tag: "Baked today" },
    { name: "Chapati", unit: "pack of 5", price: 110, was: 130, emoji: "🫓" },
    { name: "Croissants", unit: "pack of 3", price: 240, was: 270, emoji: "🥐", tag: "Baked today" },
  ]),
  category("Pantry", "🍚", "#E6F7ED", [
    { name: "Maize flour", unit: "2 kg", price: 175, was: 199, emoji: "🌽", tag: "Best seller" },
    { name: "Rice", unit: "2 kg", price: 320, was: 355, emoji: "🍚" },
    { name: "Cooking oil", unit: "1 L", price: 290, was: 330, emoji: "🫒" },
    { name: "Sugar", unit: "1 kg", price: 170, was: 185, emoji: "🍬" },
    { name: "Tea leaves", unit: "250 g", price: 145, was: 165, emoji: "🍵" },
    { name: "Salt", unit: "500 g", price: 40, was: 50, emoji: "🧂" },
    { name: "Spaghetti", unit: "500 g", price: 130, was: 150, emoji: "🍝" },
    { name: "Beans", unit: "1 kg", price: 190, was: 215, emoji: "🫘" },
  ]),
  category("Cold drinks", "🥤", "#FDEDE9", [
    { name: "Still water", unit: "1.5 L", price: 60, was: 70, emoji: "💧" },
    { name: "Soda", unit: "500 ml", price: 70, was: 80, emoji: "🥤", tag: "Deal" },
    { name: "Mango juice", unit: "1 L", price: 190, was: 215, emoji: "🥭" },
    { name: "Iced tea", unit: "500 ml", price: 95, was: 110, emoji: "🧋" },
  ]),
  category("Snacks", "🍪", "#E6F7ED", [
    { name: "Crisps", unit: "150 g", price: 130, was: 150, emoji: "🍟" },
    { name: "Peanuts", unit: "200 g", price: 110, was: 125, emoji: "🥜" },
    { name: "Biscuits", unit: "pack of 10", price: 85, was: 100, emoji: "🍪", tag: "Best seller" },
    { name: "Chocolate bar", unit: "80 g", price: 150, was: 170, emoji: "🍫" },
  ]),
  category("Home care", "🧺", "#FDEDE9", [
    { name: "Washing powder", unit: "1 kg", price: 260, was: 295, emoji: "🧺" },
    { name: "Dish soap", unit: "750 ml", price: 190, was: 210, emoji: "🧼" },
    { name: "Bleach", unit: "1 L", price: 140, was: 160, emoji: "🧴" },
    { name: "Bin liners", unit: "roll of 20", price: 120, was: 140, emoji: "🗑️" },
  ]),
  category("Baby & care", "👶", "#E6F7ED", [
    { name: "Nappies", unit: "pack of 12", price: 620, was: 690, emoji: "👶" },
    { name: "Baby wipes", unit: "80 sheets", price: 280, was: 310, emoji: "🧻" },
    { name: "Toothpaste", unit: "140 g", price: 210, was: 235, emoji: "🪥" },
    { name: "Bar soap", unit: "4 × 175 g", price: 300, was: 340, emoji: "🧼" },
  ]),
];

export const allProducts: Product[] = shopCategories.flatMap((c) => c.products);

const productsById = new Map(allProducts.map((p) => [p.id, p]));
export const productById = (id: string) => productsById.get(id);

export const shopZones = [
  { name: "Westlands", eta: 8 },
  { name: "Kilimani", eta: 10 },
  { name: "CBD", eta: 9 },
  { name: "Lavington", eta: 11 },
];

export const sortOptions = [
  { id: "popular", label: "Popular" },
  { id: "low", label: "Price ↑" },
  { id: "high", label: "Price ↓" },
] as const;

export type SortId = (typeof sortOptions)[number]["id"];

export const FREE_DELIVERY_FROM = 700;
export const DELIVERY_FEE = 60;

export const formatKsh = (amount: number) =>
  `KSh ${amount.toLocaleString("en-KE")}`;

export const deliveryFee = (subtotal: number) =>
  subtotal === 0 || subtotal >= FREE_DELIVERY_FROM ? 0 : DELIVERY_FEE;

export const discountPercent = (p: Pick<Product, "price" | "was">) =>
  Math.round(((p.was - p.price) / p.was) * 100);

export type CartLine = { product: Product; qty: number };

// Turns the {productId: qty} map held in Applayout into priced lines.
export const cartLines = (cart: Record<string, number>): CartLine[] =>
  Object.entries(cart).flatMap(([id, qty]) => {
    const product = productById(id);
    return product ? [{ product, qty }] : [];
  });

export const cartSubtotal = (lines: CartLine[]) =>
  lines.reduce((sum, { product, qty }) => sum + product.price * qty, 0);
