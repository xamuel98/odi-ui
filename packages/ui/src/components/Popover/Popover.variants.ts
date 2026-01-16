import { cva, type VariantProps } from "class-variance-authority";

export const popoverVariants = cva("odi-popover", {
  variants: {
    sectioned: {
      true: "odi-popover--sectioned",
      false: "",
    },
    fullWidth: {
      true: "odi-popover--full-width",
      false: "",
    },
    fullHeight: {
      true: "odi-popover--full-height",
      false: "",
    },
    fluidContent: {
      true: "odi-popover--fluid-content",
      false: "",
    },
    fixed: {
      true: "odi-popover--fixed",
      false: "",
    },
    hideOnPrint: {
      true: "odi-popover--hide-on-print",
      false: "",
    },
  },
  defaultVariants: {
    sectioned: false,
    fullWidth: false,
    fullHeight: false,
    fluidContent: false,
    fixed: false,
    hideOnPrint: false,
  },
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
