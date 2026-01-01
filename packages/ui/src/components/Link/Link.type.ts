import type {
  ReactNode,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import type { VariantProps } from "class-variance-authority";
import type { linkVariants } from "./Link.variants.js";

type LinkTarget = "_blank" | "_self" | "_parent" | "_top";

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
  external?: boolean;
  /**
   * Where to display the url.
   */
  target?: LinkTarget;
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
}
