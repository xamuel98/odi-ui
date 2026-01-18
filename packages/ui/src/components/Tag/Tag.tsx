import React from "react";
import { clsx } from "clsx";
import type { TagProps } from "./Tag.type.js";
import { tagVariants } from "./Tag.variants.js";
import "./Tag.css";

export const Tag = ({
  children,
  disabled,
  onClick,
  onRemove,
  accessibilityLabel,
  url,
  size,
  tone,
}: TagProps) => {
  const isClickable = Boolean(onClick);
  const isLink = Boolean(url);
  const isRemovable = Boolean(onRemove);

  const Component =
    isLink && !disabled ? "a" : isClickable && !disabled ? "button" : "span";

  const className = clsx(
    tagVariants({
      clickable: isClickable,
      removable: isRemovable,
      url: isLink,
      disabled,
      size,
      tone,
    })
  );

  const commonProps = {
    className,
    "aria-label": accessibilityLabel,
    "aria-disabled": disabled ? true : undefined,
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  const content = (
    <>
      <span>{children}</span>
      {onRemove && (
        <button
          type="button"
          className="odi-tag__remove-button"
          onClick={handleRemove}
          aria-label={`Remove ${children}`}
          tabIndex={isLink || isClickable ? 0 : 0} // Ensure reachable
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              d="M6.71967 7.78033C7.01256 8.07322 7.48744 8.07322 7.78033 7.78033C8.07322 7.48744 8.07322 7.01256 7.78033 6.71967L5.06066 4L7.78033 1.28033C8.07322 0.987437 8.07322 0.512563 7.78033 0.21967C7.48744 -0.073223 7.01256 -0.073223 6.71967 0.21967L4 2.93934L1.28033 0.21967C0.987437 -0.0732233 0.512564 -0.0732233 0.21967 0.21967C-0.0732225 0.512563 -0.0732226 0.987437 0.21967 1.28033L2.93934 4L0.21967 6.71967C-0.0732233 7.01256 -0.0732233 7.48744 0.21967 7.78033C0.512563 8.07322 0.987437 8.07322 1.28033 7.78033L4 5.06066L6.71967 7.78033Z"
              fill="#303030"
            />
          </svg>
        </button>
      )}
    </>
  );

  return (
    <Component
      {...commonProps}
      href={Component === "a" && url ? url : undefined}
      type={Component === "button" ? "button" : undefined}
      onClick={Component === "button" ? onClick : undefined}
    >
      {content}
    </Component>
  );
};
