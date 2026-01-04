import * as React from "react";
import type { BleedProps } from "./Bleed.type.js";
import { getMarginStyle } from "../../utils/index.js";
import "./Bleed.css";

export const Bleed = ({
  children,
  marginInline,
  marginBlock,
  marginBlockStart,
  marginBlockEnd,
  marginInlineStart,
  marginInlineEnd,
}: BleedProps) => {
  const style: React.CSSProperties = {
    ...getMarginStyle(marginInline, "marginInline"),
    ...getMarginStyle(marginBlock, "marginBlock"),
    ...getMarginStyle(marginBlockStart, "marginBlockStart"),
    ...getMarginStyle(marginBlockEnd, "marginBlockEnd"),
    ...getMarginStyle(marginInlineStart, "marginInlineStart"),
    ...getMarginStyle(marginInlineEnd, "marginInlineEnd"),
  };

  return (
    <div className="odi-bleed" style={style}>
      {children}
    </div>
  );
};

Bleed.displayName = "Bleed";
