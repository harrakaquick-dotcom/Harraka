import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";
import ButtonLabel from "./ButtonLabel";

// Header's cart shortcut — just navigates to /cart. The .btn-bump, .badge-pop
// and .cart-plus animations in button.css are kept ready for a future
// per-product "Add to cart" button once the Shop route/catalogue exists
// (see CLAUDE.md); this button doesn't add anything, so it doesn't use them.
const Button = ({ count = 0 }: { count?: number }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Wrapped in a View Transition where supported (Chrome/Edge); browsers
    // without it just navigate straight away — no polyfill needed either way.
    const go = () => flushSync(() => navigate("/cart"));
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(go);
    } else {
      go();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn-wipe cursor-pointer rounded-pill border border-ink/20 px-5 py-2 text-ink hover:border-ink [--wipe-bg:var(--color-ink)] [--wipe-fg:var(--color-onink)]"
    >
      <svg
        className="btn-icon-reveal shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 10a4 4 0 0 1-8 0" />
        <path d="M3.103 6.034h17.794" />
        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
      </svg>
      <ButtonLabel>{count > 0 ? `Basket · ${count}` : "Basket"}</ButtonLabel>
    </button>
  );
};

export default Button;
