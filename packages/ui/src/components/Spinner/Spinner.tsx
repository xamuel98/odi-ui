import clsx from "clsx";
import { spinnerVariants } from "./Spinner.variants.js";
import type { SpinnerProps } from "./Spinner.type.js";
import "./Spinner.css";

export const Spinner = ({
  type = "ring",
  size = "large",
  accessibilityLabel,
  hasFocusableParent = false,
  className,
  ...props
}: SpinnerProps) => {
  const classes = clsx(spinnerVariants({ size }), className);

  const role = hasFocusableParent ? "presentation" : "status";
  const label = accessibilityLabel || "Loading";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      role={role}
      aria-label={hasFocusableParent ? undefined : label}
      aria-hidden={hasFocusableParent}
      focusable={hasFocusableParent ? "false" : undefined}
      {...props}
    >
      {/* Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE */}
      {type === "ring-with-bg" && (
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
        />
      )}
      <path
        fill="currentColor"
        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
      >
        <animateTransform
          attributeName="transform"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </path>
    </svg>
  );
};

export default Spinner;
