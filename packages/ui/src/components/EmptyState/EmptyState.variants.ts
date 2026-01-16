import { cva } from "class-variance-authority";

export const emptyStateVariants = cva("odi-empty-state", {
  variants: {
    fullWidth: {
      true: "odi-empty-state--full-width",
    },
    imageContained: {
      true: "odi-empty-state--image-contained",
    },
  },
  defaultVariants: {
    fullWidth: false,
    imageContained: false,
  },
});

export const emptyStateImageVariants = cva("odi-empty-state__image", {
  variants: {
    large: {
      true: "odi-empty-state__image--large",
    },
  },
  defaultVariants: {
    large: false,
  },
});
