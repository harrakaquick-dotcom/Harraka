import { useState, type ImgHTMLAttributes } from "react";

export const PLACEHOLDER_IMAGE = "/images/placeholder.png";

// Last resort when even the placeholder file can't load: the H mark from the
// app icon drawn inline, so it needs no network request and can't fail.
const InlineFallback = ({
  alt,
  className,
  style,
}: {
  alt: string;
  className: string;
  style?: ImgHTMLAttributes<HTMLImageElement>["style"];
}) => (
  <span
    role="img"
    aria-label={alt || undefined}
    aria-hidden={alt ? undefined : true}
    className={`grid place-items-center bg-primary-light ${className}`}
    style={style}
  >
    <svg viewBox="0 0 1024 1024" className="size-1/2 max-h-24 max-w-24">
      <rect width="1024" height="1024" rx="220" fill="var(--color-primary)" />
      <path
        d="M320 280 H449 V464 H576 V280 H705 V745 H576 V553 H449 V745 H320 Z"
        fill="#fff"
      />
      <path d="M705 280 H821 L705 396 Z" fill="var(--color-primary-dark)" />
    </svg>
  </span>
);

// <img> that falls back to the placeholder in public/images: it sits behind
// the image while it loads, and replaces it if the src is missing or fails.
// The placeholder is always fitted whole (contain) on its own tint, so the
// Harraka bag isn't cropped in wide or short slots. State is keyed by src, so
// passing a new src retries it. If the placeholder itself fails, it drops to
// <InlineFallback>.
const Img = ({
  src,
  alt = "",
  className = "",
  style,
  onLoad,
  onError,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [failedSrc, setFailedSrc] = useState<string>();
  const [loadedSrc, setLoadedSrc] = useState<string>();
  const [placeholderFailed, setPlaceholderFailed] = useState(false);

  const failed = !src || failedSrc === src;
  const loading = !failed && loadedSrc !== src;

  if (failed && placeholderFailed) {
    return <InlineFallback alt={alt} className={className} style={style} />;
  }

  return (
    <img
      {...props}
      src={failed ? PLACEHOLDER_IMAGE : src}
      alt={alt}
      className={`${failed || loading ? "bg-primary-light h-full" : ""} ${className}`}
      style={
        failed
          ? { ...style, objectFit: "contain" }
          : loading
            ? {
                ...style,
                backgroundImage: `url(${PLACEHOLDER_IMAGE})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }
            : style
      }
      onLoad={(e) => {
        setLoadedSrc(src);
        onLoad?.(e);
      }}
      onError={(e) => {
        if (failed) setPlaceholderFailed(true);
        else setFailedSrc(src);
          onError?.(e);
      }}
    />
  );
};

export default Img;
