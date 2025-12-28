import type { VariantProps } from "class-variance-authority";
import type { progressBarVariants } from "./ProgressBar.variants.js";

export type ProgressBarTone = "highlight" | "primary" | "success" | "critical";
export type ProgressBarSize = "small" | "medium" | "large";

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  /**
   * The advancement of the progress bar, from 0 to 100.
   * @default 0
   */
  progress?: number;
  /**
   * The color tone of the progress bar.
   * @default 'highlight'
   */
  tone?: ProgressBarTone;
  /**
   * The size of the progress bar.
   * @default 'medium'
   */
  size?: ProgressBarSize;
  /**
   * Whether the fill animation is triggered.
   * @default true
   */
  animated?: boolean;
  /**
   * ID of the element that describes the progress bar.
   */
  ariaLabelledBy?: string;
  /**
   * CSS color string (hex, rgb, rgba, hsl, hsla, gradient) for custom fill.
   * Overrides the tone color if provided.
   */
  customFillColor?: string;
}
