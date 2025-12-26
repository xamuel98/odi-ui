import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva("odi-button", {
  variants: {
    variant: {
      primary: "odi-button--variant-primary",
      secondary: "odi-button--variant-secondary",
      plain: "odi-button--variant-plain",
      tertiary: "odi-button--variant-tertiary",
    },
    tone: {
      critical: "odi-button--tone-critical",
      success: "odi-button--tone-success",
    },
    size: {
      micro: "odi-button--size-micro",
      medium: "odi-button--size-medium",
      large: "odi-button--size-large",
    },
    iconOnly: {
      true: "odi-button--icon-only",
      false: "",
    },
    iconPosition: {
      start: "odi-button--icon-position-start",
      end: "odi-button--icon-position-end",
    },
    textAlign: {
      start: "odi-button--text-align-start",
      center: "odi-button--text-align-center",
      end: "odi-button--text-align-end",
      left: "odi-button--text-align-left",
      right: "odi-button--text-align-right",
    },
    disclosure: {
      up: "odi-button--disclosure-up",
      down: "odi-button--disclosure-down",
      select: "odi-button--disclosure-select",
      true: "odi-button--disclosure",
      false: "",
    },
    fullWidth: {
      true: "odi-button--full-width",
      false: "",
    },
    loading: {
      true: "odi-button--loading",
      false: "",
    },
    pressed: {
      true: "odi-button--pressed",
      false: "",
    },
  },
  defaultVariants: {
    variant: "secondary",
    size: "medium",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
