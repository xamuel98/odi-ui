import React from "react";
import clsx from "clsx";
import type { TextProps } from "./Text.type.js";
import { textVariants } from "./Text.variants.js";
import "./Text.css";

export const Text = ({
  alignment,
  as: Component = "span",
  breakWord,
  children,
  tone,
  fontWeight,
  id,
  numeric,
  truncate,
  variant,
  visuallyHidden,
  textDecorationLine,
  className: customClassName,
}: TextProps) => {
  const className = clsx(
    customClassName,
    textVariants({
      alignment,
      tone,
      fontWeight,
      variant,
      breakWord,
      numeric,
      truncate,
      visuallyHidden,
      textDecorationLine,
    })
  );

  return (
    <Component className={className} id={id}>
      {children}
    </Component>
  );
};
