import type { ReactNode, ReactElement } from "react";
import type { SpaceScale } from "../../tokens/index.js";

export type TooltipPosition = "above" | "below" | "mostSpace" | "cover";

export interface TooltipProps {
  /** The element that will activate to tooltip. */
  children: ReactElement;
  /** The content to display within the tooltip. */
  content: ReactNode;
  /** Toggle whether the tooltip is visible. */
  active?: boolean;
  /** Delay in milliseconds while hovering over an element before the tooltip is visible. */
  hoverDelay?: number;
  /** Dismiss tooltip when not interacting with its children. */
  dismissOnMouseOut?: boolean;
  /** The direction the tooltip tries to display. Defaults to 'above'. */
  preferredPosition?: TooltipPosition;
  /** The element type to wrap the activator in. Defaults to 'span'. */
  activatorWrapper?: string;
  /** Visually hidden text for screen readers. */
  accessibilityLabel?: string;
  /** Width of content. Defaults to 'default'. */
  width?: "default" | "wide";
  /** Padding of content. Defaults to 'default'. */
  padding?: "default" | Extract<SpaceScale, "400">;
  /** Border radius of the tooltip. Defaults to '200'. */
  borderRadius?: "100" | "200";
  /** Override on the default z-index of 400. */
  zIndexOverride?: number;
  /** Whether to render a dotted underline underneath the tooltip's activator. */
  hasUnderline?: boolean;
  /** Whether the tooltip's content remains open after clicking the activator. */
  persistOnClick?: boolean;
  /** Callback when open */
  onOpen?: () => void;
  /** Callback when closed */
  onClose?: () => void;
}
