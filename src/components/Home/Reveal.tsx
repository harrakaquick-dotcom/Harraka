import { useEffect, useRef, useState, type ReactNode } from "react";

// Fades and lifts its content in the first time it scrolls into view.
// It renders a <div>, so pass layout classes (grid, flex…) via className.
const Reveal = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver !== "function",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver !== "function") return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-5.5 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
