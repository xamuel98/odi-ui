import * as React from "react";
import clsx from "clsx";
import { progressBarVariants } from "./ProgressBar.variants.js";
import type { ProgressBarProps } from "./ProgressBar.type.js";
import "./ProgressBar.css";

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      progress = 0,
      tone = "highlight",
      size = "medium",
      animated = true,
      ariaLabelledBy,
      customFillColor,
      className,
      ...props
    },
    ref
  ) => {
    // Clamp progress between 0 and 100
    const value = Math.min(Math.max(progress, 0), 100);

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby={ariaLabelledBy}
        className={clsx(progressBarVariants({ tone, size, className }))}
        {...props}
      >
        <div
          className={clsx(
            "odi-progress-bar__fill",
            !animated && "odi-progress-bar__fill--no-animation"
          )}
          style={{
            width: `${value}%`,
            ...(customFillColor ? { background: customFillColor } : {}),
          }}
        />
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";

export { ProgressBar, progressBarVariants };
