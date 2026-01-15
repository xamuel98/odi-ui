import type { ReactNode } from "react";
import type { ResponsiveProp } from "../../tokens/breakpoints.type.js";
import type { SpaceScale } from "../../tokens/space.type.js";

export interface RadioButtonProps {
  /** Indicates the ID of the element that describes the radio button. */
  ariaDescribedBy?: string;
  /** Label for the radio button. */
  label: ReactNode;
  /** Visually hide the label. */
  labelHidden?: boolean;
  /** Radio button is selected. */
  checked?: boolean;
  /** Disable input. */
  disabled?: boolean;
  /** ID for form input. */
  id?: string;
  /** Name for form input. */
  name?: string;
  /** Value for form input. */
  value?: string;
  /** Callback when the radio button is toggled. */
  onChange?: (newValue: boolean, id: string) => void;
  /** Callback when radio button is focused. */
  onFocus?: () => void;
  /** Callback when focus is removed. */
  onBlur?: () => void;
  /** Grow to fill the space. Equivalent to width: 100%; height: 100%. */
  fill?: ResponsiveProp<boolean>;
  /** Additional text to aide in use. */
  helpText?: ReactNode;
  /** Display an error message. */
  error?: boolean | string;
  /** Indicates the tone of the text field. */
  tone?: "magic" | undefined;
  /** Spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes. */
  bleed?: ResponsiveProp<SpaceScale>;
  /** Vertical start spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes. */
  bleedBlockStart?: ResponsiveProp<SpaceScale>;
  /** Vertical end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes. */
  bleedBlockEnd?: ResponsiveProp<SpaceScale>;
  /** Horizontal start spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes. */
  bleedInlineStart?: ResponsiveProp<SpaceScale>;
  /** Horizontal end spacing around children. Accepts a spacing token or an object of spacing tokens for different screen sizes. */
  bleedInlineEnd?: ResponsiveProp<SpaceScale>;
}
