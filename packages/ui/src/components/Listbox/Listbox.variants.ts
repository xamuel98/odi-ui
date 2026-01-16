import { cva } from "class-variance-authority";

export const listboxOptionVariants = cva("odi-listbox-option", {
  variants: {
    selected: {
      true: "odi-listbox-option--selected",
      false: "",
    },
    disabled: {
      true: "odi-listbox-option--disabled",
      false: "",
    },
    active: {
      true: "odi-listbox-option--active",
      false: "",
    },
    destructive: {
      true: "odi-listbox-option--destructive",
      false: "",
    },
  },
  defaultVariants: {
    selected: false,
    disabled: false,
    active: false,
    destructive: false,
  },
});
