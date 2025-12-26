import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./Button.variants.js";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Change the underlying element (e.g. to an `a` tag) using Radix UI Slot pattern.
   */
  asChild?: boolean;
  /**
   * The icon to display inside the button.
   */
  icon?: React.ReactNode;
  /**
   * The position of the icon inside the button.
   */
  iconPosition?: "start" | "end";
  /**
   * Changes the inner text alignment of the button.
   */
  textAlign?: "start" | "center" | "end" | "left" | "right";
  /**
   * Displays the button with a disclosure icon. Defaults to `down` when set to true.
   */
  disclosure?: boolean | "up" | "down" | "select";
  /**
   * Replaces button text with a spinner while a background action is being performed.
   */
  loading?: boolean;
  /**
   * Allows the button to grow to the width of its container.
   */
  fullWidth?: boolean;
}
