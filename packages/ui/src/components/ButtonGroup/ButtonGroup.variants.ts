import { cva, type VariantProps } from "class-variance-authority";

export const buttonGroupVariants = cva("odi-button-group", {
  variants: {
    variant: {
      segmented: "odi-button-group--segmented",
    },
    gap: {
      extraTight: "odi-button-group--gap-extra-tight",
      tight: "odi-button-group--gap-tight",
      loose: "odi-button-group--gap-loose",
    },
    fullWidth: {
      true: "odi-button-group--full-width",
      false: "",
    },
    connectedTop: {
      true: "odi-button-group--connected-top",
      false: "",
    },
    noWrap: {
      true: "odi-button-group--no-wrap",
      false: "odi-button-group--wrap",
    },
  },
  defaultVariants: {
    gap: "tight",
    noWrap: true,
  },
});

export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;
