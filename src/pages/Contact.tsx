import ContactChannels from "../components/Contact/ContactChannels";
import ContactFaqs from "../components/Contact/ContactFaqs";
import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/ContactHero";
import OfficeMap from "../components/Contact/OfficeMap";
import Reveal from "../components/Home/Reveal";
import Section from "../components/Home/Section";

const Contact = () => {
  return (
    <div className="max-w-full overflow-x-hidden font-display">
      <ContactHero />
      <ContactChannels />
      <Section bordered={false} innerClassName="pt-0!">
        <Reveal className="grid grid-cols-1 gap-[clamp(24px,4vw,48px)] lg:grid-cols-[1.1fr_1fr]">
          <ContactForm />
          <OfficeMap />
        </Reveal>
      </Section>
      <ContactFaqs />
    </div>
  );
};

export default Contact;
