// Static content for the About page. Dates and figures not pulled from
// Appdata are placeholders from the design brief — confirm before publishing.

import { numberOfDev, numberOfRider, numberOfStore, Since } from "./Appdata";

export const aboutIntro = {
  title: "We built the corner shop as infrastructure.",
  text: "Nairobi already buys groceries in small, frequent baskets. What it did not have was a way to do that without leaving the house or paying a convenience premium. Harraka holds the everyday basket in dark stores across the city and moves it the last two kilometres in under ten minutes.",
};

export const companyStory = {
  title: `Started in a Westlands garage, in ${Since}`,
  paragraphs: [
    "The first Harraka store was 40 square metres behind a hardware shop on Chiromo Road, stocked with 180 items and served by three riders on borrowed bikes. We picked that street because we could measure it: every home within two kilometres, and a delivery window we could actually defend.",
    `Today the model is the same, only tighter. ${numberOfStore} purpose-built dark stores, 2,400 items, ${numberOfRider} salaried riders, and a median delivery under eleven minutes across seven Nairobi zones. We buy for the whole city, so a litre of milk costs less through the app than at the shop on the corner.`,
    `We are a Kenyan company, registered in Nairobi, with a team of ${numberOfDev} people. Every rider is on payroll with NHIF and NSSF from their first shift.`,
  ],
};

export const values = [
  {
    title: "Cheaper than the alternative",
    text: "If an item costs more through Harraka than at a duka on the same street, that is a pricing bug and we fix it that week.",
  },
  {
    title: "Ten minutes, or the fee is ours",
    text: "Past twenty minutes the delivery fee comes off the order automatically. No claim to file, no support queue.",
  },
  {
    title: "Riders on payroll",
    text: "A monthly wage, eight-hour shifts, statutory cover, and a bike we own and maintain. Speed is a routing problem, not a rider problem.",
  },
  {
    title: "Kenyan supply first",
    text: "Produce comes off contracts with farms in Kiambu and Nakuru, bought weekly at agreed prices rather than on the spot market.",
  },
];

// The first milestone is highlighted in the timeline.
export const milestones = [
  {
    when: "2024 · Q2",
    text: "First store opens in Westlands. 180 items, three riders, 40 orders a day.",
  },
  {
    when: "2025 · Q1",
    text: "Kilimani and CBD stores open. M-Pesa checkout ships. Median delivery drops under 12 minutes.",
  },
  {
    when: "2025 · Q4",
    text: "Riders move to salaried contracts. Farm contracts replace spot buying for produce.",
  },
  {
    when: "2026 · today",
    text: `Seven live zones, 2,400 items, ${numberOfRider} riders. Karen, Langata, Runda, Gigiri and South B open next.`,
  },
];

// Placeholder names and bios — swap for the real team. Portraits go in
// public/images (e.g. image: "/images/team/amina.jpg"); without one, or if it
// fails to load, <Img> shows public/images/placeholder.svg.
export const team: {
  name: string;
  role: string;
  note: string;
  image?: string;
}[] = [
  {
    name: "Amina Yusuf",
    role: "Co-founder & CEO",
    note: "Ran the Westlands pilot out of a 40 sqm room. Previously retail operations at a regional FMCG distributor.",
  },
  {
    name: "David Kariuki",
    role: "Co-founder & COO",
    note: "Built the store layout and picking standard. Fifteen years in cold-chain logistics across East Africa.",
  },
  {
    name: "Wanjiru Njoroge",
    role: "Head of Supply",
    note: "Holds the farm contracts in Kiambu and Nakuru and the weekly price book.",
  },
  {
    name: "Samuel Otieno",
    role: "Head of Engineering",
    note: "Owns the app, the routing engine, and the ten-minute promise on the dispatch side.",
  },
];

export const riderPerks = [
  { label: "Monthly base", value: "KSh 28,000" },
  { label: "Bike & charging", value: "On us" },
  { label: "Shift length", value: "8 hours" },
  { label: "Average distance", value: "1.8 km / drop" },
];
