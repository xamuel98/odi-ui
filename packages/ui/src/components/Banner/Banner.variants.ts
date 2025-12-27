import { cva, type VariantProps } from "class-variance-authority";

export const bannerVariants = cva("odi-banner", {
  variants: {
    tone: {
      info: "odi-banner--tone-info",
      success: "odi-banner--tone-success",
      warning: "odi-banner--tone-warning",
      critical: "odi-banner--tone-critical",
    },
    inCard: {
      true: "odi-banner--in-card",
      false: "",
    },
    hideTitle: {
      true: "odi-banner--hide-title",
      false: "",
    },
  },
  defaultVariants: {
    tone: "info",
    inCard: false,
  },
});

export type BannerVariants = VariantProps<typeof bannerVariants>;
