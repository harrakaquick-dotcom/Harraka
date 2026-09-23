import LinkButton from "../Button/LinkButton";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";

const ContactBand = () => {
  return (
    <Section tone="ink" bordered={false}>
      <Reveal className="flex flex-wrap items-center justify-between gap-5">
        <h2 className="max-w-[22ch] text-[clamp(26px,3.4vw,44px)] font-bold leading-none tracking-[-0.04em]">
          Want the investor brief or a partnership conversation?
        </h2>
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/contact">Get in touch</LinkButton>
          <LinkButton href="/#numbers" variant="outline-light">
            See the numbers
          </LinkButton>
        </div>
      </Reveal>
    </Section>
  );
};

export default ContactBand;
