import { cva, type VariantProps } from "class-variance-authority";

export const skeletonDisplayTextVariants = cva("odi-skeleton-display-text", {
  variants: {
    size: {
      small: "odi-skeleton-display-text--size-small",
      medium: "odi-skeleton-display-text--size-medium",
      large: "odi-skeleton-display-text--size-large",
      extraLarge: "odi-skeleton-display-text--size-extra-large",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SkeletonDisplayTextVariants = VariantProps<
  typeof skeletonDisplayTextVariants
>;
