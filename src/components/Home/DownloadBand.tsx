import LinkButton from "../Button/LinkButton";
import Img from "../Image/Img";
import Reveal from "./Reveal";
import Section from "./Section";

// Placeholder QR block — replace with the real install QR code.
const QrPlaceholder = () => (
  <div className="flex size-37 items-end rounded-[18px] bg-surface bg-[repeating-linear-gradient(45deg,rgb(23_18_15/0.1)_0_4px,transparent_4px_10px)] p-2.5">
    {/* here the Qr code goes */}
    <Img src="/icons/harraka_ap_icon.png" className="relative" alt="" />
    <span className="rounded-[3px] bg-surface px-1.25 py-0.75 font-mono text-[9px] uppercase tracking-[.06em] text-ink/50 absolute">
      QR code
    </span>
  </div>
);

const DownloadBand = () => {
  return (
    <Section
      id="download"
      tone="primary"
      bordered={false}
      innerClassName="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] items-center gap-[clamp(24px,4vw,48px)]"
    >
      <Reveal>
        <h2 className="max-w-[18ch] text-[clamp(32px,5vw,64px)] font-extrabold leading-[.96] tracking-[-0.045em]">
          Put the duka in your pocket.
        </h2>
        <p className="mt-5 max-w-[42ch] text-[clamp(16px,1.3vw,19px)] leading-normal text-white/88">
          Free delivery on your first three orders. No subscription, no minimum,
          no surge.
        </p>
        <div className="mt-7.5 flex flex-wrap gap-3">
          <LinkButton href="#top" variant="store-dark" size="lg">
            App Store
          </LinkButton>
          <LinkButton href="#top" variant="store-glass" size="lg">
            Google Play
          </LinkButton>
        </div>
      </Reveal>

      <Reveal className="flex flex-wrap items-center justify-end gap-3.5">
        <QrPlaceholder />
        <div className="font-mono text-[11.5px] leading-[1.7] text-white/90">
          Scan to install
          <br />
          Android 8+ · iOS 15+
          <br />
          34 MB
        </div>
      </Reveal>
    </Section>
  );
};

export default DownloadBand;
