import type { ReactElement, ReactNode } from "react";
import type { ThumbnailProps } from "../Thumbnail/Thumbnail.type.js";
import type { AvatarProps } from "../Avatar/Avatar.type.js";
import type { ActionListItemDescriptor } from "../ActionList/ActionList.type.js";

export interface DisableableAction {
  /** Whether or not the action is disabled. */
  disabled?: boolean;
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
}

interface BaseResourceItemProps {
  /** Individual item name used by various text labels. */
  name?: string;
  /** Visually hidden text for screen readers used for item link. */
  accessibilityLabel?: string;
  /** Id of the element the item onClick controls. */
  ariaControls?: string;
  /** Tells screen reader the controlled element is expanded. */
  ariaExpanded?: boolean;
  /** Unique identifier for the item. */
  id: string;
  /** Content for the media area at the left of the item, usually an Avatar or Thumbnail. */
  media?: ReactElement<ThumbnailProps | AvatarProps>;
  /** Makes the shortcut actions always visible. */
  persistActions?: boolean;
  /** 1 or 2 shortcut actions; must be available on the page linked to by url. */
  shortcutActions?: (DisableableAction | MenuGroupDescriptor)[];
  /** The order the item is rendered. */
  sortOrder?: number;
  /** Adjust vertical alignment of elements. */
  verticalAlignment?: "leading" | "trailing" | "center" | "fill" | "baseline";
  /** Prefetched url attribute to bind to the main element being returned. */
  dataHref?: string;
  /** Callback when mouse cursor is on item. */
  onMouseOver?: () => void;
  /** Callback when mouse cursor leaves item. */
  onMouseOut?: () => void;
  /** Content for the details area. */
  children?: ReactNode;
  /** Whether or not interaction is disabled. */
  disabled?: boolean;
  /** Allows url to open in a new tab. */
  external?: boolean;
}

export interface PropsWithUrl extends BaseResourceItemProps {
  /** URL for the resource’s details page. */
  url: string;
  /** Callback when clicked. */
  onClick?: (id?: string) => void;
}

export interface PropsWithClick extends BaseResourceItemProps {
  /** URL for the resource’s details page. */
  url?: never;
  /** Callback when clicked. */
  onClick: (id?: string) => void;
}

export type ResourceItemProps = PropsWithUrl | PropsWithClick;

export interface MenuGroupDescriptor {
  title: string;
  actions: ActionListItemDescriptor[];
  icon?: any;
  details?: ReactNode;
  disabled?: boolean;
  index?: number;
  onActionAnyItem?: () => void;
  onClick?: (openActions: () => void) => void;
  badge?: { tone: "new"; content: string };
  accessibilityLabel?: string;
  tooltip?: ReactNode;
  destructive?: boolean;
}
