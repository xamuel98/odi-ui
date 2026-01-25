import { cva } from "class-variance-authority";

export const paginationVariants = cva("odi-pagination", {
  variants: {
    type: {
      page: "odi-pagination--page",
      table: "odi-pagination--table",
    },
  },
  defaultVariants: {
    type: "page",
  },
});
