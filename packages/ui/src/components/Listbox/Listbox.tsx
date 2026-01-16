import React, { useRef, useState, useEffect, useCallback, useId } from "react";
import clsx from "clsx";
import type {
  ListboxProps,
  OptionProps,
  HeaderProps,
  ActionProps,
  TextOptionProps,
  LoadingProps,
} from "./Listbox.type.js";
import { AutoSelection } from "../../enums/auto-selection.enum.js";
import { listboxOptionVariants } from "./Listbox.variants.js";
import { CheckIcon, PlusIcon } from "../../icons/index.js";
import { Spinner } from "../Spinner/index.js";
import "./Listbox.css";

import { ListboxContext } from "./Listbox.context.js";

// -- Main Component --
export const Listbox = ({
  children,
  autoSelection = AutoSelection.FirstSelected,
  enableKeyboardControl = true,
  accessibilityLabel,
  customListId,
  onSelect,
  onActiveOptionChange,
}: ListboxProps) => {
  const [activeOptionId, setActiveOptionId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const internalId = useId();
  const listId = customListId || `odi-listbox-${internalId}`;

  // Helper to handle Active option change
  const handleSetActiveOption = useCallback(
    (id: string | null) => {
      setActiveOptionId(id);
      if (id && onActiveOptionChange) {
        onActiveOptionChange(id, id);
      }
    },
    [onActiveOptionChange]
  );

  // Auto Selection Logic
  useEffect(() => {
    if (
      autoSelection === AutoSelection.FirstSelected ||
      autoSelection === AutoSelection.First
    ) {
      const firstOption = listRef.current?.querySelector(
        '[role="option"]:not([aria-disabled="true"])'
      );
      if (firstOption?.id && !activeOptionId) {
        handleSetActiveOption(firstOption.id);
      }
    }
  }, [autoSelection]); // Run once or when selection mode changes

  // Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!enableKeyboardControl) return;

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const options = Array.from(
        listRef.current?.querySelectorAll(
          '[role="option"]:not([aria-disabled="true"])'
        ) || []
      );
      if (options.length === 0) return;

      const currentIndex = options.findIndex(
        (opt) => opt.id === activeOptionId
      );
      let nextIndex = 0;

      if (e.key === "ArrowDown") {
        nextIndex = currentIndex >= options.length - 1 ? 0 : currentIndex + 1;
      } else {
        nextIndex = currentIndex <= 0 ? options.length - 1 : currentIndex - 1;
      }

      handleSetActiveOption(options[nextIndex]?.id ?? null);
      // Optional: scroll into view
      options[nextIndex]?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (activeOptionId) {
        const activeOption = document.getElementById(activeOptionId);
        if (activeOption) {
          activeOption.click();
        }
      }
    }
  };

  return (
    <ListboxContext.Provider
      value={{
        onSelect: onSelect,
        activeOptionId,
        setActiveOptionId: handleSetActiveOption,
        registerOption: () => {}, // No-op if using querySelector
      }}
    >
      <ul
        ref={listRef}
        id={listId}
        className="odi-listbox"
        role="listbox"
        aria-label={accessibilityLabel}
        tabIndex={0} // Make focusable
        onKeyDown={handleKeyDown}
      >
        {children}
      </ul>
    </ListboxContext.Provider>
  );
};

// -- Sub Components --

import { useListboxContext } from "./Listbox.context.js";

const Option = ({
  children,
  value,
  disabled,
  selected,
  accessibilityLabel,
  destructive,
  icon,
  divider,
}: OptionProps) => {
  const { onSelect, activeOptionId, setActiveOptionId } = useListboxContext();
  const id = useId();
  const domId = `odi-listbox-option-${id}`;

  const isActive = activeOptionId === domId;

  const handleClick = () => {
    if (disabled) return;
    onSelect?.(value);
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setActiveOptionId(domId);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    // Only clear if we are the active one (though usually we are if we are leaving)
    setActiveOptionId(null);
  };

  return (
    <>
      <li
        id={domId}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled}
        aria-label={accessibilityLabel}
        className={listboxOptionVariants({
          selected,
          disabled,
          active: isActive,
          destructive,
        })}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // data-value={value} // Useful for keyboard enter handler to retrieve value if needed
      >
        {icon && <span className="odi-listbox-option__icon">{icon}</span>}
        <span className="odi-listbox-option__label">{children}</span>
        {selected && (
          <span className="odi-listbox-option__check">
            <CheckIcon />
          </span>
        )}
      </li>
      {divider && <li aria-hidden="true" className="odi-listbox-divider" />}
    </>
  );
};

const Header = ({ children, divider }: HeaderProps) => {
  return (
    <>
      <li role="presentation" className="odi-listbox-header">
        {children}
      </li>
      {divider && <li aria-hidden="true" className="odi-listbox-divider" />}
    </>
  );
};

// Action component (behaves like an option but usually for "Add new..." etc.)
const Action = ({
  children,
  value,
  disabled,
  selected,
  destructive,
  icon = <PlusIcon />,
  accessibilityLabel,
  divider,
}: ActionProps) => {
  const { onSelect, activeOptionId, setActiveOptionId } = useListboxContext();
  const id = useId();
  const domId = `odi-listbox-action-${id}`;
  const isActive = activeOptionId === domId;

  const handleClick = () => {
    if (disabled) return;
    onSelect?.(value);
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    setActiveOptionId(domId);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setActiveOptionId(null);
  };

  return (
    <>
      <li
        id={domId}
        role="option" // It is selectable
        aria-disabled={disabled}
        aria-label={accessibilityLabel}
        className={clsx(
          listboxOptionVariants({ disabled, active: isActive, destructive }),
          "odi-listbox-action"
        )}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {icon && <span className="odi-listbox-action__icon">{icon}</span>}
        <span className="odi-listbox-option__label">{children}</span>
      </li>
      {divider && <li aria-hidden="true" className="odi-listbox-divider" />}
    </>
  );
};

const TextOption = ({
  children,
  color = "default",
  divider,
}: TextOptionProps) => {
  return (
    <>
      <li
        role="presentation"
        className={clsx(
          "odi-listbox-text-option",
          color === "subdued" && "odi-listbox-text-option--subdued"
        )}
      >
        {children}
      </li>
      {divider && <li aria-hidden="true" className="odi-listbox-divider" />}
    </>
  );
};

const Loading = ({ children, accessibilityLabel }: LoadingProps) => {
  return (
    <li
      role="presentation"
      className="odi-listbox-loading"
      aria-label={accessibilityLabel}
    >
      <Spinner size="small" />
      {children && <span style={{ marginLeft: 8 }}>{children}</span>}
    </li>
  );
};

// Attaching sub-components
Listbox.Option = Option;
Listbox.Header = Header;
Listbox.Action = Action;
Listbox.TextOption = TextOption;
Listbox.Loading = Loading;
