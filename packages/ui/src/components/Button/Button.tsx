import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import type { ButtonProps } from "./Button.type.js";
import { buttonVariants } from "./Button.variants.js";
import { CaretDown, CaretUp } from "../../icons/index.js";
import "./Button.css";
import { Spinner } from "../Spinner/index.js";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      tone,
      size,
      icon,
      iconPosition = "start",
      textAlign,
      disclosure = false,
      loading,
      asChild = false,
      iconOnly,
      fullWidth,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isIconOnly = iconOnly ?? (!children && !!icon);
    const isDisabled = disabled || loading;
    const Comp = asChild ? Slot : "button";

    const classes = clsx(
      buttonVariants({
        variant,
        tone,
        size,
        textAlign,
        disclosure: disclosure ? true : undefined,
        iconPosition: icon && !isIconOnly ? iconPosition : undefined,
        iconOnly: isIconOnly,
        loading,
        fullWidth,
        className,
      })
    );

    return (
      <Comp
        ref={ref}
        type="button"
        className={classes}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-label={
          isIconOnly && typeof props["aria-label"] === "string"
            ? props["aria-label"]
            : undefined
        }
        {...props}
      >
        {loading ? (
          <Spinner
            size="small"
            accessibilityLabel="Loading"
            hasFocusableParent={false}
          />
        ) : (
          <>
            {icon && iconPosition === "start" && (
              <span className="odi-button__icon">{icon}</span>
            )}

            {children && <span className="odi-button__label">{children}</span>}

            {icon && iconPosition === "end" && (
              <span className="odi-button__icon">{icon}</span>
            )}

            {disclosure && (
              <span className="odi-button__icon">
                {disclosure === "up" ? <CaretUp /> : <CaretDown />}
              </span>
            )}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
