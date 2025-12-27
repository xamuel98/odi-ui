import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva("odi-badge", {
  variants: {
    tone: {
      default: "odi-badge--tone-default",
      info: "odi-badge--tone-info",
      success: "odi-badge--tone-success",
      attention: "odi-badge--tone-attention",
      warning: "odi-badge--tone-warning",
      critical: "odi-badge--tone-critical",
    },
    size: {
      medium: "odi-badge--size-medium",
      small: "odi-badge--size-small",
    },
  },
  defaultVariants: {
    tone: "default",
    size: "medium",
  },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;
