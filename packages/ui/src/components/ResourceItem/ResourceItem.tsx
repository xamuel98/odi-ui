import React from "react";
import type {
  MenuGroupDescriptor,
  ResourceItemProps,
} from "./ResourceItem.type.js";
import { resourceItemVariants } from "./ResourceItem.variants.js";
import { Button } from "../Button/index.js";
import { Checkbox } from "../Checkbox/index.js";
import { Link } from "../Link/index.js";
import { Popover } from "../Popover/index.js";
import { ActionList } from "../ActionList/index.js";
import { Tooltip } from "../Tooltip/index.js";
import "./ResourceItem.css";

const ShortcutActionMenu = ({
  action,
  persistActions,
}: {
  action: MenuGroupDescriptor;
  persistActions?: boolean;
}) => {
  const [active, setActive] = React.useState(false);
  const toggleActive = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActive((prev) => !prev);
  };
  const handleClose = () => setActive(false);

  const buttonContent = (
    <Button
      size="medium"
      variant="tertiary"
      icon={action.icon}
      onClick={toggleActive}
      disabled={action.disabled}
      aria-label={action.accessibilityLabel || action.title}
      style={persistActions ? { opacity: 1 } : undefined}
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

export const ResourceItem = ({
  id,
  url,
  children,
  onClick,
  disabled = false,
  media,
  shortcutActions,
  persistActions = false,
  verticalAlignment = "center",
  accessibilityLabel,
  ariaControls,
  ariaExpanded,
  name,
  external,
  dataHref,
  onMouseOver,
  onMouseOut,
  ...rest
}: ResourceItemProps & {
  selectable?: boolean;
  selected?: boolean;
  onSelectionChange?: (selected: boolean) => void;
}) => {
  const { selectable, selected, onSelectionChange } = rest;

  const handleClick = (e: React.MouseEvent) => {
    // If we clicked the checkbox or an action button, don't trigger the main item action
    if (
      (e.target as HTMLElement).closest(".odi-resource-item__checkbox") ||
      (e.target as HTMLElement).closest(".odi-resource-item__actions")
    ) {
      return;
    }

    if (onClick) {
      onClick(id);
    }
  };

  const commonProps = {
    id,
    className: resourceItemVariants({
      disabled,
      verticalAlignment,
      selectable,
      selected,
      persistActions,
    }),
    onMouseOver,
    onMouseOut,
    onClick: handleClick,
    "aria-controls": ariaControls,
    "aria-expanded": ariaExpanded,
    "aria-label": accessibilityLabel,
    "data-href": dataHref,
  };

  const renderContent = () => (
    <div className="odi-resource-item__container">
      {selectable && (
        <div
          className="odi-resource-item__checkbox"
          onClick={(e) => e.stopPropagation()}
        >
          <Checkbox
            label={name || "Select item"}
            labelHidden
            checked={!!selected}
            disabled={disabled}
            onChange={(newChecked) => onSelectionChange?.(newChecked)}
          />
        </div>
      )}

      {media && <div className="odi-resource-item__media">{media}</div>}

      <div className="odi-resource-item__content">{children}</div>

      {shortcutActions && shortcutActions.length > 0 && (
        <div className="odi-resource-item__actions">
          {shortcutActions.map((action, index) => {
            // Check if it's a menu group (has 'actions')
            if ("actions" in action) {
              return (
                <ShortcutActionMenu
                  key={index}
                  action={action}
                  persistActions={persistActions}
                />
              );
            }

            // Standard DisableableAction
            return action.url ? (
              <Button
                key={action.id || index}
                asChild
                variant="tertiary"
                size="medium"
                disabled={action.disabled}
                aria-label={action.accessibilityLabel}
                onMouseEnter={action.onMouseEnter}
                onTouchStart={action.onTouchStart}
              >
                <Link
                  url={action.url}
                  external={action.external}
                  target={action.target}
                  removeUnderline
                  unstyled
                >
                  {action.content}
                </Link>
              </Button>
            ) : (
              <Button
                key={action.id || index}
                onClick={(e) => {
                  e.stopPropagation();
                  action.onAction?.();
                }}
                variant="tertiary"
                size="medium"
                disabled={action.disabled}
                aria-label={action.accessibilityLabel}
                onMouseEnter={action.onMouseEnter}
                onTouchStart={action.onTouchStart}
              >
                {action.content}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );

  if (url && !disabled) {
    const { onClick, ...restProps } = commonProps;

    return (
      <Link
        url={url}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        removeUnderline
        unstyled
        {...restProps}
      >
        {renderContent()}
      </Link>
    );
  }

  return <div {...commonProps}>{renderContent()}</div>;
};
