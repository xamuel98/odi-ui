import * as React from "react";
import clsx from "clsx";
import type { BadgeProps, BadgeProgress } from "./Badge.type.js";
import { badgeVariants } from "./Badge.variants.js";
import "./Badge.css";

const getPipClass = (progress: BadgeProgress) => {
  switch (progress) {
    case "partiallyComplete":
      return "odi-badge__pip--partiallyComplete";
    case "complete":
      return "odi-badge__pip--complete";
    case "incomplete":
    default:
      return "odi-badge__pip--incomplete";
  }
};

const getProgressLabel = (progress: BadgeProgress, tone: string) => {
  // Simple accessible label generation
  return `${tone} ${progress.replace(/([A-Z])/g, " $1").toLowerCase()}`;
};

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      className,
      tone = "default",
      size = "small",
      icon,
      progress,
      toneAndProgressLabelOverride,
      ...props
    },
    ref
  ) => {
    // Accessibility label logic
    const ariaLabel =
      toneAndProgressLabelOverride ??
      (progress ? getProgressLabel(progress, tone) : undefined);
    const classes = clsx(
      badgeVariants({ tone, size, className }),
      icon && "odi-badge--has-icon"
    );

    return (
      <span
        ref={ref}
        className={classes}
        {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
        {...props}
      >
        {icon && <span className="odi-badge__icon">{icon}</span>}
        {progress && (
          <span className={clsx("odi-badge__pip", getPipClass(progress))} />
        )}
        {children && <span className="odi-badge__label">{children}</span>}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
