import * as React from "react";
import { clsx } from "clsx";
import { cardVariants } from "./Card.variants.js";
import { Text } from "../Text/Text.js";
import type {
  CardProps,
  CardHeaderProps,
  CardSectionProps,
  CardFooterProps,
} from "./Card.type.js";
import "./Card.css";
import type {
  BreakpointsAlias,
  ResponsiveProp,
} from "../../tokens/breakpoints.type.js";
import type { SpaceScale } from "../../tokens/space.type.js";

// Helper to generate padding classes
function getPaddingClasses(
  padding: ResponsiveProp<SpaceScale> | undefined
): string[] {
  if (!padding) return [];

  if (typeof padding === "string") {
    return [`odi-card--padding-${padding}`];
  }

  const classes: string[] = [];
  const breakpoints = padding as { [K in BreakpointsAlias]?: SpaceScale };

  if (breakpoints.xs) classes.push(`odi-card--padding-${breakpoints.xs}`);
  if (breakpoints.sm) classes.push(`odi-card--padding-sm-${breakpoints.sm}`);
  if (breakpoints.md) classes.push(`odi-card--padding-md-${breakpoints.md}`);
  if (breakpoints.lg) classes.push(`odi-card--padding-lg-${breakpoints.lg}`);
  if (breakpoints.xl) classes.push(`odi-card--padding-xl-${breakpoints.xl}`);

  return classes;
}

// CardHeader sub-component
const CardHeader = ({ title, actions }: CardHeaderProps) => {
  return (
    <div className="odi-card__header">
      {typeof title === "string" ? (
        <Text as="h2" variant="headingSm" className="odi-card__header-title">
          {title}
        </Text>
      ) : (
        <div className="odi-card__header-title">{title}</div>
      )}
      {actions && <div className="odi-card__header-actions">{actions}</div>}
    </div>
  );
};

CardHeader.displayName = "Card.Header";

// CardSection sub-component
const CardSection = ({
  children,
  title,
  subdued,
  flush,
  actions,
}: CardSectionProps) => {
  return (
    <div
      className={clsx(
        "odi-card__section",
        subdued && "odi-card__section--subdued",
        flush && "odi-card__section--flush"
      )}
    >
      {(title || actions) && (
        <div className="odi-card__section-header">
          {title &&
            (typeof title === "string" ? (
              <Text
                as="h3"
                variant="headingXs"
                className="odi-card__section-title"
              >
                {title}
              </Text>
            ) : (
              <div className="odi-card__section-title">{title}</div>
            ))}
          {actions && (
            <div className="odi-card__section-actions">{actions}</div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

CardSection.displayName = "Card.Section";

// CardFooter sub-component
const CardFooter = ({
  children,
  primaryAction,
  secondaryActions,
}: CardFooterProps) => {
  return (
    <div className="odi-card__footer">
      {secondaryActions && (
        <div className="odi-card__footer-secondary">{secondaryActions}</div>
      )}
      {primaryAction}
      {children}
    </div>
  );
};

CardFooter.displayName = "Card.Footer";

// Main Card component
const CardRoot = ({
  children,
  background,
  padding,
  roundedAbove,
}: CardProps) => {
  const paddingClasses = getPaddingClasses(padding);
  const roundedClass = roundedAbove
    ? `odi-card--rounded-above-${roundedAbove}`
    : "";

  return (
    <div
      className={clsx(
        cardVariants({ background }),
        ...paddingClasses,
        roundedClass
      )}
    >
      {children}
    </div>
  );
};

CardRoot.displayName = "Card";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Section: CardSection,
  Footer: CardFooter,
});
