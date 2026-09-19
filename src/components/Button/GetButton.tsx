import './button.css';

const GetButton = () => {
  return (
    <button className="btn-fancy px-5 py-2 rounded-pill bg-ink text-surface-2 cursor-pointer">
      <span className="btn-fancy__label">
        <span className="btn-fancy__text" data-text="Get the app">Get the app</span>
      </span>
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
  )
}

export default GetButton;