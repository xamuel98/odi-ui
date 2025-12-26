import type { VariantProps } from "class-variance-authority";
import type { buttonGroupVariants } from "./ButtonGroup.variants.js";
import type { ReactNode } from "react";

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  /**
   * The buttons to display in the group.
   */
  children: ReactNode;
  /**
   * Determines the space between button group items.
   * @default 'tight'
   */
  gap?: "extraTight" | "tight" | "loose";
  /**
   * Styling variant for group.
   */
  variant?: "segmented";
  /**
   * Buttons will stretch/shrink to occupy the full width.
   */
  fullWidth?: boolean;
  /**
   * Remove top left and right border radius.
   */
  connectedTop?: boolean;
  /**
   * Prevent buttons in button group from wrapping to next line.
   */
  noWrap?: boolean;
}
