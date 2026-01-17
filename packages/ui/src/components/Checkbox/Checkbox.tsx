import React, { useRef, useEffect, useId } from "react";
import { clsx } from "clsx";
import type { CheckboxProps } from "./Checkbox.type.js";
import { checkboxVariants } from "./Checkbox.variants.js";
import { InlineError } from "../InlineError/index.js";
import "./Checkbox.css";

const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    className="odi-checkbox__icon"
    focusable="false"
    aria-hidden="true"
  >
    <path className="odi-checkbox__path" d="M6 10l3 3 7-7" />
  </svg>
);

const IndeterminateIcon = () => (
  <svg
    viewBox="0 0 20 20"
    className="odi-checkbox__icon"
    focusable="false"
    aria-hidden="true"
  >
    <line
      x1="5"
      y1="10"
      x2="15"
      y2="10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const Checkbox = ({
  checked = false,
  disabled = false,
  error,
  helpText,
  id: idProp,
  label,
  labelHidden,
  name,
  onChange,
  onFocus,
  onBlur,
  tone,
  value,
  labelClassName,
  ariaControls,
  ariaDescribedBy,
}: CheckboxProps) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const isIndeterminate = checked === "indeterminate";
  const isChecked = checked === true;

  // Sync indeterminate state with DOM property
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked, id);
    }
  };

  const wrapperClasses = checkboxVariants({
    checked: isChecked,
    indeterminate: isIndeterminate,
    disabled,
    error: !!error,
    tone,
  });

  return (
    <div className={wrapperClasses}>
      <input
        ref={inputRef}
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="odi-checkbox__input"
        aria-controls={ariaControls}
        aria-describedby={ariaDescribedBy}
        aria-invalid={!!error}
      />

      <div className="odi-checkbox__backdrop">
        {isIndeterminate ? <IndeterminateIcon /> : <CheckIcon />}
      </div>

      <div className="odi-checkbox-label-content">
        <label
          htmlFor={id}
          className={clsx(
            "odi-checkbox-label",
            labelHidden && "odi-checkbox-label--hidden",
            labelClassName
          )}
        >
          {label}
        </label>
        {helpText && <div className="odi-checkbox-help-text">{helpText}</div>}
        {error && typeof error === "string" && (
          <InlineError message={error} fieldID={id} />
        )}
      </div>
    </div>
  );
};
