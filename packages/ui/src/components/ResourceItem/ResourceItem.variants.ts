import { cva } from "class-variance-authority";

export const resourceItemVariants = cva("odi-resource-item", {
  variants: {
    disabled: {
      true: "odi-resource-item--disabled",
      false: "",
    },
    verticalAlignment: {
      leading: "odi-resource-item--alignment-leading",
      center: "odi-resource-item--alignment-center",
      trailing: "odi-resource-item--alignment-trailing",
      fill: "odi-resource-item--alignment-fill",
      baseline: "odi-resource-item--alignment-baseline",
    },
    selectable: {
      true: "odi-resource-item--selectable",
      false: "",
    },
    selected: {
      true: "odi-resource-item--selected",
      false: "",
    },
    persistActions: {
      true: "odi-resource-item--persist-actions",
      false: "",
    },
  },
  defaultVariants: {
    disabled: false,
    verticalAlignment: "center",
    selectable: false,
    selected: false,
    persistActions: false,
  },
});
