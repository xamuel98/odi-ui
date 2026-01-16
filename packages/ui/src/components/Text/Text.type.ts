import type { ReactNode } from "react";

export type TextAlignment = "start" | "center" | "end" | "justify";

export type TextElement =
  | "dt"
  | "dd"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "strong"
  | "legend";

export type TextTone =
  | "base"
  | "disabled"
  | "inherit"
  | "success"
  | "critical"
  | "caution"
  | "subdued"
  | "text-inverse"
  | "text-inverse-secondary"
  | "magic"
  | "magic-subdued";

export type TextFontWeight = "regular" | "medium" | "semibold" | "bold";

export type TextVariant =
  | "headingXs"
  | "headingSm"
  | "headingMd"
  | "headingLg"
  | "headingXl"
  | "heading2xl"
  | "heading3xl"
  | "bodyXs"
  | "bodySm"
  | "bodyMd"
  | "bodyLg";

export interface TextProps {
  /** Adjust horizontal alignment of text. */
  alignment?: TextAlignment;
  /** The element type. */
  as: TextElement;
  /** Custom class name. */
  className?: string;
  /** Prevent text from overflowing. */
  breakWord?: boolean;
  /** Text to display. */
  children: ReactNode;
  /** Adjust tone of text. */
  tone?: TextTone;
  /** Adjust weight of text. */
  fontWeight?: TextFontWeight;
  /** HTML id attribute. */
  id?: string;
  /** Use a numeric font variant with monospace appearance. */
  numeric?: boolean;
  /** Truncate text overflow with ellipsis. */
  truncate?: boolean;
  /** Typographic style of text. */
  variant?: TextVariant;
  /** Visually hide the text. */
  visuallyHidden?: boolean;
  /** Add a line-through to the text. */
  textDecorationLine?: "line-through";
}
