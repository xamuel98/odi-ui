import { cva } from "class-variance-authority";

export const skeletonTabsVariants = cva("odi-skeleton-tabs", {
  variants: {
    fitted: {
      true: "odi-skeleton-tabs--fitted",
      false: "",
    },
  },
  defaultVariants: {
    fitted: false,
  },
});

export const skeletonTabsItemVariants = cva("odi-skeleton-tabs__item", {
  variants: {
    fitted: {
      true: "odi-skeleton-tabs__item--fitted",
      false: "",
    },
  },
  defaultVariants: {
    fitted: false,
  },
});
