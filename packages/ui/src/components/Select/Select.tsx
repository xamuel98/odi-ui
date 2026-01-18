import React, { useId } from "react";
import { clsx } from "clsx";
import { Text } from "../Text/Text.js";
import { InlineError } from "../InlineError/InlineError.js";
import { Button } from "../Button/index.js";
import type { SelectProps, StrictOption, SelectGroup } from "./Select.type.js";
import { selectVariants } from "./Select.variants.js";
import "./Select.css";

export const Select = ({
  options = [],
  label,
  labelAction,
  labelHidden,
  labelInline,
  disabled,
  helpText,
  placeholder,
  id,
  name,
  value,
  readOnly,
  error,
  onChange,
  onFocus,
  onBlur,
  requiredIndicator,
  tone,
}: SelectProps) => {
  const generatedId = useId();
  const selectId = id || generatedId;
  const errorId = error ? `${selectId}-error` : undefined;
  const helpTextId = helpText ? `${selectId}-help` : undefined;
  const labelTone = disabled ? "disabled" : readOnly ? "subdued" : "base";

  const className = clsx(
    selectVariants({
      labelInline,
      disabled,
      error: Boolean(error),
      tone,
    })
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value, selectId);
  };

  const isOption = (option: any): option is StrictOption => {
    return typeof option === "object" && "value" in option;
  };

  const isGroup = (option: any): option is SelectGroup => {
    return typeof option === "object" && "title" in option;
  };

  const hasPrefix = options.some((option) => isOption(option) && option.prefix);

  const renderOption = (option: string | StrictOption, index: number) => {
    if (typeof option === "string") {
      return (
        <option key={index} value={option}>
          {option}
        </option>
      );
    }

    return (
      <option
        key={option.key || option.value}
        value={option.value}
        disabled={option.disabled}
      >
        {option.label}
      </option>
    );
  };

  const renderOptions = () => {
    return options.map((option, index) => {
      if (isGroup(option)) {
        return (
          <optgroup key={index} label={option.title}>
            {option.options.map((groupOption, groupIndex) =>
              renderOption(groupOption, groupIndex)
            )}
          </optgroup>
        );
      }

      return renderOption(option, index);
    });
  };

  const getPrefix = () => {
    const selectedOption = options.find(
      (option) => isOption(option) && option.value === value
    );
    return selectedOption && isOption(selectedOption)
      ? selectedOption.prefix
      : null;
  };

  return (
    <div className={className}>
      {!labelInline && (
        <div className="odi-select__label-wrapper">
          <label
            htmlFor={selectId}
            className={clsx(
              "odi-select__label",
              labelHidden && "odi-select__label--hidden"
            )}
          >
            <Text
              as="span"
              tone={labelTone}
              variant="bodyMd"
              fontWeight="medium"
            >
              {label}
              {requiredIndicator && (
                <Text as="span" tone="critical">
                  {" "}
                  *
                </Text>
              )}
            </Text>
          </label>
          {labelAction && (
            <Button
              type="button"
              variant="plain"
              size="large"
              className="odi-select__label-action"
              onClick={labelAction.onAction}
            >
              {labelAction.content}
            </Button>
          )}
        </div>
      )}

      <div
        className={clsx(
          "odi-select__input-wrapper",
          labelInline && "odi-select__input-wrapper--inline-label"
        )}
      >
        {labelInline && (
          <label htmlFor={selectId} className="odi-select__inline-label">
            <Text as="span" variant="bodyMd" tone="subdued">
              {label}
              {requiredIndicator && (
                <Text as="span" tone="critical">
                  {" "}
                  *
                </Text>
              )}
            </Text>
          </label>
        )}

        {hasPrefix && getPrefix() && (
          <div className="odi-select__prefix">{getPrefix()}</div>
        )}

        <select
          id={selectId}
          name={name}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-describedby={[errorId, helpTextId].filter(Boolean).join(" ")}
          aria-invalid={error ? true : undefined}
          className={clsx(
            "odi-select__select",
            hasPrefix && getPrefix() && "odi-select__select--has-prefix"
          )}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {renderOptions()}
        </select>
      </div>

      {helpText && !error && (
        <div id={helpTextId} className="odi-select__help-text">
          <Text as="span" variant="bodySm" tone="subdued">
            {helpText}
          </Text>
        </div>
      )}

      {error && typeof error === "string" && (
        <div className="odi-select__error">
          <InlineError message={error} fieldID={errorId!} />
        </div>
      )}
    </div>
  );
};
