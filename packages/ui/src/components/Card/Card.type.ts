import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { cardVariants } from "./Card.variants.js";

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

export type ColorBackgroundAlias =
  | "bg-surface"
  | "bg-surface-secondary"
  | "bg-surface-tertiary"
  | "bg-fill"
  | "bg-fill-secondary";

export interface CardProps extends VariantProps<typeof cardVariants> {
  children?: ReactNode;
  background?: ColorBackgroundAlias;
  padding?: ResponsiveProp<SpaceScale>;
  roundedAbove?: BreakpointsAlias;
}

export interface CardHeaderProps {
  title?: ReactNode;
  actions?: ReactNode;
}

export interface CardSectionProps {
  children?: ReactNode;
  title?: ReactNode;
  subdued?: boolean;
  flush?: boolean;
  actions?: ReactNode;
}

export interface CardFooterProps {
  children?: ReactNode;
  primaryAction?: ReactNode;
  secondaryActions?: ReactNode;
}
