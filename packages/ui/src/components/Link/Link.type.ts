import type { ReactNode, AnchorHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { linkVariants } from "./Link.variants.js";

export type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target">,
    VariantProps<typeof linkVariants> {
  /**
   * The url to link to.
   */
  url?: string;
  /**
   * The content to display inside the link.
   */
  children?: ReactNode;
  /**
   * Makes the link open in a new tab.
   */
  external?: boolean | undefined;
  /**
   * Where to display the url.
   */
  target?: LinkTarget | undefined;
  /**
   * Makes the link color the same as the current text color and adds an underline.
   */
  monochrome?: boolean;
  /**
   * Removes text decoration underline to the link.
   */
  removeUnderline?: boolean;
  /**
   * Descriptive text to be read to screenreaders.
   */
  accessibilityLabel?: string;
  /**
   * Indicates whether or not the link is the primary navigation link when rendered inside of an `IndexTable.Row`.
   */
  dataPrimaryLink?: boolean;
  /**
   * Callback when a link is clicked.
   */
  onClick?: () => void;
  /**
   * ID for the link.
   */
  id?: string;
  /**
   * Removes all default styling classes (e.g. odi-link).
   * Useful when using Link as a child of another component that handles styling (e.g. Button).
   */
  unstyled?: boolean;
}
