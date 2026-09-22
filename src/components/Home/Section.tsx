import type { ReactNode } from "react";

const tones = {
  canvas: "",
  surface: "bg-surface",
  ink: "bg-ink text-onink",
  tint: "bg-primary-light",
  primary: "bg-primary text-white",
};

// Full-width page band with the shared centred container and vertical rhythm.
const Section = ({
  id,
  tone = "canvas",
  bordered = true,
  innerClassName = "",
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  bordered?: boolean;
  innerClassName?: string;
  children: ReactNode;
}) => {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-ink/10" : ""} ${tones[tone]}`}
    >
      <div
        className={`mx-auto max-w-7xl px-[clamp(16px,4vw,44px)] py-[clamp(40px,6vw,84px)] ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
