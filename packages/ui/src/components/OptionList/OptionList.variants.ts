import { cva } from "class-variance-authority";

export const optionListItemVariants = cva("odi-option-list__item", {
  variants: {
    selected: {
      true: "odi-option-list__item--selected",
      false: "",
    },
    active: {
      true: "odi-option-list__item--active",
      false: "",
    },
    disabled: {
      true: "odi-option-list__item--disabled",
      false: "",
    },
    verticalAlign: {
      top: "odi-option-list__item--vertical-top",
      center: "odi-option-list__item--vertical-center",
      bottom: "odi-option-list__item--vertical-bottom",
    },
    allowMultiple: {
      true: "odi-option-list__item--multiple",
      false: "",
    },
  },
  defaultVariants: {
    selected: false,
    active: false,
    disabled: false,
    verticalAlign: "center",
    allowMultiple: false,
  },
});
