import * as React from "react";
import { ActionListItem } from "./ActionListItem.js";
import type { ActionListSection as ActionListSectionType } from "./ActionList.type.js";

interface ActionListSectionProps extends ActionListSectionType {
  onActionAnyItem?: () => void;
}

export const ActionListSection = ({
  title,
  items,
  actionRole,
  onActionAnyItem,
}: ActionListSectionProps) => {
  return (
    <div
      className="odi-action-list__section"
      role="group"
      aria-label={typeof title === "string" ? title : undefined}
    >
      {title && <div className="odi-action-list__section-title">{title}</div>}
      <ul className="odi-action-list__items" role="menu">
        {items.map((item, index) => (
          <ActionListItem
            key={item.id || index}
            {...item}
            role={actionRole || item.role || "menuitem"}
            onAction={() => {
              item.onAction?.();
              onActionAnyItem?.();
            }}
          />
        ))}
      </ul>
    </div>
  );
};
