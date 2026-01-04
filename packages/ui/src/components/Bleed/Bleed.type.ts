import type { ReactNode } from "react";

export type SpaceScale =
  | "0"
  | "025"
  | "050"
  | "100"
  | "150"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "800"
  | "1000"
  | "1200"
  | "1600";

export type BreakpointsAlias = "xs" | "sm" | "md" | "lg" | "xl";

export type ResponsiveProp<T> = T | { [K in BreakpointsAlias]?: T };

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
