import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva("odi-card", {
  variants: {
    background: {
      "bg-surface": "odi-card--bg-surface",
      "bg-surface-secondary": "odi-card--bg-surface-secondary",
      "bg-surface-tertiary": "odi-card--bg-surface-tertiary",
      "bg-fill": "odi-card--bg-fill",
      "bg-fill-secondary": "odi-card--bg-fill-secondary",
    },
  },
  defaultVariants: {
    background: "bg-surface",
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
