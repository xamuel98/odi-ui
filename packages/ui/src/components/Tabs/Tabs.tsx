import * as React from "react";
import { clsx } from "clsx";
import { tabsVariants } from "./Tabs.variants.js";
import type { TabsProps } from "./Tabs.type.js";
import { PlusIcon } from "../../icons/index.js";
import "./Tabs.css";

export const Tabs = ({
  tabs,
  selected,
  onSelect,
  children,
  fitted,
  canCreateNewView,
  onCreateNewView,
  newViewAccessibilityLabel = "Create new view",
  disabled,
}: TabsProps) => {
  const handleSelect = (index: number) => {
    if (!disabled && onSelect) {
      onSelect(index);
    }
  };

  return (
    <div className="odi-tabs-container">
      <ul className={clsx(tabsVariants({ fitted }))} role="tablist">
        {tabs.map((tab, index) => {
          const isSelected = selected === index;
          const isDisabled = disabled || tab.disabled;

          return (
            <li key={tab.id} role="presentation" className="odi-tabs__item">
              <button
                id={tab.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={tab.panelID}
                aria-label={tab.accessibilityLabel}
                tabIndex={isSelected ? 0 : -1}
                disabled={isDisabled}
                className={clsx(
                  "odi-tabs__button",
                  isSelected && "odi-tabs__button--selected"
                )}
                onClick={() => !isDisabled && handleSelect(index)}
              >
                <span className="odi-tabs__text">{tab.content}</span>
                {tab.badge && (
                  <span className="odi-tabs__badge">{tab.badge}</span>
                )}
              </button>
            </li>
          );
        })}

        {canCreateNewView && (
          <li role="presentation" className="odi-tabs__item">
            <button
              type="button"
              aria-label={newViewAccessibilityLabel}
              className="odi-tabs__btn odi-tabs__new-view-btn"
              disabled={disabled}
              onClick={() => onCreateNewView?.("New View")}
            >
              <PlusIcon />
            </button>
          </li>
        )}
      </ul>
      {children && <div className="odi-tabs-panel">{children}</div>}
    </div>
  );
};
