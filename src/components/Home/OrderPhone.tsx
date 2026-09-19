import "./home.css";
import {
  BatteryFull,
  ChevronLeft,
  House,
  ReceiptText,
  Search,
  Signal,
  UserRound,
  Wifi,
} from "lucide-react";
import { orderItems } from "../../Data/Homedata";
import RouteMap from "./RouteMap";
import type { DeliveryClock } from "./useDeliveryClock";

const total = orderItems.reduce((sum, item) => sum + item.price, 0);

const tabs = [
  { label: "Home", Icon: House },
  { label: "Search", Icon: Search },
  { label: "Orders", Icon: ReceiptText, active: true },
  { label: "Account", Icon: UserRound },
];

// Hardware buttons on the phone's edges — [side, top offset, height].
const buttons = [
  ["left", "top-24", "h-7"],
  ["left", "top-36", "h-11"],
  ["left", "top-51", "h-11"],
  ["right", "top-40", "h-16"],
] as const;

// Phone mock-up showing a live order: route map, rider progress, rider card
// and receipt, inside a metal-framed handset with a Dynamic Island.
const OrderPhone = ({
  mins,
  progress,
}: Pick<DeliveryClock, "mins" | "progress">) => {
  return (
    <div className="flex justify-center">
      <div className="hk-float relative w-[min(310px,100%)]">
        {buttons.map(([side, top, height]) => (
          <span
            key={`${side}-${top}`}
            aria-hidden="true"
            className={`absolute w-1 bg-linear-to-b from-[#4a423c] to-[#2a2420] ${top} ${height} ${
              side === "left"
                ? "-left-0.75 rounded-l-sm"
                : "-right-0.75 rounded-r-sm"
            }`}
          />
        ))}

        {/* metal frame */}
        <div className="rounded-[52px] bg-linear-to-br from-[#7a716a] via-[#2a2420] to-[#6b635c] p-0.75 shadow-[0_44px_70px_-30px_rgb(23_18_15/0.6),0_18px_30px_-18px_rgb(23_18_15/0.4)]">
          {/* glass bezel */}
          <div className="relative rounded-[49px] bg-black p-2.5">
            {/* screen */}
            <div className="relative flex min-h-155 flex-col overflow-hidden rounded-[40px] bg-surface">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-2.5 z-10 h-6.5 w-24 -translate-x-1/2 rounded-full bg-black"
              >
                <span className="absolute right-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-[#1a2233] ring-1 ring-[#2b3550]" />
              </div>

              <div className="flex h-11 items-center justify-between px-6 pt-1.5 text-xs font-semibold">
                <span>9:41</span>
                <span
                  className="flex items-center gap-1"
                  aria-label="4G, wifi, battery full"
                >
                  <Signal className="size-3.25" strokeWidth={2.75} />
                  <Wifi className="size-3.25" strokeWidth={2.75} />
                  <BatteryFull className="size-4.5" strokeWidth={2} />
                </span>
              </div>

              <div className="flex items-center gap-0.5 px-3 pt-1 text-[13px] font-semibold">
                <ChevronLeft className="size-4.5 text-primary" />
                Track order
              </div>

              <div className="flex-1 px-4.5 pb-4 pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[.11em] text-ink/45">
                  Order #HK-4417
                </div>
                <div className="mt-1.5 text-[23px] font-bold tracking-[-0.03em]">
                  Arriving in {mins} min
                </div>

                <RouteMap progress={progress} />

                <div className="relative mb-1 mt-3.5 h-6.5">
                  <div className="absolute inset-x-0 top-3 h-0.5 bg-ink/12" />
                  <div
                    className="absolute left-0 top-3 h-0.5 bg-primary"
                    style={{ width: progress }}
                  />
                  <div
                    className="absolute top-1 -ml-2.25 size-4.5 rounded-full border-3 border-surface bg-primary shadow-[0_2px_8px_rgb(232_68_42/0.5)] transition-[left] duration-900 ease-linear"
                    style={{ left: progress }}
                  />
                </div>
                <div className="flex justify-between font-mono text-[9.5px] uppercase tracking-[.06em] text-ink/42">
                  <span>Packed</span>
                  <span>On the road</span>
                  <span>At your gate</span>
                </div>

                <div className="mt-4 flex items-center gap-2.75 rounded-[14px] border border-ink/12 p-3.25">
                  <span className="grid size-9 place-items-center rounded-full bg-primary-light font-mono text-xs font-semibold text-primary-dark">
                    BK
                  </span>
                  <div className="flex-1">
                    <div className="text-[13.5px] font-semibold">Brian K.</div>
                    <div className="font-mono text-[10px] text-ink/50">
                      Rider · KDE 442Q
                    </div>
                  </div>
                  <span className="rounded-pill border border-ink/16 px-2.5 py-1.25 font-mono text-[10px]">
                    Call
                  </span>
                </div>

                <div className="mt-3.5 border-t border-dashed border-ink/18 pt-3.25">
                  <div className="flex flex-col gap-1.5 text-[13px] text-ink/70">
                    {orderItems.map((item) => (
                      <div key={item.name} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="font-mono">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2.5 flex justify-between text-[14.5px] font-bold">
                    <span>Total</span>
                    <span className="font-mono">KSh {total}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-around border-t border-ink/10 bg-surface px-3 pb-6.5 pt-2.5">
                {tabs.map(({ label, Icon, active }) => (
                  <div
                    key={label}
                    className={`flex flex-col items-center gap-0.5 ${
                      active ? "text-primary" : "text-ink/40"
                    }`}
                  >
                    <Icon className="size-4.5" strokeWidth={active ? 2.5 : 2} />
                    <span className="font-mono text-[8.5px] uppercase tracking-[.06em]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <span
                aria-hidden="true"
                className="absolute bottom-1.75 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-ink"
              />
            </div>

            {/* glass sheen over the bezel */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[49px] bg-[linear-gradient(115deg,rgb(255_255_255/0.16),transparent_30%)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPhone;
