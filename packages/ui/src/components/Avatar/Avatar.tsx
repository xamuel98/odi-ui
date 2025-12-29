import * as React from "react";
import clsx from "clsx";
import type { AvatarProps } from "./Avatar.type.js";
import { avatarVariants } from "./Avatar.variants.js";
import { PersonIcon } from "../../icons/index.js";
import "./Avatar.css";

import { getInitials, getStyleIndex } from "../../utils/index.js";

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      className,
      size = "md",
      shape = "square",
      name,
      initials,
      customer,
      source,
      onError,
      accessibilityLabel,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = React.useState(false);

    // Reset error state if source changes
    React.useEffect(() => {
      setHasError(false);
    }, [source]);

    const handleError = () => {
      setHasError(true);
      if (onError) onError();
    };

    const shouldShowImage = source && !hasError;
    const finalInitials = initials || getInitials(name);

    // Determine style based on name (if not showing image)
    const styleIndex = !shouldShowImage
      ? getStyleIndex(name || (customer ? "Customer" : ""))
      : undefined;

    const classes = clsx(
      avatarVariants({ size, shape, className }),
      !shouldShowImage && styleIndex && `odi-avatar--style-${styleIndex}`
    );

    const label =
      accessibilityLabel || name || (customer ? "Customer" : "Avatar");

    return (
      <span
        ref={ref}
        className={classes}
        role="img"
        aria-label={label}
        {...props}
      >
        {shouldShowImage ? (
          <img src={source} alt={label} onError={handleError} />
        ) : (
          <span className="odi-avatar__content">
            {finalInitials ? (
              <span className="odi-avatar__initials">{finalInitials}</span>
            ) : customer ? (
              // Customer Icon Fallback (Simple SVG)
              <PersonIcon />
            ) : null}
          </span>
        )}
      </span>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
