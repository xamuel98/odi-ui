import { cva, type VariantProps } from "class-variance-authority";

export const actionListItemVariants = cva("odi-action-list__item", {
  variants: {
    variant: {
      default: "",
      menu: "", // Default style matches
      indented: "odi-action-list__item--variant-indented",
    },
    active: {
      true: "odi-action-list__item--active",
      false: "",
    },
    disabled: {
      true: "odi-action-list__item--disabled",
      false: "",
    },
    destructive: {
      true: "odi-action-list__item--destructive",
      false: "",
    },
    truncate: {
      true: "odi-action-list__item--truncate",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    active: false,
    disabled: false,
    destructive: false,
    truncate: false,
  },
});

export type ActionListItemVariants = VariantProps<
  typeof actionListItemVariants
>;
