import { cva, type VariantProps } from "class-variance-authority";

export const linkVariants = cva("odi-link", {
  variants: {
    monochrome: {
      true: "odi-link--monochrome",
      false: "",
    },
    removeUnderline: {
      true: "odi-link--remove-underline",
      false: "",
    },
  },
  defaultVariants: {
    monochrome: false,
    removeUnderline: false,
  },
});

export type LinkVariants = VariantProps<typeof linkVariants>;
