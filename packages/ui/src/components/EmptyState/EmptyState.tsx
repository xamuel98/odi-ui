import React from "react";
import clsx from "clsx";
import { Button } from "../Button/index.js";
import { Text } from "../Text/index.js";
import { Link } from "../Link/index.js";
import type { EmptyStateProps, ComplexAction } from "./EmptyState.type.js";
import {
  emptyStateVariants,
  emptyStateImageVariants,
} from "./EmptyState.variants.js";
import "./EmptyState.css";

const EmptyStateAction = ({ action }: { action: ComplexAction }) => {
  const commonButtonProps = {
    disabled: action.disabled,
    onMouseEnter: action.onMouseEnter,
    onTouchStart: action.onTouchStart,
    onClick: action.onAction,
    "aria-label": action.accessibilityLabel,
  };

  const buttonContent = action.url ? (
    <Link
      url={action.url}
      external={action.external}
      target={action.target}
      removeUnderline
      unstyled
    >
      {action.content}
    </Link>
  ) : (
    action.content
  );

  if (action.plain) {
    return (
      <Button variant="tertiary" {...commonButtonProps} asChild={!!action.url}>
        {buttonContent}
      </Button>
    );
  }

  return (
    <Button
      variant={action.outline ? "secondary" : "primary"}
      tone={action.destructive ? "critical" : undefined}
      loading={!!action.loading}
      icon={action.icon}
      {...commonButtonProps}
      asChild={!!action.url}
    >
      {buttonContent}
    </Button>
  );
};

export const EmptyState = ({
  heading,
  image,
  largeImage,
  imageContained,
  fullWidth,
  children,
  action,
  secondaryAction,
  footerContent,
}: EmptyStateProps) => {
  const className = emptyStateVariants({ fullWidth, imageContained });

  const imageClass = emptyStateImageVariants({
    large: !!largeImage,
  });

  return (
    <div className={className}>
      <div className="odi-empty-state__image-container">
        <img
          src={image}
          alt=""
          role="presentation"
          className={imageClass}
          {...(largeImage && {
            srcSet: `${image} 1x, ${largeImage} 2x`,
          })}
        />
      </div>

      <div className="odi-empty-state__content">
        {heading && (
          <Text
            as="h2"
            variant="headingMd"
            className="odi-empty-state__heading"
          >
            {heading}
          </Text>
        )}
        {children && <div className="odi-empty-state__text">{children}</div>}

        {(action || secondaryAction) && (
          <div className="odi-empty-state__actions">
            {action && <EmptyStateAction action={action} />}
            {secondaryAction && <EmptyStateAction action={secondaryAction} />}
          </div>
        )}

        {footerContent && (
          <div className="odi-empty-state__footer">{footerContent}</div>
        )}
      </div>
    </div>
  );
};
