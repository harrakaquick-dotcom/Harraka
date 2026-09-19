// Static content for the Home page. Figures marked "pilot" are placeholders
// from the design — confirm and date them before publishing.

import { numberOfDev, numberOfRider, numberOfStore, Since } from "./Appdata";

export type Tone = "primary" | "secondary";

export type CategoryId =
  | "produce"
  | "dairy"
  | "bakery"
  | "pantry"
  | "drinks"
  | "snacks"
  | "home"
  | "baby";

// Tones alternate in a checkerboard across the 4-column grid.
export const categories: {
  id: CategoryId;
  name: string;
  count: number;
  tone: Tone;
}[] = [
  { id: "produce", name: "Fresh produce", count: 214, tone: "secondary" },
  { id: "dairy", name: "Milk & eggs", count: 68, tone: "primary" },
  { id: "bakery", name: "Bread & bakery", count: 41, tone: "secondary" },
  { id: "pantry", name: "Pantry", count: 386, tone: "primary" },
  { id: "drinks", name: "Cold drinks", count: 132, tone: "primary" },
  { id: "snacks", name: "Snacks", count: 176, tone: "secondary" },
  { id: "home", name: "Home care", count: 148, tone: "primary" },
  { id: "baby", name: "Baby & care", count: 97, tone: "secondary" },
];

export const marqueeItems = [
  "Fresh produce",
  "Milk & eggs",
  "Bread daily",
  "Unga & rice",
  "Cooking oil",
  "Home care",
  "Baby",
  "Cold drinks",
  "Airtime",
];

// Placeholder wordmarks — swap for real press logos.
export const pressNames = [
  "Business Daily",
  "TechCabal",
  "The Standard",
  "Disrupt Africa",
  "Nation",
];

export const heroStats = [
  { value: "2,400+", label: "items in stock" },
  { value: "KSh 0", label: "delivery over KSh 700" },
];

export const orderItems = [
  { name: "Fresh milk 1L × 2", price: 150 },
  { name: "Sukuma wiki bunch", price: 30 },
  { name: "Brown bread 400g", price: 65 },
];

export type StepVisual = "order" | "pick" | "ride";

// `{clock}` is replaced with the live delivery-time clock. `visual` picks the
// small animated scene shown at the bottom of each step.
export const howSteps: {
  num: string;
  title: string;
  body: string;
  visual: StepVisual;
}[] = [
  {
    num: "01",
    title: "You order",
    body: "Pick from the 2,400 items your neighbourhood store actually holds. M-Pesa, card, or cash at the gate.",
    visual: "order",
  },
  {
    num: "02",
    title: "We pick in 90 seconds",
    body: "Every store sits inside a 2km radius of the homes it serves, laid out so a picker never walks more than 30 metres.",
    visual: "pick",
  },
  {
    num: "03",
    title: "A rider brings it",
    body: "Salaried riders on electric bikes, tracked door to door. Average across Nairobi today: {clock}.",
    visual: "ride",
  },
];

export const liveZones = [
  { name: "Westlands", time: "8 min" },
  { name: "Parklands", time: "9 min" },
  { name: "Kilimani", time: "10 min" },
  { name: "Kileleshwa", time: "10 min" },
  { name: "Lavington", time: "11 min" },
  { name: "CBD", time: "9 min" },
  { name: "Upper Hill", time: "10 min" },
];

export const upcomingZones = ["Karen", "Langata", "Runda", "Gigiri", "South B"];

export type InvestorMetricId = "orders" | "basket" | "retention" | "breakeven";

// Pilot figures from the Nairobi stores.
export const investorStats: {
  id: InvestorMetricId;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  change?: string;
}[] = [
  {
    id: "orders",
    value: 3.4,
    decimals: 1,
    suffix: "×",
    label: "orders per customer, per month",
  },
  {
    id: "basket",
    value: 245,
    prefix: "KSh ",
    label: "median basket",
    change: "+18% since launch",
  },
  {
    id: "retention",
    value: 62,
    suffix: "%",
    label: "month-two customer retention",
  },
  {
    id: "breakeven",
    value: 11,
    suffix: " wks",
    label: "to store-level contribution positive",
  },
];

export type InvestorPointId = "radius" | "picking" | "riders";

// Why the model works — the same facts as the "How it works" steps.
export const investorPoints: {
  id: InvestorPointId;
  title: string;
  text: string;
}[] = [
  { id: "radius", title: "Small radius", text: "Every store serves homes within 2 km." },
  { id: "picking", title: "Fast picking", text: "A picker never walks more than 30 metres." },
  { id: "riders", title: "Own riders", text: "Salaried, on electric bikes, tracked door to door." },
];

// Sample reviews from the design — replace with real customer quotes.
export const testimonials = [
  {
    topic: "Never runs out",
    quote:
      "I stopped keeping a shopping list. Whatever runs out gets ordered, and it beats me to the kitchen.",
    name: "Achieng' O.",
    area: "Kilimani",
    orders: 14,
  },
  {
    topic: "Weekly top-up",
    quote:
      "Two kids, one Saturday. The weekly top-up used to cost me an afternoon in traffic.",
    name: "Peter M.",
    area: "Westlands",
    orders: 31,
  },
  {
    topic: "Late-night milk",
    quote:
      "Milk at eleven at night, at the price the duka charges at noon. That is the whole review.",
    name: "Faith W.",
    area: "Parklands",
    orders: 9,
  },
  {
    topic: "Fresh produce",
    quote:
      "The sukuma and tomatoes are fresher than what I used to pick out myself at the market.",
    name: "Mercy K.",
    area: "Lavington",
    orders: 17,
  },
  {
    topic: "Fair prices",
    quote:
      "I checked three items against my usual duka. Same price, and nobody had to leave the house.",
    name: "Daniel W.",
    area: "Kileleshwa",
    orders: 26,
  },
  {
    topic: "Lunch-hour saver",
    quote:
      "I order between meetings. By the time I am back at my desk, the shopping is at reception.",
    name: "Brian N.",
    area: "Upper Hill",
    orders: 22,
  },
  {
    topic: "Rainy-day hero",
    quote:
      "It was pouring and the baby needed nappies. Ten minutes later they were at the gate.",
    name: "Wanjiru M.",
    area: "CBD",
    orders: 12,
  },
  {
    topic: "Easy M-Pesa",
    quote:
      "Paying with M-Pesa took two taps. No hunting for change at the gate.",
    name: "Kevin O.",
    area: "Westlands",
    orders: 8,
  },
  {
    topic: "Great riders",
    quote:
      "The rider called from the gate and waited while I found my slippers. Small thing, big difference.",
    name: "Sharon A.",
    area: "Parklands",
    orders: 19,
  },
  {
    topic: "Family basket",
    quote:
      "Family of five, one weekly basket, always right. No more Saturday queues.",
    name: "Samuel T.",
    area: "Kilimani",
    orders: 33,
  },
  {
    topic: "Early morning",
    quote:
      "No bread in the house at 6am. A warm loaf was at the door before the kids were dressed.",
    name: "Grace N.",
    area: "Kileleshwa",
    orders: 6,
  },
  {
    topic: "Always in stock",
    quote:
      "Even the odd things like baby cereal and airtime are there. I rarely need a second shop now.",
    name: "James L.",
    area: "Lavington",
    orders: 15,
  },
];

export type CompanyStatId = "since" | "riders" | "stores" | "team";

export const companyStats: { id: CompanyStatId; value: number; label: string }[] =
  [
    { id: "since", value: Since, label: "first store, Westlands" },
    { id: "riders", value: numberOfRider, label: "salaried riders" },
    { id: "stores", value: numberOfStore, label: "dark stores in Nairobi" },
    { id: "team", value: numberOfDev, label: "people on the team" },
  ];
