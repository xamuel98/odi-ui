import { cva, type VariantProps } from "class-variance-authority";

export const descriptionListVariants = cva("odi-description-list", {
  variants: {
    gap: {
      loose: "odi-description-list--gap-loose",
      tight: "odi-description-list--gap-tight",
    },
  },
  defaultVariants: {
    gap: "loose",
  },
});

export type DescriptionListVariants = VariantProps<
  typeof descriptionListVariants
>;
