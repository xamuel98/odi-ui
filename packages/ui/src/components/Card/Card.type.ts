import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { cardVariants } from "./Card.variants.js";
import type {
  BreakpointsAlias,
  ResponsiveProp,
} from "../../tokens/breakpoints.type.js";
import type { SpaceScale } from "../../tokens/space.type.js";

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
