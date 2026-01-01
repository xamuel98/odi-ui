import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import type { actionListItemVariants } from "./ActionList.variants.js";

export interface ActionListItemDescriptor {
  /**
   * Visually hidden text for screen readers.
   */
  accessibilityLabel?: string;
  /**
   * Badge component.
   */
  badge?: {
    tone: "new";
    content: string;
  };
  /**
   * Additional hint text to display with item.
   */
  helpText?: ReactNode;
  /**
   * Source of the icon.
   */
  icon?: ReactNode;
  /**
   * Image source.
   */
  image?: string;
  /**
   * Prefix source.
   */
  prefix?: ReactNode;
  /**
   * Suffix source.
   */
  suffix?: ReactNode;
  /**
   * Add an ellipsis suffix to action content.
   */
  ellipsis?: boolean;
  /**
   * Truncate the action content either at the beginning or at the end.
   */
  truncate?: boolean;
  /**
   * Whether the action is active or not.
   */
  active?: boolean;
  /**
   * The item variations.
   */
  variant?: "default" | "menu" | "indented";
  /**
   * Defines a role for the action.
   */
  role?: string;
  /**
   * Whether or not the action is disabled.
   */
  disabled?: boolean;
  /**
   * A unique identifier for the action.
   */
  id?: string;
  /**
   * Content the action displays.
   */
  content?: string;
  /**
   * A destination to link to, rendered in the action.
   */
  url?: string;
  /**
   * Forces url to open in a new tab.
   */
  external?: boolean;
  /**
   * Where to display the url.
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * Callback when an action takes place.
   */
  onAction?: () => void;
  /**
   * Callback when mouse enter.
   */
  onMouseEnter?: () => void;
  /**
   * Callback when element is touched.
   */
  onTouchStart?: () => void;
  /**
   * Destructive action.
   */
  destructive?: boolean;
}

export interface ActionListSection {
  /**
   * Section title.
   */
  title?: ReactNode;
  /**
   * Collection of action items for the list.
   */
  items: readonly ActionListItemDescriptor[];
  /**
   * Defines a specific role attribute for each action in the list.
   */
  actionRole?: string | undefined;
}

export interface ActionListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof actionListItemVariants> {
  /**
   * Collection of actions for list.
   */
  items?: readonly ActionListItemDescriptor[];
  /**
   * Collection of sectioned action items.
   */
  sections?: readonly ActionListSection[];
  /**
   * Allow users to filter items in the list. Will only show if more than 8 items in the list.
   */
  allowFiltering?: boolean;
  /**
   * Filter label used as a placeholder in the search field.
   */
  filterLabel?: string;
  /**
   * Callback when any item is clicked or keypressed.
   */
  onActionAnyItem?: () => void;
  /**
   * Defines a specific role attribute for each action in the list.
   */
  actionRole?: string;
}
