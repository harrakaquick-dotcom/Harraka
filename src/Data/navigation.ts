// Site navigation — one source for the header and footer links.

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Coverage", to: "/coverage" },
  { label: "Investor", to: "/investor" },
];

export const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "All categories", to: "/shop" },
      { label: "Coverage", to: "/coverage" },
      { label: "How it works", to: "/#how" },
      { label: "Get the app", to: "/#download" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Harraka", to: "/about" },
      { label: "Investors", to: "/investor" },
      { label: "Rider careers", to: "/about#riders" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", to: "/contact" },
      { label: "Privacy policy", to: "/contact" },
      { label: "Refunds & returns", to: "/contact" },
      { label: "Data Protection Act, 2019", to: "/contact" },
    ],
  },
];
