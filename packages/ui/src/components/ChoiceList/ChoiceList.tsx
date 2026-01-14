import { useCallback, useId } from "react";
import type { ChoiceListProps } from "./ChoiceList.type.js";
import { choiceListVariants } from "./ChoiceList.variants.js";
import { Checkbox } from "../Checkbox/index.js";
import { RadioButton } from "../RadioButton/index.js";
import { InfoIcon } from "../../icons/index.js";
import "./ChoiceList.css";

export const ChoiceList = ({
  title,
  choices,
  selected,
  name: nameProp,
  allowMultiple = false,
  titleHidden = false,
  error,
  disabled = false,
  onChange,
  tone,
}: ChoiceListProps) => {
  const generatedId = useId();
  const name = nameProp || generatedId;

  const handleChange = useCallback((value: string, checked: boolean) => {
    if (!onChange) return;

    if (allowMultiple) {
      const newSelected = checked
        ? [...selected, value]
        : selected.filter((v) => v !== value);
      onChange(newSelected, name);
    } else {
      onChange([value], name);
    }
  }, []);

  const wrapperClasses = choiceListVariants({
    titleHidden,
    error: !!error,
    tone,
  });

  return (
    <fieldset className={wrapperClasses}>
      <legend className="odi-choice-list__legend">{title}</legend>
      <div className="odi-choice-list__choices">
        {choices.map((choice) => {
          const isSelected = selected.includes(choice.value);
          const isDisabled = Boolean(disabled || choice.disabled);
          const isError = Boolean(choice.describedByError && error);

          return (
            <div key={choice.value}>
              {allowMultiple ? (
                <Checkbox
                  label={choice.label}
                  id={choice.id || `${name}-${choice.value}`}
                  name={name}
                  value={choice.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={(newChecked) =>
                    handleChange(choice.value, newChecked)
                  }
                  helpText={choice.helpText}
                  error={isError}
                  tone={tone}
                />
              ) : (
                <RadioButton
                  label={choice.label}
                  id={choice.id || `${name}-${choice.value}`}
                  name={name}
                  value={choice.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={(newChecked) => {
                    // Radio button only triggers change if it becomes checked
                    if (newChecked) handleChange(choice.value, true);
                  }}
                  helpText={choice.helpText}
                  error={isError}
                  tone={tone}
                />
              )}
              {choice.renderChildren && isSelected && (
                <div className="odi-choice-list__choice-children">
                  {choice.renderChildren(isSelected)}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {error && typeof error === "string" && (
        <div className="odi-choice-list__error">
          <InfoIcon />
          {error}
        </div>
      )}
    </fieldset>
  );
};
