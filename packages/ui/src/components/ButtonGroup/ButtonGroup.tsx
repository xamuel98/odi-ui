import * as React from "react";
import clsx from "clsx";
import type { ButtonGroupProps } from "./ButtonGroup.type.js";
import { buttonGroupVariants } from "./ButtonGroup.variants.js";
import "./ButtonGroup.css";

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      className,
      variant,
      gap,
      fullWidth,
      connectedTop,
      noWrap,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          buttonGroupVariants({
            variant,
            gap: variant === "segmented" ? undefined : gap, // Segmented overrides gap
            fullWidth,
            connectedTop,
            noWrap,
            className,
          })
        )}
        role="group"
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup, buttonGroupVariants };
