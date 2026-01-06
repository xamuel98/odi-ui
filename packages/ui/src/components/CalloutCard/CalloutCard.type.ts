import type { ReactNode } from "react";
import type { ButtonProps } from "../Button/index.js";
import type { LinkTarget } from "../Link/Link.type.js";

export interface IconableAction {
  /** Source of the icon. */
  icon?: ReactNode;
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
  target?: LinkTarget;
  /** Callback when an action takes place. */
  onAction?: () => void;
  /** Callback when mouse enter. */
  onMouseEnter?: () => void;
  /** Callback when element is touched. */
  onTouchStart?: () => void;
}

export interface CalloutCardProps {
  /** The content to display inside the callout card. */
  children?: ReactNode;
  /** The title of the card. */
  title: ReactNode;
  /** Svg component or URL to the card illustration. */
  illustration: ReactNode | string;
  /** Primary action for the card. */
  primaryAction: IconableAction;
  /** Secondary action for the card. */
  secondaryAction?: IconableAction & Pick<ButtonProps, "variant">;
  /** Callback when banner is dismissed. */
  onDismiss?: () => void;
}
