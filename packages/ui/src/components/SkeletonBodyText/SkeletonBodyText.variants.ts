import { cva, type VariantProps } from "class-variance-authority";

export const skeletonBodyTextVariants = cva("odi-skeleton-body-text", {
  variants: {},
  defaultVariants: {},
});

export const skeletonBodyTextLineVariants = cva(
  "odi-skeleton-body-text__line",
  {
    variants: {},
    defaultVariants: {},
  },
);

export type SkeletonBodyTextVariants = VariantProps<
  typeof skeletonBodyTextVariants
>;
