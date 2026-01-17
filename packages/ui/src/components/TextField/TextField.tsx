import React, {
  useId,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { clsx } from "clsx";
import { Text } from "../Text/Text.js";
import {
  XCircleIcon,
  InfoIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "../../icons/index.js";
import type { TextFieldProps } from "./TextField.type.js";
import { textFieldVariants } from "./TextField.variants.js";
import "./TextField.css";
import { Button } from "../Button/index.js";

export const TextField = ({
  id: idProp,
  name,
  value,
  label,
  labelHidden,
  labelAction,
  helpText,
  error,
  disabled,
  readOnly,
  placeholder,
  prefix,
  suffix,
  verticalContent,
  connectedLeft,
  connectedRight,
  type = "text",
  autoComplete,
  autoFocus,
  focused,
  multiline,
  clearButton,
  max,
  maxLength,
  maxHeight,
  min,
  minLength,
  pattern,
  step = 1,
  largeStep = 10,
  autoSize,
  role,
  align,
  variant,
  size,
  tone,
  className,
  inputMode,
  spellCheck,
  showCharacterCount,
  onChange,
  onClearButtonClick,
  onSpinnerChange,
  onFocus,
  onBlur,
  required,
  requiredIndicator,
  selectTextOnFocus,
  suggestion,
  loading,
  monospaced,
  ...ariaProps
}: TextFieldProps) => {
  const generatedId = useId();
  const id = idProp || generatedId;
  const helpTextId = helpText ? `${id}-help-text` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const labelId = `${id}-label`;

  const [isFocused, setIsFocused] = useState(false);
  const lastTypedValue = useRef<string | null>(null);
  const autoCompletedOnBlur = useRef(false);
  const measureRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const isValueEmpty = !value || value.toString().length === 0;

    if (autoSize && !multiline && measureRef.current && inputRef.current) {
      const effectiveShowSuffix =
        suffix && (!autoSize || !placeholder || !isValueEmpty);
      const effectiveContent = effectiveShowSuffix
        ? value
        : value || placeholder;

      if (!effectiveContent || effectiveContent.toString().length === 0) {
        inputRef.current.style.width = "24px";
      } else {
        const width = measureRef.current.offsetWidth;

        if (isValueEmpty && placeholder) {
          inputRef.current.style.width = `${width}px`;
        } else {
          inputRef.current.style.width = width ? `${width - 10}px` : "24px";
        }
      }
    }
  }, [value, placeholder, autoSize, multiline, suffix]);

  const handleStepNumber = useCallback(
    (amount: number) => {
      if (disabled || readOnly) return;
      const currentValue = Number(value) || 0;
      const newValue = String(currentValue + amount);
      if (onChange) onChange(newValue, id);
      if (onSpinnerChange) onSpinnerChange(newValue, id);
    },
    [disabled, readOnly, value, onChange, onSpinnerChange, id]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange?.(e.target.value, id);
      autoCompletedOnBlur.current = false;
      if (autoSize && multiline) {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
    },
    [onChange, id, autoSize, multiline]
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(true);

      if (autoCompletedOnBlur.current && lastTypedValue.current !== null) {
        onChange?.(lastTypedValue.current, id);
        autoCompletedOnBlur.current = false;
        lastTypedValue.current = null;
      }

      if (selectTextOnFocus) {
        e.target.select();
      }
      onFocus?.(e as any);
    },
    [onFocus, selectTextOnFocus, onChange, id]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setIsFocused(false);

      if (
        suggestion &&
        value &&
        suggestion.toLowerCase().startsWith(value.toString().toLowerCase())
      ) {
        lastTypedValue.current = value.toString();
        autoCompletedOnBlur.current = true;
        onChange?.(suggestion, id);
      } else {
        autoCompletedOnBlur.current = false;
      }

      onBlur?.(e as any);
    },
    [onBlur, suggestion, value, onChange, id]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Allow parent to handle keyDown as well
      if ((ariaProps as any).onKeyDown) {
        (ariaProps as any).onKeyDown(e);
        if (e.defaultPrevented) return;
      }

      if (suggestion && (e.key === "Tab" || e.key === "ArrowRight")) {
        // If suggestion matches start of value (case-insensitive)
        if (
          value &&
          suggestion.toLowerCase().startsWith(value.toString().toLowerCase())
        ) {
          e.preventDefault();
          autoCompletedOnBlur.current = false; // Explicit completion, don't revert
          onChange?.(suggestion, id);
          return;
        }
      }

      if (type !== "number" || disabled || readOnly) return;

      if (e.key === "PageUp") {
        e.preventDefault();
        handleStepNumber(largeStep);
      } else if (e.key === "PageDown") {
        e.preventDefault();
        handleStepNumber(-largeStep);
      }
    },
    [
      type,
      disabled,
      readOnly,
      handleStepNumber,
      largeStep,
      suggestion,
      value,
      onChange,
      id,
      ariaProps,
    ]
  );

  const handleClear = useCallback(() => {
    onChange?.("", id);
    onClearButtonClick?.(id);
    document.getElementById(id)?.focus();
  }, [onChange, onClearButtonClick, id]);

  const wrapperClasses = clsx(
    textFieldVariants({
      variant,
      size,
      tone,
      disabled,
      readOnly,
      error: Boolean(error),
      multiline: Boolean(multiline),
      align,
      monospaced,
      autoSize: Boolean(autoSize),
    }),
    (focused || isFocused) && "odi-textfield--focused",
    className
  );

  const Component = multiline ? "textarea" : "input";
  const ariaDescribedBy = [helpTextId, errorId].filter(Boolean).join(" ");
  const labelTone = disabled ? "disabled" : readOnly ? "subdued" : "base";
  const isNumberType = type === "number";
  const showSuffix =
    suffix &&
    (!autoSize || !placeholder || (value && value.toString().length > 0));

  const characterCountElement = showCharacterCount && maxLength && (
    <div
      className={clsx(
        "odi-textfield__character-count",
        !multiline && "odi-textfield__character-count--inside"
      )}
      style={multiline ? { alignSelf: "flex-end" } : undefined}
    >
      <Text as="span" variant="bodyMd" tone="subdued">
        {value?.length || 0}/{maxLength}
      </Text>
    </div>
  );

  return (
    <div className="odi-textfield-wrapper">
      {(label || labelAction) && (
        <div className="odi-textfield__label-wrapper">
          {label && (
            <label
              htmlFor={id}
              id={labelId}
              className={clsx(
                "odi-textfield__label",
                labelHidden && "odi-text--visually-hidden"
              )}
            >
              <Text
                as="span"
                tone={labelTone}
                variant="bodyMd"
                fontWeight="medium"
              >
                {label}
                {requiredIndicator && required && (
                  <Text as="span" tone="critical">
                    {" "}
                    *
                  </Text>
                )}
              </Text>
            </label>
          )}
          {labelAction && (
            <Button
              type="button"
              variant="plain"
              size="large"
              className="odi-textfield__label-action"
              onClick={labelAction.onAction}
            >
              {labelAction.content}
            </Button>
          )}
        </div>
      )}

      <div style={{ display: "flex", width: "100%" }}>
        {connectedLeft}

        <div className={wrapperClasses}>
          {verticalContent}
          <div className="odi-textfield__content">
            {prefix && <div className="odi-textfield__prefix">{prefix}</div>}

            <div className="odi-textfield__input-wrapper">
              {suggestion && (
                <div className="odi-textfield__suggestion">
                  {value &&
                  suggestion.toLowerCase().startsWith(value.toLowerCase()) ? (
                    <>
                      <span style={{ visibility: "hidden" }}>{value}</span>
                      {suggestion.slice(value.length)}
                    </>
                  ) : (
                    suggestion
                  )}
                </div>
              )}
              <Component
                ref={inputRef as any}
                id={id}
                name={name}
                value={value}
                {...(placeholder && { placeholder })}
                className="odi-textfield__input"
                disabled={disabled}
                readOnly={readOnly}
                type={!multiline ? type : undefined}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                aria-labelledby={labelId}
                aria-describedby={ariaDescribedBy || undefined}
                aria-invalid={Boolean(error)}
                aria-multiline={multiline ? true : undefined}
                role={role}
                max={!multiline ? max : undefined}
                maxLength={maxLength}
                min={!multiline ? min : undefined}
                minLength={minLength}
                pattern={pattern}
                step={step}
                inputMode={inputMode}
                spellCheck={spellCheck}
                style={
                  multiline && typeof maxHeight === "number"
                    ? { maxHeight }
                    : undefined
                }
                {...ariaProps}
                required={required}
                {...(ariaProps as any)}
              />
              {autoSize && !multiline && (
                <div
                  aria-hidden
                  ref={measureRef}
                  className="odi-textfield__measure"
                >
                  {showSuffix ? value : value || placeholder}
                </div>
              )}
            </div>

            {loading && (
              <div className="odi-textfield__suffix">
                <div className="odi-textfield__spinner--loading" />
              </div>
            )}

            {isNumberType && !disabled && !readOnly && !loading && (
              <div className="odi-textfield__spinner">
                <button
                  type="button"
                  className="odi-textfield__spinner-button"
                  tabIndex={-1}
                  onClick={() => handleStepNumber(step)}
                >
                  <ChevronUpIcon />
                </button>
                <button
                  type="button"
                  className="odi-textfield__spinner-button"
                  tabIndex={-1}
                  onClick={() => handleStepNumber(-step)}
                >
                  <ChevronDownIcon />
                </button>
              </div>
            )}

            {clearButton &&
              value &&
              !disabled &&
              !readOnly &&
              !isNumberType &&
              !loading && (
                <button
                  type="button"
                  className="odi-textfield__clear-button"
                  onClick={handleClear}
                  aria-label="Clear input"
                >
                  <XCircleIcon />
                </button>
              )}

            {showSuffix && !loading && (
              <div className="odi-textfield__suffix">{suffix}</div>
            )}

            {!multiline && characterCountElement}
          </div>
        </div>

        {connectedRight}
      </div>

      {helpText && (
        <div id={helpTextId} className="odi-textfield__help-text">
          <Text as="span" variant="bodyMd" tone="subdued">
            {helpText}
          </Text>
        </div>
      )}

      {typeof error === "string" && (
        <div id={errorId} className="odi-textfield__error-message">
          <InfoIcon fill="var(--odi-color-text-critical)" />
          <Text as="span" variant="bodyMd" tone="critical">
            {error}
          </Text>
        </div>
      )}

      {multiline && characterCountElement}
    </div>
  );
};
