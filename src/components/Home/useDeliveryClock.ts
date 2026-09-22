import { useEffect, useState } from "react";

// Average delivery time (seconds) — drifts up and down inside this range.
const AVG_MIN = 510; // 8:30
const AVG_MAX = 630; // 10:30
const AVG_MID = (AVG_MIN + AVG_MAX) / 2;

// The single order on the phone mock-up counts down (seconds) and restarts.
const ORDER_START = 597;
const ORDER_FLOOR = 90;

// One tick of the average: a small random nudge, gently pulled back towards
// the middle so it wanders naturally but never leaves the range.
const nextAverage = (s: number) => {
  const nudge = (Math.random() - 0.5) * 8 + (AVG_MID - s) * 0.03;
  return Math.min(AVG_MAX, Math.max(AVG_MIN, Math.round(s + nudge)));
};

const format = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

// Fake live numbers for the Home page: the city-wide average delivery clock
// (fluctuates within a range) and the phone's order ETA (counts down).
export const useDeliveryClock = () => {
  const [average, setAverage] = useState(AVG_MID);
  const [orderLeft, setOrderLeft] = useState(ORDER_START);

  useEffect(() => {
    const id = setInterval(() => {
      setAverage(nextAverage);
      setOrderLeft((s) => (s > ORDER_FLOOR ? s - 3 : ORDER_START));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return {
    clock: format(average),
    mins: Math.max(1, Math.round(orderLeft / 60)),
    progress: `${Math.round(100 - (orderLeft / ORDER_START) * 92)}%`,
  };
};

export type DeliveryClock = ReturnType<typeof useDeliveryClock>;
