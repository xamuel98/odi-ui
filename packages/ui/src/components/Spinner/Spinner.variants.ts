import { cva, type VariantProps } from "class-variance-authority";

export const spinnerVariants = cva("odi-spinner", {
  variants: {
    size: {
      small: "odi-spinner--size-small",
      large: "odi-spinner--size-large",
    },
  },
  defaultVariants: {
    size: "large",
  },
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
