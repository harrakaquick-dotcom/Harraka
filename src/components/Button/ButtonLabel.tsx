import "./button.css";

// Button text that rolls upwards on hover: a copy of the label (data-text)
// slides in from below. Styles live in button.css (.btn-label).
const ButtonLabel = ({ children }: { children: string }) => {
  return (
    <span className="btn-label">
      <span className="btn-label__text" data-text={children}>
        {children}
      </span>
    </span>
  );
};

export default ButtonLabel;
