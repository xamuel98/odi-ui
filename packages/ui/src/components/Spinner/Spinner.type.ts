import type { SVGProps } from "react";

export interface SpinnerProps extends SVGProps<SVGSVGElement> {
  /**
   * Type of the spinner.
   * @default 'ring'
   */
  type?: "ring" | "ring-with-bg";
  /**
   * Size of the spinner.
   * @default 'large'
   */
  size?: "small" | "large";
  /**
   * Accessible label for the spinner.
   */
  accessibilityLabel?: string;
  /**
   * Allows the component to apply the correct accessibility roles based on focus.
   * If true, the spinner acts as a presentational element within a focusable parent.
   */
  hasFocusableParent?: boolean;
  className?: string;
}
