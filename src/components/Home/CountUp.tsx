import { useEffect, useState } from "react";
import { canAnimate, useInView } from "./useInView";

// Counts from 0 up to `to` the first time it scrolls into view. Shows the
// final number straight away when animation isn't available or wanted.
const CountUp = ({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) => {
  const [ref, inView] = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(() => (canAnimate() ? 0 : to));

  useEffect(() => {
    if (!inView || !canAnimate()) return;

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3; // ease-out
      setValue(eased * to);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
