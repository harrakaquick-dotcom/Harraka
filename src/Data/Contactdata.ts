import { delivery_email, email_address, phone_number, support_email } from "./Appdata";

export const contactIntro = {
  title: "Talk to a person",
  text: "Support answers in under four minutes during delivery hours. Everything else gets a reply the same working day.",
};

export const channels = [
  {
    label: "Order support",
    value: phone_number,
    text: "In-app chat is fastest. 07:00 – 23:00 daily.",
  },
  {
    label: "Support",
    value: support_email,
    text: "Account, payment and refund questions. Replies the same working day.",
  },
  {
    label: "Delivery",
    value: delivery_email,
    text: "Late, missing or wrong items? Include your order number.",
  },
  {
    label: "General",
    value: email_address,
    text: "Investors, suppliers, press and partnerships.",
  },
];

export const reasons = [
  "An order problem",
  "Ride with us",
  "Investor relations",
  "Supply a product",
  "Press",
];

export const faqs = [
  {
    q: "Is it really ten minutes?",
    a: "In the seven live zones the median is under eleven minutes, measured from tap to gate. Past twenty minutes the delivery fee comes off the order automatically.",
  },
  {
    q: "How can you be cheaper than my duka?",
    a: "We buy for the whole city and hold it in three dark stores instead of hundreds of shopfronts. No high-street rent, no middleman on the produce run.",
  },
  {
    q: "What can I pay with?",
    a: "M-Pesa, Airtel Money, Visa and Mastercard in the app, or cash to the rider at your gate.",
  },
  {
    q: "Is there a minimum order?",
    a: "No minimum. Delivery is KSh 60 under KSh 700, and free above it.",
  },
  {
    q: "Something was missing or spoiled.",
    a: "Tap the item in your order history within 24 hours. Refunds go back to the original payment method, usually within the hour.",
  },
  {
    q: "Which areas are next?",
    a: "Karen, Langata, Runda, Gigiri and South B as the Q4 stores come online. Mombasa and Kisumu are in survey.",
  },
];
