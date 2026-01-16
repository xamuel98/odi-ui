import * as React from "react";
import clsx from "clsx";
import type {
  BannerProps,
  Action,
  DisableableAction,
  LoadableAction,
} from "./Banner.type.js";
import { bannerVariants } from "./Banner.variants.js";
import { Button } from "../Button/index.js";
import { Text } from "../Text/index.js";
import { XIcon } from "../../icons/index.js";
import "./Banner.css";

// Helper to render action
const renderAction = (
  action: Action & { loading?: boolean; disabled?: boolean },
  key: string,
  variant: "primary" | "secondary" = "primary"
) => {
  const { content, onAction, url, external, target, ...props } = action;

  if (!content) return null;

  const handleClick = () => {
    if (onAction) onAction();
  };

  return (
    <Button
      key={key}
      asChild={!!url}
      variant={variant === "primary" ? "secondary" : "plain"}
      size="large"
      onClick={handleClick}
      {...props}
    >
      {url ? (
        <a
          href={url}
          target={target}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </Button>
  );
};

const BannerActions = ({
  action,
  secondaryAction,
}: {
  action?: (DisableableAction & LoadableAction) | undefined;
  secondaryAction?: Action | undefined;
}) => {
  if (!action && !secondaryAction) return null;

  return (
    <div className="odi-banner__actions">
      {action && renderAction(action, "primary-action", "primary")}
      {secondaryAction &&
        renderAction(secondaryAction, "secondary-action", "secondary")}
    </div>
  );
};

interface BannerHeaderProps {
  title?: string | undefined;
  icon?: React.ReactNode;
  hideIcon?: boolean | undefined;
  onDismiss?: (() => void) | undefined;
  children?: React.ReactNode; // Passed for "in-card" styling
  showContentInHeader: boolean;
  hideTitle?: boolean | undefined;
}

const BannerHeader = ({
  title,
  icon,
  hideIcon,
  onDismiss,
  children,
  showContentInHeader,
  hideTitle,
}: BannerHeaderProps) => {
  const showHeader =
    title ||
    (!hideIcon && icon) ||
    onDismiss ||
    (showContentInHeader && children);

  if (!showHeader) return null;

  return (
    <div className="odi-banner__header">
      <div className="odi-banner__header-content">
        {!hideIcon &&
          icon &&
          (hideTitle ? (
            <div className="odi-banner__icon-container">
              <span className="odi-banner__icon">{icon}</span>
            </div>
          ) : (
            <span className="odi-banner__icon">{icon}</span>
          ))}
        {!showContentInHeader && title && (
          <Text as="h2" variant="headingMd" className="odi-banner__title">
            {title}
          </Text>
        )}
        {showContentInHeader && children && (
          <div className="odi-banner__content-text odi-banner__content-text--in-card">
            {children}
          </div>
        )}
      </div>
      {onDismiss && (
        <Button
          variant="tertiary"
          size="medium"
          icon={<XIcon />}
          iconOnly
          onClick={onDismiss}
          className="odi-banner__dismiss"
          aria-label="Dismiss"
        />
      )}
    </div>
  );
};

interface BannerContentProps {
  children?: React.ReactNode;
  action?: (DisableableAction & LoadableAction) | undefined;
  secondaryAction?: Action | undefined;
  showContentInHeader: boolean;
}

const BannerContent = ({
  children,
  action,
  secondaryAction,
  showContentInHeader,
}: BannerContentProps) => {
  const showContent =
    (!showContentInHeader && children) || action || secondaryAction;

  if (!showContent) return null;

  return (
    <div className="odi-banner__content">
      {!showContentInHeader && children && (
        <div className="odi-banner__content-text">{children}</div>
      )}
      <BannerActions action={action} secondaryAction={secondaryAction} />
    </div>
  );
};

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      title,
      icon,
      hideIcon,
      tone = "info",
      children,
      action,
      secondaryAction,
      onDismiss,
      stopAnnouncements,
      inCard,
      hideTitle,
      className,
      ...props
    },
    ref
  ) => {
    const showContentInHeader = !!(inCard || hideTitle);

    return (
      <div
        ref={ref}
        role="status"
        aria-live={stopAnnouncements ? "off" : "polite"}
        className={clsx(bannerVariants({ tone, inCard, hideTitle, className }))}
        {...props}
      >
        <BannerHeader
          title={title}
          icon={icon}
          hideIcon={hideIcon}
          onDismiss={onDismiss}
          children={children}
          showContentInHeader={showContentInHeader}
          hideTitle={hideTitle}
        />

        <BannerContent
          children={children}
          action={action}
          secondaryAction={secondaryAction}
          showContentInHeader={showContentInHeader}
        />
      </div>
    );
  }
);

Banner.displayName = "Banner";

export { Banner, bannerVariants };
