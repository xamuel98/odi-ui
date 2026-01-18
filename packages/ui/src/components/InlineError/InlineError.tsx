import React from "react";
import { InfoIcon } from "../../icons/index.js";
import { Text } from "../Text/Text.js";
import type { InlineErrorProps } from "./InlineError.type.js";
import "./InlineError.css";

export const InlineError = ({ message, fieldID }: InlineErrorProps) => {
  if (!message) return null;

  return (
    <div className="odi-inline-error" id={fieldID}>
      <div className="odi-inline-error__icon">
        <InfoIcon />
      </div>
      <Text as="span" tone="critical" variant="bodyMd">
        {message}
      </Text>
    </div>
  );
};
