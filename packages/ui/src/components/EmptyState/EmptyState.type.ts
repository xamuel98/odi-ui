import type { ReactNode } from "react";

export interface ComplexAction {
  /** A unique identifier for the action. */
  id?: string;
  /** Content the action displays. */
  content?: string;
  /** Visually hidden text for screen readers. */
  accessibilityLabel?: string;
  /** A destination to link to, rendered in the action. */
  url?: string;
  /** Forces url to open in a new tab. */
  external?: boolean;
  /** Where to display the url. */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /** Callback when an action takes place. */
  onAction?: () => void;
  /** Callback when mouse enter. */
  onMouseEnter?: () => void;
  /** Callback when element is touched. */
  onTouchStart?: () => void;
  /** Whether or not the action is disabled. */
  disabled?: boolean;
  /** Destructive action. */
  destructive?: boolean;
  /** Source of the icon. */
  icon?: any;
  /** Should action be displayed as an outlined button. */
  outline?: boolean;
  /** Should a spinner be displayed. */
  loading?: boolean;
  /** Should action be displayed as a plain link. */
  plain?: boolean;
}

export interface EmptyStateProps {
  /** The empty state heading. */
  heading?: string;
  /** The path to the image to display. The image should have ~40px of white space above when empty state is used within a card, modal, or navigation component. */
  image: string;
  /** The path to the image to display on large screens. */
  largeImage?: string;
  /** Whether or not to limit the image to the size of its container on large screens. */
  imageContained?: boolean;
  /** Whether or not the content should span the full width of its container. */
  fullWidth?: boolean;
  /** Elements to display inside empty state. */
  children?: ReactNode;
  /** Primary action for empty state. */
  action?: ComplexAction;
  /** Secondary action for empty state. */
  secondaryAction?: ComplexAction;
  /** Secondary elements to display below empty state actions. */
  footerContent?: ReactNode;
}
