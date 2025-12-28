import { cva } from "class-variance-authority";

export const progressBarVariants = cva("odi-progress-bar", {
  variants: {
    tone: {
      highlight: "odi-progress-bar--tone-highlight",
      primary: "odi-progress-bar--tone-primary",
      success: "odi-progress-bar--tone-success",
      critical: "odi-progress-bar--tone-critical",
    },
    size: {
      small: "odi-progress-bar--size-small",
      medium: "odi-progress-bar--size-medium",
      large: "odi-progress-bar--size-large",
    },
  },
  defaultVariants: {
    tone: "highlight",
    size: "medium",
  },
});
