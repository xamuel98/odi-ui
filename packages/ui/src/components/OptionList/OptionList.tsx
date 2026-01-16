import React, { useId } from "react";
import type {
  OptionListProps,
  OptionDescriptor,
  SectionDescriptor,
} from "./OptionList.type.js";
import { Checkbox } from "../Checkbox/index.js";
import { CheckIcon } from "../../icons/index.js";
import { optionListItemVariants } from "./OptionList.variants.js";
import "./OptionList.css";

export const OptionList = ({
  id,
  title,
  options = [],
  sections = [],
  selected,
  allowMultiple = false,
  role = "listbox",
  verticalAlign = "center",
  onChange,
  onPointerEnterOption,
  onFocusOption,
}: OptionListProps) => {
  const internalId = useId();
  const listId = id || `odi-option-list-${internalId}`;

  const handleOptionClick = (value: string, disabled?: boolean) => {
    if (disabled) return;

    if (allowMultiple) {
      const isSelected = selected.includes(value);
      let newSelected: string[];
      if (isSelected) {
        newSelected = selected.filter((item) => item !== value);
      } else {
        newSelected = [...selected, value];
      }
      onChange(newSelected);
    } else {
      onChange([value]);
    }
  };

  const renderOption = (option: OptionDescriptor, index: number) => {
    const isSelected = selected.includes(option.value);
    const uniqueKey = `${option.value}-${index}`;
    const domId = option.id || `${listId}-option-${uniqueKey}`;

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleOptionClick(option.value, option.disabled);
      }
    };

    const isEffectiveSelected = isSelected || option.active;

    return (
      <li
        key={uniqueKey}
        id={domId}
        role="option"
        aria-selected={isEffectiveSelected}
        aria-disabled={option.disabled}
        tabIndex={0} // Make focusable for keyboard users
        onClick={() => handleOptionClick(option.value, option.disabled)}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => onPointerEnterOption?.(option.value)}
        onFocus={() => onFocusOption?.(option.value)}
        className={optionListItemVariants({
          active: option.active,
          selected: isEffectiveSelected,
          disabled: option.disabled,
          allowMultiple,
          verticalAlign,
        })}
      >
        {allowMultiple && (
          <div className="odi-option-list__checkbox">
            <Checkbox
              checked={!!isEffectiveSelected}
              disabled={!!option.disabled}
              label={option.label}
              labelHidden
              onChange={() => {}} // Handled by li click
            />
          </div>
        )}

        {option.media && (
          <div className="odi-option-list__media">{option.media}</div>
        )}

        <div className="odi-option-list__content">{option.label}</div>

        {!allowMultiple && isEffectiveSelected && (
          <div className="odi-option-list__checkmark">
            <CheckIcon />
          </div>
        )}
      </li>
    );
  };

  const normalizedSections: SectionDescriptor[] =
    sections.length > 0 ? sections : options.length > 0 ? [{ options }] : [];

  return (
    <div id={listId} className="odi-option-list">
      {title && <div className="odi-option-list__title">{title}</div>}
      <ul
        className="odi-option-list__list"
        role={role}
        aria-multiselectable={allowMultiple}
      >
        {normalizedSections.map((section, sectionIndex) => (
          <React.Fragment key={`section-${sectionIndex}`}>
            {section.title && (
              <li
                role="presentation"
                className="odi-option-list__section-title"
              >
                {section.title}
              </li>
            )}
            {section.options.map((option, optionIndex) =>
              renderOption(option, optionIndex)
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
