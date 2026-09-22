// Hamburger bars — they move to the centre and rotate to morph into an X.
const barClass =
  "absolute left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-in-out";

const MenuButton = ({
  menuOpen,
  onClick,
}: {
  menuOpen: boolean;
  onClick: VoidFunction;
}) => {
  return (
    <button
      type="button"
      className="ml-2 grid size-10 cursor-pointer place-items-center rounded-full text-ink transition-colors hover:bg-line lg:hidden"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      onClick={onClick}
    >
      <span className="relative block size-6" aria-hidden="true">
        <span
          className={`${barClass} ${menuOpen ? "top-1/2 rotate-45" : "top-[calc(50%-6px)]"}`}
        />
        <span
          className={`${barClass} top-1/2 ${menuOpen ? "scale-x-0 opacity-0" : ""}`}
        />
        <span
          className={`${barClass} ${menuOpen ? "top-1/2 -rotate-45" : "top-[calc(50%+6px)]"}`}
        />
      </span>
    </button>
  );
};

export default MenuButton;
