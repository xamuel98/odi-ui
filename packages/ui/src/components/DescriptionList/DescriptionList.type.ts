import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { descriptionListVariants } from "./DescriptionList.variants.js";

export interface DescriptionListItem {
  /**
   * Term content.
   */
  term: ReactNode;
  /**
   * Description content.
   */
  description: ReactNode;
}

export interface DescriptionListProps
  extends React.HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof descriptionListVariants> {
  /**
   * Collection of items for list.
   */
  items: DescriptionListItem[];
}
