import { cva, type VariantProps } from "class-variance-authority";

export const colorPickerVariants = cva("odi-color-picker", {
  variants: {
    fullWidth: {
      true: "odi-color-picker--full-width",
      false: "",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export type ColorPickerVariants = VariantProps<typeof colorPickerVariants>;
