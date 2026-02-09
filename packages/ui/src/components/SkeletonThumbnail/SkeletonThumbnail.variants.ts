import { cva, type VariantProps } from "class-variance-authority";

export const skeletonThumbnailVariants = cva("odi-skeleton-thumbnail", {
  variants: {
    size: {
      extraSmall: "odi-skeleton-thumbnail--size-extra-small",
      small: "odi-skeleton-thumbnail--size-small",
      medium: "odi-skeleton-thumbnail--size-medium",
      large: "odi-skeleton-thumbnail--size-large",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type SkeletonThumbnailVariants = VariantProps<
  typeof skeletonThumbnailVariants
>;
