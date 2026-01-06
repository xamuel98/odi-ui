import { cva, type VariantProps } from "class-variance-authority";

export const tabsVariants = cva("odi-tabs", {
  variants: {
    fitted: {
      true: "odi-tabs--fitted",
      false: "",
    },
  },
  defaultVariants: {
    fitted: false,
  },
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
