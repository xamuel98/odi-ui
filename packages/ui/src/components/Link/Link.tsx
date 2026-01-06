import * as React from "react";
import { clsx } from "clsx";
import { linkVariants } from "./Link.variants.js";
import type { LinkProps } from "./Link.type.js";
import "./Link.css";

const Link = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, LinkProps>(
  (
    {
      className,
      children,
      url,
      external,
      target,
      monochrome,
      removeUnderline,
      accessibilityLabel,
      dataPrimaryLink,
      onClick,
      id,
      unstyled,
      ...props
    },
    ref
  ) => {
    const isExternal = external || target === "_blank";

    // If no URL is provided but onClick is, render as a button styled as a link
    // However, the prompt implies "The HTML that renders for the Button and Link components carries meaning",
    // suggesting simple links usually are <a>.
    // Spec says: "Interface LinkProps... url? string". If url is optional, what defaults?
    // Usually if no URL, it might be a button. But let's assume <a> with role="button" if no URL?
    // Or just <a> without href?
    // "Buttons vs Links" section says "Buttons are used primarily for actions... Link components carries meaning".
    // If it's a link without a URL, is it an action?
    // Let's implement as <a> if url exists, button if not?
    // "Use for text links inside a paragraph... Default links open in the same browser tab."

    // Actually, widespread pattern in UI libs: if url -> <a>, else -> <button type="button"> with link styles.
    // This provides better accessibility than <a href="#">.
    const Tag = url ? "a" : "button";

    const commonProps = {
      id,
      className: clsx(
        !unstyled && linkVariants({ monochrome, removeUnderline }),
        className
      ),
      onClick,
      "aria-label": accessibilityLabel,
      "data-primary-link": dataPrimaryLink,
      ...(url && { href: url }),
      ...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      }),
      ...(Tag === "button" && { type: "button" as const }),
      ...props,
    };

    // Cast because ref type depends on Tag
    return React.createElement(
      Tag,
      { ...commonProps, ref: ref as any },
      children
    );
  }
);

Link.displayName = "Link";

export { Link };
