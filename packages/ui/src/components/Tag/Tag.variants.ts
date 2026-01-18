import { cva, type VariantProps } from "class-variance-authority";

export const tagVariants = cva("odi-tag", {
  variants: {
    clickable: {
      true: "odi-tag--clickable",
    },
    removable: {
      true: "odi-tag--removable",
    },
    url: {
      true: "odi-tag--link",
    },
    size: {
      large: "odi-tag--size-large",
    },
    tone: {
      default: "odi-tag--tone-default",
      success: "odi-tag--tone-success",
      warning: "odi-tag--tone-warning",
      critical: "odi-tag--tone-critical",
      magic: "odi-tag--tone-magic",
    },
    disabled: {
      true: "odi-tag--disabled",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

export type TagVariants = VariantProps<typeof tagVariants>;
