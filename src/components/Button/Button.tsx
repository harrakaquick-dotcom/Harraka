import './button.css';

const Button = () => {
  return (
    <button className="btn-wipe mr-3 px-5 py-2 rounded-pill border border-ink text-ink cursor-pointer">
      <span className="btn-wipe__label">
        <span className="btn-wipe__text" data-text="Bucket">Bucket</span>
      </span>
    </button>
  )
}

export default Button;