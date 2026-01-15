import type { ReactNode } from "react";
import type { ResponsiveProp } from "../../tokens/breakpoints.type.js";
import type { SpaceScale } from "../../tokens/space.type.js";

export interface CheckboxProps {
  /** Indicates the ID of the element that is controlled by the checkbox. */
  ariaControls?: string;
  /** Indicates the ID of the element that describes the checkbox. */
  ariaDescribedBy?: string;
  /** Label for the checkbox. */
  label: ReactNode;
  /** Visually hide the label. */
  labelHidden?: boolean;
  /** Checkbox is selected. `indeterminate` shows a horizontal line in the checkbox. */
  checked?: boolean | "indeterminate";
  /** Disable input. */
  disabled?: boolean;
  /** ID for form input. */
  id?: string;
  /** Name for form input. */
  name?: string;
  /** Value for form input. */
  value?: string;
  /** Callback when checkbox is toggled. */
  onChange?: (newChecked: boolean, id: string) => void;
  /** Callback when checkbox is focused. */
  onFocus?: () => void;
  /** Callback when focus is removed. */
  onBlur?: () => void;
  /** Added to the wrapping label. */
  labelClassName?: string;
  /** Grow to fill the space. Equivalent to width: 100%; height: 100%. */
  fill?: ResponsiveProp<boolean>;
  /** Additional text to aide in use. */
  helpText?: ReactNode;
  /** Display an error message. */
  error?: boolean | string;
  /** Indicates the tone of the checkbox. */
  tone?: "magic" | undefined;
  /** Spacing around children. */
  bleed?: ResponsiveProp<SpaceScale>;
  /** Vertical start spacing around children. */
  bleedBlockStart?: ResponsiveProp<SpaceScale>;
  /** Vertical end spacing around children. */
  bleedBlockEnd?: ResponsiveProp<SpaceScale>;
  /** Horizontal start spacing around children. */
  bleedInlineStart?: ResponsiveProp<SpaceScale>;
  /** Horizontal end spacing around children. */
  bleedInlineEnd?: ResponsiveProp<SpaceScale>;
}
