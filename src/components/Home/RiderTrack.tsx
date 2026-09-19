import "./home.css";
import { Bike, House } from "lucide-react";

// A rider with a Harraka delivery box rides the dashed route from the store
// (left dot) to the customer's home (right), then sets off again.
const RiderTrack = () => {
  return (
    <div className="relative h-9" aria-hidden="true">
      <div className="absolute inset-x-0 bottom-1.5 border-t border-dashed border-ink/25" />
      <span className="absolute bottom-0.75 left-0 size-2 rounded-full bg-ink/45" />
      <House className="absolute bottom-2.25 right-0 size-4.5 text-primary" />

      {/* rider path: between the store dot and the house */}
      <div className="absolute inset-x-3 bottom-1 top-0">
        <div className="hk-ride absolute bottom-0 h-8 w-9">
          <span className="absolute bottom-3 left-0 h-3.5 w-4.5 rounded-[3px] bg-primary shadow-[0_2px_6px_rgb(232_68_42/0.4)]" />
          <Bike
            className="absolute bottom-0 right-0 size-8 text-ink"
            strokeWidth={1.75}
          />
        </div>
      </div>
    </div>
  );
};

export default RiderTrack;
