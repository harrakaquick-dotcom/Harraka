import type { ReactNode } from "react";
import Reveal from "./Reveal";

export const sectionTitleClass =
  "mt-3 text-[clamp(30px,4.2vw,52px)] font-bold leading-none tracking-[-0.04em]";

// Small mono label above a section title, e.g. "01 — Shop".
export const Eyebrow = ({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) => (
  <div
    className={`font-mono text-[10px] uppercase tracking-[.14em] ${
      dark ? "text-primary" : "text-primary-dark"
    }`}
  >
    {children}
  </div>
);

// Eyebrow + title on the left, optional action (button / blurb) on the right.
const SectionHeader = ({
  eyebrow,
  title,
  titleClassName = "",
  dark = false,
  children,
}: {
  eyebrow: string;
  title: string;
  titleClassName?: string;
  dark?: boolean;
  children?: ReactNode;
}) => {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <h2 className={`${sectionTitleClass} ${titleClassName}`}>{title}</h2>
      </div>
      {children}
    </Reveal>
  );
};

export default SectionHeader;
