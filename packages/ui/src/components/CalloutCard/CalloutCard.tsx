import { clsx } from "clsx";
import type { CalloutCardProps } from "./CalloutCard.type.js";
import { Button } from "../Button/index.js";
import { Link } from "../Link/index.js";
import { XIcon } from "../../icons/index.js";
import "./CalloutCard.css";

export const CalloutCard = ({
  children,
  title,
  illustration,
  primaryAction,
  secondaryAction,
  onDismiss,
}: CalloutCardProps) => {
  const renderIllustration = () => {
    if (typeof illustration === "string") {
      return (
        <img
          src={illustration}
          alt=""
          className="odi-callout-card__media"
          role="presentation"
        />
      );
    }
    return illustration;
  };

  return (
    <div
      className={clsx(
        "odi-callout-card",
        onDismiss && "odi-callout-card--has-dismiss"
      )}
    >
      <div className="odi-callout-card__container">
        <div className="odi-callout-card__content">
          <div className="odi-callout-card__title-section">
            <h2 className="odi-callout-card__title">{title}</h2>
          </div>
          <div className="odi-callout-card__body">{children}</div>
          <div className="odi-callout-card__actions">
            {primaryAction.url ? (
              <Button
                asChild
                onMouseEnter={primaryAction.onMouseEnter}
                onTouchStart={primaryAction.onTouchStart}
                id={primaryAction.id}
                aria-label={primaryAction.accessibilityLabel}
                icon={primaryAction.icon}
                variant="secondary"
              >
                <Link
                  url={primaryAction.url}
                  external={primaryAction.external}
                  target={primaryAction.target}
                  removeUnderline
                  unstyled
                >
                  {primaryAction.content}
                </Link>
              </Button>
            ) : (
              <Button
                onClick={primaryAction.onAction}
                onMouseEnter={primaryAction.onMouseEnter}
                onTouchStart={primaryAction.onTouchStart}
                id={primaryAction.id}
                aria-label={primaryAction.accessibilityLabel}
                icon={primaryAction.icon}
              >
                {primaryAction.content}
              </Button>
            )}
            {secondaryAction &&
              (secondaryAction.url ? (
                <Button
                  asChild
                  variant={secondaryAction.variant || "tertiary"}
                  onMouseEnter={secondaryAction.onMouseEnter}
                  onTouchStart={secondaryAction.onTouchStart}
                  id={secondaryAction.id}
                  aria-label={secondaryAction.accessibilityLabel}
                  icon={secondaryAction.icon}
                >
                  <Link
                    url={secondaryAction.url}
                    external={secondaryAction.external}
                    target={secondaryAction.target}
                    removeUnderline
                    unstyled
                  >
                    {secondaryAction.content}
                  </Link>
                </Button>
              ) : (
                <Button
                  variant={secondaryAction.variant || "tertiary"}
                  onClick={secondaryAction.onAction}
                  onMouseEnter={secondaryAction.onMouseEnter}
                  onTouchStart={secondaryAction.onTouchStart}
                  id={secondaryAction.id}
                  aria-label={secondaryAction.accessibilityLabel}
                  icon={secondaryAction.icon}
                >
                  {secondaryAction.content}
                </Button>
              ))}
          </div>
        </div>
        <div className="odi-callout-card__illustration">
          {renderIllustration()}
        </div>
      </div>
      {onDismiss && (
        <div className="odi-callout-card__dismiss">
          <Button
            variant="tertiary"
            icon={<XIcon />}
            iconOnly
            onClick={onDismiss}
            aria-label="Dismiss"
          />
        </div>
      )}
    </div>
  );
};
