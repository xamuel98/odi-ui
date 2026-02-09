import type { ReactNode } from "react";

export interface Item {
  /**
   * Set the color of the icon and title for the given item.
   */
  status?: "warning" | "critical";
  /**
   * Icon displayed by the list item.
   */
  icon?: ReactNode;
  /**
   * Text displayed beside the icon.
   */
  title?: string;
  /**
   * Text displayed for the item.
   */
  description?: ReactNode;
  /**
   * Truncate long text.
   */
  truncate?: boolean;
}

export interface ExceptionListProps {
  /**
   * Collection of items for list.
   */
  items: Item[];
}
