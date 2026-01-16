import type { ReactNode } from "react";
import type {
  DisableableAction,
  ResourceItemProps,
  MenuGroupDescriptor,
} from "../ResourceItem/ResourceItem.type.js";

// Re-export specific types if needed by consumers
export type { DisableableAction };

export interface ActionListItemDescriptor extends DisableableAction {
  badge?: { tone: "new"; content: string };
  helpText?: ReactNode;
  icon?: any;
  image?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  truncate?: boolean;
  active?: boolean;
  variant?: "default" | "menu" | "indented";
  role?: string;
  destructive?: boolean;
}

export interface ActionListSection {
  title?: any;
  items: readonly ActionListItemDescriptor[];
}

export interface BulkAction extends DisableableAction {
  // Bulk actions might have specific additional properties in some implementations
  icon?: any;
  tooltip?: ReactNode;
  destructive?: boolean;
}

export interface StrictOption {
  value: string;
  label: string;
  disabled?: boolean;
  prefix?: ReactNode;
  key?: string;
}

export interface AccessibilityLabels {
  previous: string;
  next: string;
}

export interface PaginationProps {
  nextKeys?: string[];
  previousKeys?: string[];
  nextTooltip?: string;
  previousTooltip?: string;
  nextURL?: string;
  previousURL?: string;
  hasNext?: boolean;
  hasPrevious?: boolean;
  accessibilityLabel?: string;
  accessibilityLabels?: AccessibilityLabels;
  onNext?: () => void;
  onPrevious?: () => void;
  label?: ReactNode;
  type?: "table" | "page";
}

export interface ResourceListProps<TItemType = any> {
  /** Item data; each item is passed to renderItem. */
  items: TItemType[];
  /** Filter control component. */
  filterControl?: ReactNode;
  /** Whether to remove all padding around the filter controls. */
  flushFilters?: boolean;
  /** The markup to display when no resources exist yet. */
  emptyState?: ReactNode;
  /** The markup to display when no results are returned on search or filter of the list. */
  emptySearchState?: ReactNode;
  /** Name of the resource, such as customers or products. */
  resourceName?: { singular: string; plural: string };
  /** Up to 2 bulk actions that will be given more prominence. */
  promotedBulkActions?: (MenuGroupDescriptor | BulkAction)[];
  /** Actions available on the currently selected items. */
  bulkActions?: (ActionListSection | BulkAction)[];
  /** Collection of IDs for the currently selected items. */
  selectedItems?: string[] | "All";
  /** Whether or not the list has filter(s) applied. */
  isFiltered?: boolean;
  /** Renders a Select All button at the top of the list and checkboxes in front of each list item. */
  selectable?: boolean;
  /** Whether or not there are more items than currently set on the items prop. */
  hasMoreItems?: boolean;
  /** Overlays item list with a spinner while a background action is being performed. */
  loading?: boolean;
  /** Boolean to show or hide the header. */
  showHeader?: boolean;
  /** Total number of resources. */
  totalItemsCount?: number;
  /** Current value of the sort control. */
  sortValue?: string;
  /** Collection of sort options to choose from. */
  sortOptions?: string | StrictOption[];
  /** ReactNode to display instead of the sort control. */
  alternateTool?: ReactNode;
  /** Custom header text displayed above the list instead of the resource count. */
  headerContent?: string;
  /** Callback when sort option is changed. */
  onSortChange?: (selected: string, id: string) => void;
  /** Callback when selection is changed. */
  onSelectionChange?: (selectedItems: string[] | "All") => void;
  /** Function to render each list item. */
  renderItem: (item: TItemType, id: string, index: number) => ReactNode;
  /** Function to customize the unique ID for each item. */
  idForItem?: (item: TItemType, index: number) => string;
  /** Function to resolve the ids of items. */
  resolveItemId?: (item: TItemType) => string;
  /** Properties to enable pagination at the bottom of the list. */
  pagination?: Omit<PaginationProps, "type">;
}
