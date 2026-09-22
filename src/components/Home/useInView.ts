import { useEffect, useRef, useState } from "react";

// Entrance animations only run when the browser supports them and the visitor
// hasn't asked for reduced motion.
export const canAnimate = () =>
  typeof IntersectionObserver === "function" &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Becomes true — and stays true — the first time the element scrolls into
// view. When animations aren't wanted it starts out true, so content is
// simply shown in its final state.
export const useInView = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => !canAnimate());

  useEffect(() => {
    const el = ref.current;
    if (!el || !canAnimate()) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, inView] as const;
};
