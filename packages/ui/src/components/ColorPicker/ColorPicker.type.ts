export interface HSBAColor {
  hue: number;
  saturation: number;
  brightness: number;
  alpha?: number;
}

export type Color = HSBAColor;

export interface ColorPickerProps {
  /** ID for the element. */
  id?: string;
  /** The currently selected color. */
  color: Color;
  /** Allow user to select an alpha value. */
  allowAlpha?: boolean;
  /** Allow HuePicker to take the full width. */
  fullWidth?: boolean;
  /** Callback when color is selected. */
  onChange: (color: HSBAColor) => void;
}
