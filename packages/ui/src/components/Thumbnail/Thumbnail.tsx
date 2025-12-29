import * as React from "react";
import clsx from "clsx";
import type { ThumbnailProps } from "./Thumbnail.type.js";
import { thumbnailVariants } from "./Thumbnail.variants.js";
import { ImageIcon } from "../../icons/index.js";
import "./Thumbnail.css";

const Thumbnail = React.forwardRef<HTMLSpanElement, ThumbnailProps>(
  ({ className, size = "medium", source, alt, transparent, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
      setHasError(false);
    }, [source]);

    const handleError = () => {
      setHasError(true);
    };

    const isSourceString = typeof source === "string";
    const shouldShowImage = isSourceString && !hasError;

    const classes = clsx(
      thumbnailVariants({ size, className }),
      transparent && "odi-thumbnail--transparent"
    );

    return (
      <span ref={ref} className={classes} {...props}>
        {shouldShowImage ? (
          <img src={source as string} alt={alt} onError={handleError} />
        ) : hasError || isSourceString ? (
          <span className="odi-thumbnail__icon">
            <ImageIcon />
          </span>
        ) : (
          <span className="odi-thumbnail__icon">{source}</span>
        )}
      </span>
    );
  }
);

Thumbnail.displayName = "Thumbnail";

export { Thumbnail, thumbnailVariants };
