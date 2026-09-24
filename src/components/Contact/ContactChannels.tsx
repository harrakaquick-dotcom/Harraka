import { channels } from "../../Data/Contactdata";
import Reveal from "../Home/Reveal";
import Section from "../Home/Section";

const ContactChannels = () => {
  return (
    <Section>
      <Reveal className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-card border border-line bg-line">
        {channels.map((channel) => (
          <div
            key={channel.label}
            className="bg-canvas p-[clamp(20px,2.6vw,28px)]"
          >
            <div className="font-mono text-[10px] uppercase tracking-[.13em] text-ink/45">
              {channel.label}
            </div>
            <p className="mt-2.75 wrap-break-word text-base font-semibold leading-[1.55]">
              {channel.value}
            </p>
            <p className="mt-1.5 text-sm leading-[1.55] text-ink/60">
              {channel.text}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
};

export default ContactChannels;
