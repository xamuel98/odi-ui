import { cva, type VariantProps } from "class-variance-authority";

export const tooltipVariants = cva("odi-tooltip", {
  variants: {
    width: {
      default: "",
      wide: "odi-tooltip--wide",
    },
    padding: {
      default: "odi-tooltip--padding-default",
      "400": "odi-tooltip--padding-400",
    },
    borderRadius: {
      "100": "odi-tooltip--border-radius-100",
      "200": "odi-tooltip--border-radius-200",
    },
  },
  defaultVariants: {
    width: "default",
    padding: "default",
    borderRadius: "200",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;

export const tooltipActivatorVariants = cva("odi-tooltip-activator", {
  variants: {
    hasUnderline: {
      true: "odi-tooltip-activator--underline",
      false: "",
    },
  },
  defaultVariants: {
    hasUnderline: false,
  },
});
