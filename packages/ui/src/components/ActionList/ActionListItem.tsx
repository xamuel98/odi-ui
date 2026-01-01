import * as React from "react";
import { actionListItemVariants } from "./ActionList.variants.js";
import type { ActionListItemDescriptor } from "./ActionList.type.js";

interface ActionListItemProps extends ActionListItemDescriptor {
  role?: string;
}

export const ActionListItem = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ActionListItemProps
>(
  (
    {
      content,
      accessibilityLabel,
      badge,
      helpText,
      icon,
      image,
      prefix,
      suffix,
      ellipsis,
      truncate,
      active,
      variant,
      disabled,
      id,
      url,
      external,
      target,
      onAction,
      onMouseEnter,
      onTouchStart,
      destructive,
      role = "menuitem",
      ...props
    },
    ref
  ) => {
    const className = actionListItemVariants({
      variant,
      active,
      disabled,
      destructive,
      truncate,
    });

    const label = content + (ellipsis ? "..." : "");

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onAction?.();
      }
    };

    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      onAction?.();
    };

    const commonProps = {
      id,
      className,
      role,
      "aria-label": accessibilityLabel,
      "aria-disabled": disabled,
      onMouseEnter,
      onTouchStart,
      onKeyDown: handleKeyDown,
      onClick: handleClick,
      ...props,
    };

    const contentMarkup = (
      <>
        {prefix && <span className="odi-action-list__prefix">{prefix}</span>}
        {icon && <span className="odi-action-list__prefix">{icon}</span>}
        {image && (
          <span className="odi-action-list__prefix">
            <img
              src={image}
              alt=""
              style={{ width: "20px", height: "20px", borderRadius: "4px" }}
            />
          </span>
        )}
        <span className="odi-action-list__item-content">
          <span className="odi-action-list__text">{label}</span>
          {helpText && (
            <span className="odi-action-list__item-help-text">{helpText}</span>
          )}
        </span>
        {suffix && <span className="odi-action-list__suffix">{suffix}</span>}
        {badge && (
          <span className="odi-action-list__suffix">
            {/* Logic for badge rendering or Badge usage if available */}
            {badge.content}
          </span>
        )}
      </>
    );

    if (url) {
      return (
        <li role="presentation">
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={disabled ? undefined : url}
            target={target || (external ? "_blank" : undefined)}
            rel={external ? "noopener noreferrer" : undefined}
            {...commonProps}
          >
            {contentMarkup}
          </a>
        </li>
      );
    }

    return (
      <li role="presentation">
        <button
          type="button"
          ref={ref as React.Ref<HTMLButtonElement>}
          disabled={disabled}
          {...commonProps}
        >
          {contentMarkup}
        </button>
      </li>
    );
  }
);

ActionListItem.displayName = "ActionListItem";
