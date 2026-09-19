import ButtonLabel from "./ButtonLabel";

const GetButton = () => {
  return (
    <button className="btn-fancy cursor-pointer rounded-pill bg-ink px-5 py-2 text-surface-2">
      <ButtonLabel>Get the app</ButtonLabel>
      <svg
        className="btn-fancy__arrow shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
};

export default GetButton;
