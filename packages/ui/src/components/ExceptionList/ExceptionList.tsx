import React from "react";
import type { ExceptionListProps, Item } from "./ExceptionList.type.js";
import {
  exceptionListBulletVariants,
  exceptionListIconVariants,
  exceptionListTitleVariants,
  exceptionListDescriptionVariants,
} from "./ExceptionList.variants.js";
import "./ExceptionList.css";

export const ExceptionList = ({ items }: ExceptionListProps) => {
  return (
    <ul className="odi-exception-list">
      {items.map((item, index) => (
        <ExceptionListItem key={index} item={item} />
      ))}
    </ul>
  );
};

const ExceptionListItem = ({ item }: { item: Item }) => {
  const { status, icon, title, description, truncate } = item;
  const statusValue = status || "default";

  return (
    <li className="odi-exception-list__item">
      {icon ? (
        <div className={exceptionListIconVariants({ status: statusValue })}>
          {icon}
        </div>
      ) : (
        <div className="odi-exception-list__bullet-wrapper">
          <div
            className={exceptionListBulletVariants({ status: statusValue })}
          />
        </div>
      )}
      <div className="odi-exception-list__content">
        {title && (
          <div className={exceptionListTitleVariants({ status: statusValue })}>
            {title}
          </div>
        )}
        {title && "-"}
        <div className={exceptionListDescriptionVariants({ truncate })}>
          {description}
        </div>
      </div>
    </li>
  );
};
