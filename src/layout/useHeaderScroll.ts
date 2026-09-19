import { useEffect, useState } from "react";

const HIDE_AFTER = 120; // px — never hide while still near the top of the page
const MIN_DELTA = 6; // px — ignore tiny scroll jitters

// Drives the "headroom" header: it hides when the page scrolls down and comes
// back as soon as the visitor scrolls up. `scrolled` is true once the page has
// left the very top (used for the shadow).
export const useHeaderScroll = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = Math.max(0, window.scrollY);
      setScrolled(y > 8);
      if (Math.abs(y - lastY) > MIN_DELTA) {
        setHidden(y > HIDE_AFTER && y > lastY);
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { hidden, scrolled };
};
