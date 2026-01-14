import { cva, type VariantProps } from "class-variance-authority";

export const radioButtonVariants = cva("odi-radio-wrapper", {
  variants: {
    checked: {
      true: "odi-radio-wrapper--checked",
      false: "",
    },
    disabled: {
      true: "odi-radio-wrapper--disabled",
      false: "",
    },
    error: {
      true: "odi-radio-wrapper--error",
      false: "",
    },
    tone: {
      magic: "odi-radio-wrapper--tone-magic",
    },
  },
  defaultVariants: {
    checked: false,
    disabled: false,
    error: false,
    tone: undefined,
  },
});

export type RadioButtonVariants = VariantProps<typeof radioButtonVariants>;
