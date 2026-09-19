import ButtonLabel from "./ButtonLabel";

const Button = () => {
  return (
    <button className="btn-wipe cursor-pointer rounded-pill border border-ink px-5 py-2 text-ink">
      <ButtonLabel>Bucket</ButtonLabel>
    </button>
  );
};

export default Button;
