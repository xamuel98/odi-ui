export type BreakpointsAlias = "xs" | "sm" | "md" | "lg" | "xl";
export type ResponsiveProp<T> = T | { [K in BreakpointsAlias]?: T };
