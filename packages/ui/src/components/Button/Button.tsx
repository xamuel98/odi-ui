import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { buttonVariants } from "./Button.variants.js";
import "./Button.css";
import { CaretDown, CaretUp } from "../../icons/index.js";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";

  /* Changes the inner text alignment of the button */
  textAlign?: "start" | "center" | "end" | "left" | "right";

  /* Displays the button with a disclosure icon. Defaults to `down` when set to true */
  disclosure?: boolean | "up" | "down" | "select";

  /* Replaces button text with a spinner while a background action is being performed */
  loading?: boolean;

  /* Allows the button to grow to the width of its container */
  fullWidth?: boolean;
}

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

    return (
      <Comp
        ref={ref}
        type="button"
        className={clsx(
          buttonVariants({
            variant,
            tone,
            size,
            textAlign,
            disclosure,
            iconPosition: icon ? iconPosition : undefined,
            iconOnly: isIconOnly,
            loading,
            fullWidth,
            className,
          })
        )}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-label={
          isIconOnly && typeof props["aria-label"] === "string"
            ? props["aria-label"]
            : undefined
        }
        {...props}
      >
        {loading ? null : (
          <>
            {icon && iconPosition === "start" && (
              <span className="odi-button__icon">{icon}</span>
            )}

            {children && <span className="odi-button__label">{children}</span>}

            {icon && iconPosition === "end" && (
              <span className="odi-button__icon">{icon}</span>
            )}

            {disclosure && (
              <span className="odi-button__chevron">
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
