import * as React from "react";
import { clsx } from "clsx";
import { descriptionListVariants } from "./DescriptionList.variants.js";
import type { DescriptionListProps } from "./DescriptionList.type.js";
import "./DescriptionList.css";

const DescriptionList = React.forwardRef<
  HTMLDListElement,
  DescriptionListProps
>(({ className, items, gap, ...props }, ref) => {
  return (
    <dl
      ref={ref}
      className={clsx(descriptionListVariants({ gap }), className)}
      {...props}
    >
      {items.map((item, index) => (
        <div key={index} className="odi-description-list__row">
          <dt className="odi-description-list__term">{item.term}</dt>
          <dd className="odi-description-list__description">
            {item.description}
          </dd>
        </div>
      ))}
    </dl>
  );
});

DescriptionList.displayName = "DescriptionList";

export { DescriptionList };
