import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { contactIntro } from "../../Data/Contactdata";
import Section from "../Home/Section";

const ContactHero = () => {
  return (
    <Section tone="surface" bordered={false}>
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-widest text-ink/45"
      >
        <Link to="/" className="transition-colors hover:text-primary-dark">
          Home
        </Link>
        <ChevronRight className="size-3 text-ink/30" strokeWidth={2.25} />
        <span className="text-ink/70">Contact</span>
      </nav>

      <h1 className="mt-4 max-w-[24ch] text-[clamp(34px,5.4vw,66px)] font-bold leading-[.98] tracking-tighter">
        {contactIntro.title}
      </h1>
      <p className="mt-4.5 max-w-[56ch] text-[clamp(16px,1.3vw,19px)] leading-[1.55] text-ink/66">
        {contactIntro.text}
      </p>
    </Section>
  );
};

export default ContactHero;
