import { Link } from "react-router-dom";
import { address, email_address, phone_number } from "../Data/Appdata";
import { footerColumns } from "../Data/navigation";

const Footer = () => {
  return (
    <footer className="bg-ink font-display text-onink-66">
      <div className="mx-auto max-w-7xl px-[clamp(16px,4vw,44px)] py-[clamp(34px,4vw,60px)]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 sm:gap-7 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link to="/">
              <img
                src="./icons/harraka_logo_with_white_text.png"
                alt="Harraka"
                width={130}
              />
            </Link>
            <p className="mt-3.5 max-w-[28ch] text-[13.5px] leading-[1.6]">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-3 font-mono text-[11.5px] leading-[1.7]">
              {email_address}
              <br />
              {phone_number}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.title}
              className={
                column.title === "Legal" ? "col-span-2 sm:col-span-1" : ""
              }
            >
              <div className="font-mono text-[10px] uppercase tracking-[.13em] text-onink/40">
                {column.title}
              </div>
              <ul className="mt-3.25 flex flex-col gap-3 text-[13.5px] sm:gap-2.25">
                {column.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-onink/62 transition-colors hover:text-onink"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-onink/14 pt-5 font-mono text-[10.5px] tracking-wider text-onink/40 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-3">
          <span>© 2026 Harraka Retail Kenya Ltd. All rights reserved.</span>
          <span>Prices in Kenyan shillings, VAT inclusive.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
