import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { listVariants } from "./List.variants.js";

export interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement>,
    VariantProps<typeof listVariants> {
  /**
   * List item elements.
   */
  children?: ReactNode;
}

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children?: ReactNode;
}
