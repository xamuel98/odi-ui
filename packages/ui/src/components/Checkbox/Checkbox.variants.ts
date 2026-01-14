import { cva, type VariantProps } from "class-variance-authority";

export const checkboxVariants = cva("odi-checkbox-wrapper", {
  variants: {
    checked: {
      true: "odi-checkbox-wrapper--checked",
      false: "",
    },
    indeterminate: {
      true: "odi-checkbox-wrapper--indeterminate",
      false: "",
    },
    disabled: {
      true: "odi-checkbox-wrapper--disabled",
      false: "",
    },
    error: {
      true: "odi-checkbox-wrapper--error",
      false: "",
    },
    tone: {
      magic: "odi-checkbox-wrapper--tone-magic",
    },
  },
  defaultVariants: {
    checked: false,
    indeterminate: false,
    disabled: false,
    error: false,
    tone: undefined,
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
