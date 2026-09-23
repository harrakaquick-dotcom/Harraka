import { useOutletContext } from "react-router-dom";
import LinkButton from "../components/Button/LinkButton";
import Img from "../components/Image/Img";
import Section from "../components/Home/Section";
import { Eyebrow, sectionTitleClass } from "../components/Home/SectionHeader";
import type { CartContext } from "../layout/Applayout";

// Placeholder page — there's no product catalogue or checkout yet (see
// CLAUDE.md), so this just reflects cartCount from Applayout (clicks on the
// header's cart button) rather than real line items. Renders immediately,
// no <Reveal>: it's the only thing on the page, so it should never flash in.
const Cart = () => {
  const { cartCount } = useOutletContext<CartContext>();
  const hasItems = cartCount > 0;

  return (
    <div className="font-display">
      <Section bordered={false}>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 py-[clamp(20px,5vw,48px)] text-center">
          <Eyebrow>Your bucket</Eyebrow>
          <h1 className={sectionTitleClass}>
            {hasItems
              ? `${cartCount} item${cartCount > 1 ? "s" : ""} in your bucket`
              : "Your bucket is empty"}
          </h1>
          <p className="max-w-[52ch] text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-ink/68">
            {hasItems
              ? "This is a placeholder — checkout isn't wired up yet. Keep browsing while we build the shop out."
              : "Nothing here yet. Browse the shop and whatever you add will show up here."}
          </p>

          <Img
            alt="Harraka grocery bag"
            className="h-52 w-full max-w-70 rounded-card object-cover"
          />

          <div className="mt-1 flex flex-wrap justify-center gap-3">
            <LinkButton href="/shop">
              {hasItems ? "Keep shopping" : "Start shopping"}
            </LinkButton>
            <LinkButton href="/" variant="outline">
              Back to home
            </LinkButton>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Cart;
