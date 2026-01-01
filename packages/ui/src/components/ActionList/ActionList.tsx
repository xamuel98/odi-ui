import * as React from "react";
import clsx from "clsx";
import type {
  ActionListProps,
  ActionListItemDescriptor,
} from "./ActionList.type.js";
import { ActionListItem } from "./ActionListItem.js";
import { ActionListSection } from "./ActionListSection.js";
import "./ActionList.css";

const isItemMatch = (
  item: ActionListItemDescriptor,
  query: string
): boolean => {
  const content = item.content || "";
  return content.toLowerCase().includes(query.toLowerCase());
};

const ActionList = React.forwardRef<HTMLDivElement, ActionListProps>(
  (
    {
      className,
      items,
      sections,
      allowFiltering,
      filterLabel = "Filter actions",
      onActionAnyItem,
      actionRole,
      ...props
    },
    ref
  ) => {
    const [filterValue, setFilterValue] = React.useState("");

    const hasSections = sections && sections.length > 0;
    const allItems = hasSections
      ? sections.flatMap((s) => s.items)
      : items || [];

    // Check if we should show filter
    const shouldShowFilter =
      allowFiltering &&
      allItems.length > 8 &&
      allItems.every((item) => typeof item.content === "string");

    // Filter logic
    const filteredItems = React.useMemo(() => {
      if (!shouldShowFilter || !filterValue) return null;
      return allItems.filter((item) => isItemMatch(item, filterValue));
    }, [allItems, shouldShowFilter, filterValue]);

    const handleHandleActionAnyItem = () => {
      onActionAnyItem?.();
    };

    return (
      <div ref={ref} className={clsx("odi-action-list", className)} {...props}>
        {shouldShowFilter && (
          <div className="odi-action-list__filter">
            <input
              type="text"
              className="odi-action-list__filter-input"
              placeholder={filterLabel}
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              aria-label={filterLabel}
            />
          </div>
        )}

        {shouldShowFilter && filterValue ? (
          // Render filtered flattened list
          <ul className="odi-action-list__items" role="menu">
            {filteredItems?.map((item, index) => (
              <ActionListItem
                key={item.id || index}
                {...item}
                role={actionRole || item.role || "menuitem"}
                onAction={() => {
                  item.onAction?.();
                  handleHandleActionAnyItem();
                }}
              />
            ))}
          </ul>
        ) : hasSections ? (
          // Render sections
          sections.map((section, index) => (
            <ActionListSection
              key={index}
              {...section}
              actionRole={actionRole}
              onActionAnyItem={handleHandleActionAnyItem}
            />
          ))
        ) : (
          // Render simple list
          <ul className="odi-action-list__items" role="menu">
            {items?.map((item, index) => (
              <ActionListItem
                key={item.id || index}
                {...item}
                role={actionRole || item.role || "menuitem"}
                onAction={() => {
                  item.onAction?.();
                  handleHandleActionAnyItem();
                }}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
);

ActionList.displayName = "ActionList";

export { ActionList };
