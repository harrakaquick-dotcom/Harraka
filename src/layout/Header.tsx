import { useEffect, useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import GetButton from "../components/Button/GetButton";
import MenuButton from "../components/Button/MenuButton";
import { navItems } from "../Data/navigation";
import TopNav from "./TopNav";

const HeaderActions = () => (
  <div className="flex items-center gap-3">
    <Button />
    <GetButton />
  </div>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <nav className="flex flex-col items-center border-b border-b-line/84 font-display">
      <TopNav />
      <div className="relative flex w-full items-center justify-between p-3 lg:pr-6">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="./icons/harraka_logo_with_text.png"
              alt="Harraka"
              className="h-auto w-36 sm:w-45"
            />
          </Link>
          <ul className="hidden items-center lg:flex">
            {navItems.map(({ label, to }) => (
              <li key={to} className="m-2">
                <Link
                  to={to}
                  className="relative text-ink transition-colors hover:text-primary-dark after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary-dark after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <div className="hidden sm:block">
            <HeaderActions />
          </div>
          <MenuButton
            menuOpen={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          />
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-0 top-full z-50 border-b border-line bg-canvas px-4 pb-5 pt-2 shadow-lg lg:hidden"
          >
            <ul className="flex flex-col text-lg">
              {navItems.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={closeMenu}
                    className="flex items-center justify-between border-b border-line py-3 text-ink transition-colors hover:text-primary-dark"
                  >
                    {label}
                    <ArrowRightIcon size={12} className="text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 sm:hidden">
              <HeaderActions />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
