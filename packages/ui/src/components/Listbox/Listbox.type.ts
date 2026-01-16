import type { ReactNode } from "react";
import type { AutoSelection } from "../../enums/auto-selection.enum.js";

export interface ListboxProps {
  /** Inner content of the listbox. */
  children: ReactNode;
  /**
   * Indicates the default active option in the list.
   * Patterns that support option creation should default the active option to the first option.
   * Defaults to AutoSelection.FirstSelected.
   */
  autoSelection?: AutoSelection;
  /** Explicitly enable keyboard control. */
  enableKeyboardControl?: boolean;
  /** Visually hidden text for screen readers. */
  accessibilityLabel?: string;
  /** Provide a custom ID for the list element. */
  customListId?: string;
  /** Callback fired when an option is selected. */
  onSelect?: (value: string) => void;
  /** Callback fired when an option becomes active. */
  onActiveOptionChange?: (value: string, domId: string) => void;
}

export interface OptionProps {
  children: ReactNode;
  /** Unique value for the option. */
  value: string;
  /** Whether the option is disabled. */
  disabled?: boolean;
  /** Whether the option is selected. */
  selected?: boolean;
  /** Optional accessibility label. */
  accessibilityLabel?: string;
  /** Whether the option is a destructive action (red text). */
  destructive?: boolean;
  /** Icon to display before the label. */
  icon?: ReactNode;
  /** Show a divider after this item. */
  divider?: boolean;
}

export interface HeaderProps {
  children: ReactNode;
  /** Show a divider after this item. */
  divider?: boolean;
}

export interface ActionProps extends OptionProps {
  /** Whether the action adds something (plus icon usually). */
  icon?: ReactNode;
  /** Show a divider after this item. */
  divider?: boolean;
}

export interface TextOptionProps {
  children: ReactNode;
  /** Muted text color? */
  color?: "subdued" | "default";
  /** Show a divider after this item. */
  divider?: boolean;
}

export interface LoadingProps {
  children?: ReactNode;
  accessibilityLabel?: string;
}
