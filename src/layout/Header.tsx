import { useEffect, useState } from "react";
import type React from "react";
import GetButton from "../components/Button/GetButton";
import Button from "../components/Button/Button";
import { phone_number, location } from "../Data/Appdata";
import { ArrowRightIcon } from "lucide-react";
import MenuButton from "../components/Button/MenuButton";
import { Link } from "react-router-dom";

const navlists = ["Home", "Shop", "About", "contact", "Coverage", "Investor"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <nav className="flex flex-col items-center border-b border-b-line/84">
      <TopNav />
      <div className="relative flex w-full items-center justify-between p-3 lg:pr-6">
        <span className="flex items-center">
          <img
            src="./icons/harraka_logo_with_text.png"
            alt="app logo"
            className="h-auto w-36 sm:w-45"
          />
          <span className="hidden items-center lg:flex">
            {navlists.map((navItem) => (
              <span key={navItem} className="m-2">
                <Navlinks navItem={navItem} />
              </span>
            ))}
          </span>
        </span>

        <span className="flex items-center">
          <span className="hidden items-center sm:flex">
            <Button />
            <GetButton />
          </span>
          <MenuButton
            menuOpen={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          />
        </span>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 border-b border-line bg-canvas px-4 pb-5 pt-2 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col text-lg">
              {navlists.map((navItem) => (
                <Link to={navItem}>
                  <li
                    key={navItem}
                    className="border-b border-line py-3 flex justify-between items-center"
                  >
                    <Navlinks navItem={navItem} />
                    <span className="text-primary">
                      <ArrowRightIcon size={12} />
                    </span>
                  </li>
                </Link>
              ))}
            </ul>
            <div className="mt-5 flex items-center sm:hidden">
              <Button />
              <GetButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

const Navlinks: React.FC<{ navItem: string }> = ({ navItem }) => {
  return (
    <Link
      to={navItem}
      className="relative font-display text-ink hover:text-primary-dark transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary-dark after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      {navItem}
    </Link>
  );
};

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
