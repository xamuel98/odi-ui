import type { ReactNode } from "react";
import type { ResponsiveProp } from "../../tokens/breakpoints.type.js";
import type { SpaceScale } from "../../tokens/space.type.js";

export interface BleedProps {
  children?: ReactNode;
  /** Negative horizontal space around children. */
  marginInline?: ResponsiveProp<SpaceScale>;
  /** Negative vertical space around children. */
  marginBlock?: ResponsiveProp<SpaceScale>;
  /** Negative top space around children. */
  marginBlockStart?: ResponsiveProp<SpaceScale>;
  /** Negative bottom space around children. */
  marginBlockEnd?: ResponsiveProp<SpaceScale>;
  /** Negative left space around children. */
  marginInlineStart?: ResponsiveProp<SpaceScale>;
  /** Negative right space around children. */
  marginInlineEnd?: ResponsiveProp<SpaceScale>;
}
