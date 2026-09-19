import { Link } from "react-router-dom";
import ButtonLabel from "./ButtonLabel";

type Variant =
  | "primary"
  | "outline"
  | "ink"
  | "outline-light"
  | "store-dark"
  | "store-glass";
type Size = "sm" | "md" | "lg";

// Resting look + the wipe animation's colours (see .btn-wipe in button.css):
// [--wipe-bg] is the fill that sweeps in, [--wipe-fg] the label colour once it
// has, and [--wipe-ring] the glow that pulses out on hover.
const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white [--wipe-bg:var(--color-ink)] [--wipe-fg:#fff] [--wipe-ring:rgb(232_68_42/0.4)]",
  outline:
    "border border-ink/20 text-ink hover:border-ink [--wipe-bg:var(--color-ink)] [--wipe-fg:var(--color-onink)]",
  ink: "bg-ink text-canvas [--wipe-bg:var(--color-primary)] [--wipe-fg:#fff] [--wipe-ring:rgb(232_68_42/0.4)]",
  "outline-light":
    "border border-onink/30 text-onink hover:border-onink [--wipe-bg:var(--color-onink)] [--wipe-fg:var(--color-ink)] [--wipe-ring:rgb(251_247_244/0.4)]",
  "store-dark":
    "bg-ink text-white [--wipe-bg:var(--color-canvas)] [--wipe-fg:var(--color-ink)] [--wipe-ring:rgb(251_247_244/0.5)]",
  "store-glass":
    "border border-white/55 bg-ink/14 text-white [--wipe-bg:var(--color-canvas)] [--wipe-fg:var(--color-ink)] [--wipe-ring:rgb(255_255_255/0.5)]",
};

const sizes: Record<Size, string> = {
  sm: "px-6 py-3.25 text-[14.5px]",
  md: "px-6.5 py-3.5 text-[15px]",
  lg: "px-7 py-3.75 text-[15px]",
};

// Pill-shaped call-to-action link used across the Home sections. Same hover
// animation as Button.tsx: fill wipes across, label rolls over, ring pulses.
// Routes go through the router; "#anchors" and full URLs stay plain <a> tags.
const LinkButton = ({
  href,
  variant = "primary",
  size = "md",
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  children: string;
}) => {
  const className = `btn-wipe rounded-pill font-semibold ${sizes[size]} ${variants[variant]}`;
  const label = <ButtonLabel>{children}</ButtonLabel>;

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
};

export default LinkButton;
