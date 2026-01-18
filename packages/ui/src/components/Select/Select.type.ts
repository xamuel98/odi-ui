import React from "react";

export interface StrictOption {
  /**
   * Machine value of the option; this is the value passed to `onChange`.
   */
  value: string;
  /**
   * Human-readable text for the option.
   */
  label: string;
  /**
   * Option will be visible, but not selectable.
   */
  disabled?: boolean;
  /**
   * Element to display to the left of the option label. Does not show in the dropdown.
   */
  prefix?: React.ReactNode;
  /**
   * Unique key applied to the option element. Defaults to option value prop when undefined.
   */
  key?: string;
}

export interface SelectGroup {
  /**
   * Title of the option group.
   */
  title: string;
  /**
   * Options within the group.
   */
  options: (string | StrictOption)[];
}

export interface Action {
  content: string;
  onAction: () => void;
}

export interface SelectProps {
  /**
   * List of options or option groups to choose from.
   */
  options?: ((string | StrictOption) | SelectGroup)[];
  /**
   * Label for the select.
   */
  label: React.ReactNode;
  /**
   * Adds an action to the label.
   */
  labelAction?: Action;
  /**
   * Visually hide the label.
   */
  labelHidden?: boolean;
  /**
   * Show the label to the left of the value, inside the control.
   */
  labelInline?: boolean;
  /**
   * Disable input.
   */
  disabled?: boolean;
  /**
   * Additional text to aide in use.
   */
  helpText?: React.ReactNode;
  /**
   * Example text to display as placeholder.
   */
  placeholder?: string;
  /**
   * ID for form input.
   */
  id?: string;
  /**
   * Name for form input.
   */
  name?: string;
  /**
   * Value for form input.
   */
  value?: string;
  /**
   * Make the select read-only.
   */
  readOnly?: boolean;
  /**
   * Display an error state.
   */
  error?: any;
  /**
   * Callback when selection is changed.
   */
  onChange?: (selected: string, id: string) => void;
  /**
   * Callback when select is focused.
   */
  onFocus?: (event?: React.FocusEvent<HTMLSelectElement>) => void;
  /**
   * Callback when focus is removed.
   */
  onBlur?: (event?: React.FocusEvent<HTMLSelectElement>) => void;
  /**
   * Visual required indicator, add an asterisk to label.
   */
  requiredIndicator?: boolean;
  /**
   * Indicates the tone of the select.
   */
  tone?: "magic";
}
