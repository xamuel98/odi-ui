import * as React from "react";
import { clsx } from "clsx";
import { listVariants } from "./List.variants.js";
import type { ListItemProps, ListProps } from "./List.type.js";
import "./List.css";

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <li ref={ref} className={clsx("odi-list__item", className)} {...props}>
        {children}
      </li>
    );
  }
);

ListItem.displayName = "List.Item";

const ListRoot = React.forwardRef<
  HTMLUListElement | HTMLOListElement,
  ListProps
>(({ className, children, gap, type = "bullet", ...props }, ref) => {
  const Component = type === "number" ? "ol" : "ul";
  return (
    <Component
      ref={ref as any}
      className={clsx(listVariants({ gap, type }), className)}
      {...props}
    >
      {children}
    </Component>
  );
});

ListRoot.displayName = "List";

export const List = Object.assign(ListRoot, { Item: ListItem });
