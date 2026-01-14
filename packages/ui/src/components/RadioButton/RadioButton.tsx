import React, { useRef, useId } from "react";
import { clsx } from "clsx";
import type { RadioButtonProps } from "./RadioButton.type.js";
import { radioButtonVariants } from "./RadioButton.variants.js";
import "./RadioButton.css";
import { InfoIcon } from "../../icons/index.js";

export const RadioButton = ({
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
  ariaDescribedBy,
}: RadioButtonProps) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const isChecked = checked === true;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked, id);
    }
  };

  const wrapperClasses = radioButtonVariants({
    checked: isChecked,
    disabled,
    error: !!error,
    tone,
  });

  return (
    <div className={wrapperClasses}>
      <input
        ref={inputRef}
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="odi-radio__input"
        aria-describedby={ariaDescribedBy}
        aria-invalid={!!error}
      />

      <div className="odi-radio__backdrop" aria-hidden="true" />

      <div className="odi-radio-label-content">
        <label
          htmlFor={id}
          className={clsx(
            "odi-radio-label",
            labelHidden && "odi-radio-label--hidden"
          )}
        >
          {label}
        </label>
        {helpText && <div className="odi-radio-help-text">{helpText}</div>}
        {error && typeof error === "string" && (
          <div className="odi-radio-error">
            <InfoIcon />
            {error}
          </div>
        )}
      </div>
    </div>
  );
};
