import React, { useState } from "react";
import type { ResourceListProps } from "./ResourceList.type.js";
import { Checkbox } from "../Checkbox/index.js";
import { Button } from "../Button/index.js";
import { Spinner } from "../Spinner/index.js";
import { Tooltip } from "../Tooltip/index.js";
import { Popover } from "../Popover/index.js";
import { ActionList } from "../ActionList/index.js";
import type { MenuGroupDescriptor } from "../ResourceItem/ResourceItem.type.js";
import type { BulkAction } from "./ResourceList.type.js";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons/index.js";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup.js";
import "./ResourceList.css";

// Helper for "Select All" state
const SELECT_ALL_ITEMS = "All";

const BulkActionMenu = ({ action }: { action: MenuGroupDescriptor }) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive((prev) => !prev);
  const handleClose = () => setActive(false);

  const buttonContent = (
    <Button
      size="medium"
      icon={action.icon}
      disclosure={!action.icon}
      onClick={toggleActive}
      disabled={action.disabled}
      aria-label={action.accessibilityLabel || action.title}
      tone={action.destructive ? "critical" : undefined}
    >
      {action.icon
        ? null
        : "content" in action
          ? action.content
          : (action as any).title}
    </Button>
  );

  const activator = action.tooltip ? (
    <Tooltip content={action.tooltip} activatorWrapper="">
      {buttonContent}
    </Tooltip>
  ) : (
    buttonContent
  );

  return (
    <Popover
      active={active}
      activator={activator}
      onClose={handleClose}
      preferredAlignment="right"
    >
      <ActionList items={action.actions} onActionAnyItem={handleClose} />
    </Popover>
  );
};

const BulkActionButton = ({
  action,
  index,
}: {
  action: BulkAction;
  index: number;
}) => {
  const buttonContent = (
    <Button
      size="medium"
      icon={action.icon}
      onClick={() => action.onAction?.()}
      disabled={action.disabled}
      aria-label={action.accessibilityLabel}
      tone={action.destructive ? "critical" : undefined}
    >
      {action.icon
        ? null
        : "content" in action
          ? action.content
          : (action as any).title}
    </Button>
  );

  if (action.tooltip) {
    return <Tooltip content={action.tooltip}>{buttonContent}</Tooltip>;
  }

  return buttonContent;
};

export const ResourceList = <TItemType,>({
  items,
  filterControl,
  flushFilters = false,
  emptyState,
  emptySearchState,
  resourceName = { singular: "item", plural: "items" },
  promotedBulkActions,
  bulkActions,
  selectedItems = [],
  isFiltered,
  selectable = false,
  hasMoreItems,
  loading = false,
  showHeader = true,
  totalItemsCount,
  sortValue,
  sortOptions,
  alternateTool,
  headerContent,
  onSortChange,
  onSelectionChange,
  renderItem,
  idForItem,
  resolveItemId,
  pagination,
}: ResourceListProps<TItemType>) => {
  const isSelectAllConfigured = selectedItems === SELECT_ALL_ITEMS;

  // Resolve ID helper
  const getItemId = (item: TItemType, index: number) => {
    if (resolveItemId) return resolveItemId(item);
    if (idForItem) return idForItem(item, index);
    if ((item as any).id) return (item as any).id;
    return String(index);
  };

  const handleSelectAll = (checked: boolean) => {
    if (onSelectionChange) {
      if (checked) {
        // Here we will map current items.
        const allIds = items.map((item, index) => getItemId(item, index));
        onSelectionChange(allIds);
      } else {
        onSelectionChange([]);
      }
    }
  };

  const isSelected = (id: string) => {
    if (isSelectAllConfigured) return true;
    if (Array.isArray(selectedItems)) {
      return selectedItems.includes(id);
    }
    return false;
  };

  // derived state for header checkbox
  const allVisibleSelected =
    items.length > 0 &&
    items.every((item, index) => isSelected(getItemId(item, index)));
  const someVisibleSelected =
    !allVisibleSelected &&
    items.length > 0 &&
    items.some((item, index) => isSelected(getItemId(item, index)));

  const headerTitle = headerContent
    ? headerContent
    : `Showing ${items.length} ${
        items.length === 1 ? resourceName.singular : resourceName.plural
      }`;

  const renderHeader = () => {
    if (!showHeader && !alternateTool && !sortOptions) return null;

    return (
      <div className="odi-resource-list__header">
        <div className="odi-resource-list__header-content">
          {selectable && (
            <Checkbox
              checked={
                allVisibleSelected
                  ? true
                  : someVisibleSelected
                    ? "indeterminate"
                    : false
              }
              onChange={handleSelectAll}
              label="Select all"
              labelHidden
              disabled={loading}
            />
          )}

          {selectedItems.length > 0 &&
          (Array.isArray(selectedItems) ? selectedItems.length : "All") !==
            0 ? (
            <div className="odi-resource-list__bulk-actions">
              <span className="odi-resource-list__bulk-actions-label">
                {Array.isArray(selectedItems) ? selectedItems.length : "All"}{" "}
                selected
              </span>
              {promotedBulkActions?.map((action, idx) => {
                if ("actions" in action) {
                  return <BulkActionMenu key={idx} action={action} />;
                }

                return (
                  <div
                    key={idx}
                    className="odi-resource-list__bulk-action-wrapper"
                  >
                    <BulkActionButton action={action} index={idx} />
                  </div>
                );
              })}
            </div>
          ) : (
            <span className="odi-resource-list__header-title">
              {headerTitle}
            </span>
          )}

          {/* Sort or Alternate Tool */}
          <div className="odi-resource-list__sort-wrapper">
            {alternateTool}
            {!alternateTool && sortOptions && (
              <select
                value={sortValue}
                onChange={(e) => onSortChange?.(e.target.value, "sort")}
                className="odi-resource-list__sort-select"
                disabled={loading}
              >
                {Array.isArray(sortOptions)
                  ? sortOptions.map((opt) =>
                      typeof opt === "string" ? (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ) : (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ),
                    )
                  : null}
              </select>
            )}
          </div>
        </div>
      </div>
    );
  };

  const hasItems = items.length > 0;
  const showEmptySearchState = !hasItems && isFiltered && emptySearchState;
  const showEmptyState = !hasItems && !isFiltered && emptyState;

  return (
    <div className="odi-resource-list">
      {loading && (
        <div className="odi-resource-list__loading-overlay">
          <Spinner size="large" />
        </div>
      )}

      {filterControl && (
        <div
          className={`odi-resource-list__filters ${
            flushFilters ? "odi-resource-list__filters--flush" : ""
          }`}
        >
          {filterControl}
        </div>
      )}

      {hasItems && renderHeader()}

      {hasItems ? (
        <ul className="odi-resource-list__content">
          {items.map((item, index) => {
            const id = getItemId(item, index);
            const itemElement = renderItem(item, id, index);

            // Inject selection props if the item is a valid cloneable element
            if (React.isValidElement(itemElement)) {
              return React.cloneElement(
                itemElement as React.ReactElement<any>,
                {
                  key: id,
                  selectable,
                  selected: isSelected(id),
                  onSelectionChange: (checked: boolean) => {
                    if (!onSelectionChange) return;

                    // Calculate new selection
                    let newSelected: string[] | string = [];

                    if (isSelectAllConfigured) {
                      // If "All" is selected, and we deselect one:
                      const allIds = items.map((i, idx) => getItemId(i, idx));
                      newSelected = allIds.filter((itemId) => itemId !== id);
                    } else {
                      // Normal toggle
                      if (checked) {
                        newSelected = [...(selectedItems as string[]), id];
                      } else {
                        newSelected = (selectedItems as string[]).filter(
                          (sid) => sid !== id,
                        );
                      }
                    }
                    onSelectionChange(newSelected);
                  },
                },
              );
            }
            return <li key={id}>{itemElement}</li>;
          })}
        </ul>
      ) : (
        <div className="odi-resource-list__empty-state">
          {showEmptySearchState || showEmptyState || (
            <span className="odi-resource-list__empty-text">
              No items found.
            </span>
          )}
        </div>
      )}

      {pagination && (
        <div className="odi-resource-list__pagination">
          <ButtonGroup variant="segmented">
            <Button
              disabled={!pagination.hasPrevious}
              onClick={pagination.onPrevious}
              variant="tertiary"
              iconOnly
              icon={<ChevronLeftIcon />}
            ></Button>
            {/* {pagination.label && (
              <span className="odi-resource-list__pagination-label">
                {pagination.label}
              </span>
            )} */}
            <Button
              disabled={!pagination.hasNext}
              onClick={pagination.onNext}
              variant="tertiary"
              iconOnly
              icon={<ChevronRightIcon />}
            ></Button>
          </ButtonGroup>
        </div>
      )}
    </div>
  );
};
