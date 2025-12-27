import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { bannerVariants } from "./Banner.variants.js";

export type BannerTone = "success" | "info" | "warning" | "critical";

export interface Action {
  id?: string;
  content?: string;
  accessibilityLabel?: string;
  url?: string;
  external?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onAction?: () => void;
  onMouseEnter?: () => void;
  onTouchStart?: () => void;
}

export interface DisableableAction extends Action {
  disabled?: boolean;
}

export interface LoadableAction extends Action {
  loading?: boolean;
}

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  /**
   * Title content for the banner.
   */
  title?: string;
  /**
   * Status icon to display in the banner.
   */
  icon?: ReactNode;
  /**
   * Renders the banner without a status icon.
   */
  hideIcon?: boolean;
  /**
   * Sets the status of the banner.
   * @default 'info'
   */
  tone?: BannerTone;
  /**
   * Hides the banner title and renders content inline with the icon.
   */
  hideTitle?: boolean;
  /**
   * The child elements to render in the banner.
   */
  children?: ReactNode;
  /**
   * Action for banner (Primary).
   */
  action?: DisableableAction & LoadableAction;
  /**
   * Displays a secondary action.
   */
  secondaryAction?: Action;
  /**
   * Callback when banner is dismissed.
   */
  onDismiss?: () => void;
  /**
   * Disables screen reader announcements when changing the content of the banner.
   */
  stopAnnouncements?: boolean;
}
