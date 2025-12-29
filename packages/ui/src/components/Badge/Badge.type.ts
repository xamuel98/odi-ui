import type { VariantProps } from "class-variance-authority";
import type { badgeVariants } from "./Badge.variants.js";
import type { ReactNode } from "react";

export type BadgeTone =
  | "default"
  | "info"
  | "success"
  | "attention"
  | "warning"
  | "critical";

export type BadgeProgress = "incomplete" | "partiallyComplete" | "complete";

interface BaseBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * The content to display inside the badge.
   */
  children?: ReactNode;
  /**
   * Colors and labels the badge with the given tone.
   * @default 'default'
   */
  tone?: BadgeTone;
  /**
   * Defaults to 'medium'.
   */
  size?: "medium" | "small" | undefined;
  /**
   * Pass a custom accessibilityLabel.
   */
  toneAndProgressLabelOverride?: string;
}

interface ProgressBadgeProps extends BaseBadgeProps {
  /**
   * Render a pip showing the progress of a given task.
   */
  progress?: BadgeProgress;
  /**
   * Icon is not allowed when progress is set.
   */
  icon?: undefined;
}

interface IconBadgeProps extends BaseBadgeProps {
  /**
   * Icon to display to the left of the badge’s content.
   */
  icon?: React.ReactNode;
  /**
   * Progress is not allowed when icon is set.
   */
  progress?: undefined;
}

export type BadgeProps = ProgressBadgeProps | IconBadgeProps;
