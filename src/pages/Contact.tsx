import ContactAside from "../components/Contact/ContactAside";
import ContactChannels from "../components/Contact/ContactChannels";
import ContactForm from "../components/Contact/ContactForm";
import ContactHero from "../components/Contact/ContactHero";
import Reveal from "../components/Home/Reveal";
import Section from "../components/Home/Section";

const Contact = () => {
  return (
    <div className="max-w-full overflow-x-hidden font-display">
      <ContactHero />
      <ContactChannels />
      <Section innerClassName="pt-0!">
        <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[clamp(24px,4vw,48px)]">
          <ContactForm />
          <ContactAside />
        </Reveal>
      </Section>
    </div>
  );
};

export default Contact;
