import "./button.css";


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
