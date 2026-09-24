import { useState, type ChangeEvent, type ReactNode } from "react";
import { reasons } from "../../Data/Contactdata";
import "./contact.css";

const inputClass =
  "w-full min-w-0 rounded-[11px] border border-line-strong bg-canvas px-3.25 py-3 text-[15px] text-ink outline-none placeholder:text-ink/35";

const FocusRing = ({ children }: { children: ReactNode }) => (
  <div className="focus-ring -m-1.5 rounded-[17px] p-[1.5px]">
    <div className="rounded-2xl bg-surface p-1">{children}</div>
  </div>
);

const labelClass = "flex flex-col gap-1.75";
const labelTextClass =
  "font-mono text-[10px] uppercase tracking-[.11em] text-ink/50";

const initial = { name: "", contact: "", area: "", message: "" };

// Front-end only for now: "sending" just shows the confirmation state.
const ContactForm = () => {
  const [reason, setReason] = useState(0);
  const [values, setValues] = useState(initial);
  const [sent, setSent] = useState(false);

  const ready = Boolean(
    values.name.trim() && values.contact.trim() && values.message.trim(),
  );

  const field =
    (key: keyof typeof initial) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [key]: e.target.value }));
      setSent(false);
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ready) setSent(true);
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-[22px] border border-line bg-surface p-[clamp(22px,3vw,34px)]"
    >
      <h2 className="text-[clamp(22px,2.6vw,32px)] font-bold leading-[1.05] tracking-[-0.035em]">
        Send us a message
      </h2>
      <p className="mt-2.5 text-[14.5px] leading-[1.55] text-ink/60">
        Pick a reason so it lands with the right team.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {reasons.map((label, i) => (
          <button
            key={label}
            type="button"
            aria-pressed={i === reason}
            onClick={() => {
              setReason(i);
              setSent(false);
            }}
            className={`cursor-pointer rounded-pill border px-3.5 py-2 text-[12.5px] font-medium transition-colors hover:border-ink ${
              i === reason
                ? "border-ink bg-ink text-onink"
                : "border-line-strong text-ink/66"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-5.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <label className={labelClass}>
          <span className={labelTextClass}>Full name</span>
          <FocusRing>
            <input
              value={values.name}
              onChange={field("name")}
              placeholder="Achieng' Odhiambo"
              className={inputClass}
            />
          </FocusRing>
        </label>
        <label className={labelClass}>
          <span className={labelTextClass}>Email or phone</span>
          <FocusRing>
            <input
              value={values.contact}
              onChange={field("contact")}
              placeholder="you@example.co.ke"
              className={inputClass}
            />
          </FocusRing>
        </label>
      </div>

      <label className={`${labelClass} mt-3.5`}>
        <span className={labelTextClass}>Your area</span>
        <FocusRing>
          <input
            value={values.area}
            onChange={field("area")}
            placeholder="Kilimani, Nairobi"
            className={inputClass}
          />
        </FocusRing>
      </label>

      <label className={`${labelClass} mt-3.5`}>
        <span className={labelTextClass}>Message</span>
        <FocusRing>
          <textarea
            value={values.message}
            onChange={field("message")}
            rows={5}
            placeholder="What can we help with?"
            className={`${inputClass} block resize-y min-h-20`}
          />
        </FocusRing>
      </label>

      <button
        type="submit"
        disabled={!ready && !sent}
        className={`mt-4.5 w-full cursor-pointer rounded-pill px-4 py-3.75 text-[15px] font-semibold text-white transition-colors disabled:cursor-not-allowed ${
          sent
            ? "bg-secondary"
            : ready
              ? "bg-primary hover:bg-primary-dark"
              : "bg-ink/35"
        }`}
      >
        {sent
          ? "Message sent"
          : ready
            ? "Send message"
            : "Fill in name, contact and message"}
      </button>
      <p
        aria-live="polite"
        className="mt-3 text-center font-mono text-[10px] tracking-wider text-ink/45"
      >
        {sent
          ? `Thanks — reference HK-${4400 + values.message.length}. We reply the same working day.`
          : "We reply the same working day. Order issues are faster in the app."}
      </p>
    </form>
  );
};

export default ContactForm;
