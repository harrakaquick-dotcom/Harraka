import { location, phone_number } from "../Data/Appdata";

// Dark announcement bar above the header. The contact details only show from
// tablet width up; on phones there's room for the promo line alone.
const TopNav = () => {
  return (
    <div className="flex min-h-10 w-full items-center justify-between gap-4 bg-ink px-3 py-2 font-mono text-xs text-onink-66 sm:px-6">
      <span className="flex min-w-0 items-center gap-3">
        <span className="live-dot" aria-hidden="true" />
        <h3 className="truncate">Free delivery on your first three orders</h3>
      </span>
      <span className="hidden whitespace-nowrap md:block">
        {location} · 07:00 – 23:00 daily · phone : {phone_number}
      </span>
    </div>
  );
};

export default TopNav;
