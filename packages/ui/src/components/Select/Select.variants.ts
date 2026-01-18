import { cva, type VariantProps } from "class-variance-authority";

export const selectVariants = cva("odi-select", {
  variants: {
    labelInline: {
      true: "odi-select--label-inline",
    },
    disabled: {
      true: "odi-select--disabled",
    },
    error: {
      true: "odi-select--error",
    },
    tone: {
      magic: "odi-select--tone-magic",
    },
  },
});

export type SelectVariants = VariantProps<typeof selectVariants>;
