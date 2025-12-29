import { cva, type VariantProps } from "class-variance-authority";

export const thumbnailVariants = cva("odi-thumbnail", {
  variants: {
    size: {
      extraSmall: "odi-thumbnail--size-extraSmall",
      small: "odi-thumbnail--size-small",
      medium: "odi-thumbnail--size-medium",
      large: "odi-thumbnail--size-large",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type ThumbnailVariants = VariantProps<typeof thumbnailVariants>;
