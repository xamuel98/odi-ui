import type { ReactNode } from "react";

export interface TextFieldProps {
  /** Custom class name. */
  className?: string;
  /** Text to display before value. */
  prefix?: ReactNode;
  /** Text to display after value. */
  suffix?: ReactNode;
  /** Content to vertically display above the input value. */
  verticalContent?: ReactNode;
  /** Hint text to display. */
  placeholder?: string;
  /** Initial value for the input. */
  value?: string;
  /** Additional hint text to display. */
  helpText?: ReactNode;
  /** Label for the input. */
  label: ReactNode;
  /** Adds an action to the label. */
  labelAction?: {
    content: string;
    onAction: () => void;
  };
  /** Visually hide the label. */
  labelHidden?: boolean;
  /** Disable the input. */
  disabled?: boolean;
  /** Show a clear text button in the input. */
  clearButton?: boolean;
  /** Indicates whether or not the entire value should be selected on focus. */
  selectTextOnFocus?: boolean;
  /** An inline autocomplete suggestion. */
  suggestion?: string | undefined;
  /** Disable editing of the input. */
  readOnly?: boolean;
  /** Automatically focus the input. */
  autoFocus?: boolean;
  /** Force the focus state on the input. */
  focused?: boolean;
  /** Allow for multiple lines of input. */
  multiline?: number | boolean;
  /** Error to display beneath the label. */
  error?: string | boolean;
  /** An element connected to the right of the input. */
  connectedRight?: ReactNode;
  /** An element connected to the left of the input. */
  connectedLeft?: ReactNode;
  /** Determine type of input. */
  type?:
    | "text"
    | "email"
    | "number"
    | "integer"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local"
    | "month"
    | "time"
    | "week"
    | "currency";
  /** Name of the input. */
  name?: string;
  /** ID for the input. */
  id?: string;
  /** Defines a specific role attribute for the input. */
  role?: string;
  /** Limit increment value for numeric and date-time inputs. */
  step?: number;
  /** Increment value for numeric and date-time inputs when using Page Up or Page Down. */
  largeStep?: number;
  /** Enable automatic completion by the browser. */
  autoComplete?: string;
  /** Maximum value. */
  max?: string | number;
  /** Maximum character length. */
  maxLength?: number;
  /** Maximum height of the input element. Only applies when `multiline` is `true`. */
  maxHeight?: string | number;
  /** Minimum value. */
  min?: string | number;
  /** Minimum character length. */
  minLength?: number;
  /** Regex pattern. */
  pattern?: string;
  /** Keyboard type. */
  inputMode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  /** Spell check. */
  spellCheck?: boolean;
  /** Aria Attributes */
  ariaOwns?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaActiveDescendant?: string;
  ariaAutocomplete?: string;
  /** Display character count. */
  showCharacterCount?: boolean;
  /** Text alignment. */
  align?: "left" | "center" | "right";
  /** Visual required indicator. */
  requiredIndicator?: boolean;
  /** Sets the input as required. */
  required?: boolean;
  /** Monospaced font. */
  monospaced?: boolean;
  /** Visual styling options. */
  variant?: "inherit" | "borderless";
  /** Size of the input. */
  size?: "medium" | "slim";
  /** Tone of the text field. */
  tone?: "magic";
  /** Auto grow behavior. */
  autoSize?: boolean;
  /** Loading state. */
  loading?: boolean;

  /** Callback fired when clear button is clicked. */
  onClearButtonClick?: (id: string) => void;
  /** Callback fired when value is changed. */
  onChange?: (value: string, id: string) => void;
  /** Callback fired when value is changed via spinner. */
  onSpinnerChange?: (value: string, id: string) => void;
  /** Callback fired when input is focused. */
  onFocus?: (event?: React.FocusEvent) => void;
  /** Callback fired when input is blurred. */
  onBlur?: (event?: React.FocusEvent) => void;
}
