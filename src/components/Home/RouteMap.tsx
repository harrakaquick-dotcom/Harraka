type Point = { x: number; y: number };

const STORE: Point = { x: 30, y: 86 };
const CONTROL: Point = { x: 128, y: 8 };
const HOME: Point = { x: 236, y: 30 };

const lerp = (a: Point, b: Point, t: number): Point => ({
  x: a.x + (b.x - a.x) * t,
  y: a.y + (b.y - a.y) * t,
});

// Mini street map for the order card: the dashed line is the route, the solid
// part is what the rider has covered, and the dot is the rider right now.
const RouteMap = ({ progress }: { progress: string }) => {
  const t = Math.min(1, Math.max(0, parseFloat(progress) / 100));

  // Point on the quadratic curve at t, and the control point of the covered
  // sub-curve (de Casteljau split, so the solid part ends exactly at the rider).
  const rider = lerp(lerp(STORE, CONTROL, t), lerp(CONTROL, HOME, t), t);
  const coveredControl = lerp(STORE, CONTROL, t);

  return (
    <svg
      viewBox="0 0 264 112"
      preserveAspectRatio="xMidYMid slice"
      className="mt-3.5 block h-28 w-full rounded-xl bg-surface-2"
      aria-hidden="true"
    >
      <rect x="150" y="66" width="72" height="34" rx="8" className="fill-secondary-light" />
      <g stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none">
        <path d="M-10 58H280M-10 102H280M66 -10V130M176 -10V130" />
      </g>

      <path
        d={`M${STORE.x} ${STORE.y} Q${CONTROL.x} ${CONTROL.y} ${HOME.x} ${HOME.y}`}
        fill="none"
        stroke="rgb(23 18 15 / 0.22)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <path
        d={`M${STORE.x} ${STORE.y} Q${coveredControl.x} ${coveredControl.y} ${rider.x} ${rider.y}`}
        fill="none"
        className="stroke-primary"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <rect
        x={STORE.x - 6}
        y={STORE.y - 6}
        width="12"
        height="12"
        rx="3"
        className="fill-ink"
      />
      <circle cx={HOME.x} cy={HOME.y} r="9" className="fill-primary/20" />
      <circle cx={HOME.x} cy={HOME.y} r="4.5" className="fill-primary" />
      <circle
        cx={rider.x}
        cy={rider.y}
        r="6"
        className="fill-primary stroke-surface"
        strokeWidth="2.5"
      />
    </svg>
  );
};

export default RouteMap;
