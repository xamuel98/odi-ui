import { cva, type VariantProps } from "class-variance-authority";

export const listVariants = cva("odi-list", {
  variants: {
    gap: {
      loose: "odi-list--gap-loose",
      extraTight: "odi-list--gap-extra-tight",
    },
    type: {
      bullet: "odi-list--type-bullet",
      number: "odi-list--type-number",
    },
  },
  defaultVariants: {
    gap: "loose",
    type: "bullet",
  },
});

export type ListVariants = VariantProps<typeof listVariants>;
