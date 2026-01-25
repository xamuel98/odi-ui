import React, { useEffect } from "react";
import type { PaginationProps } from "./Pagination.type.js";
import { paginationVariants } from "./Pagination.variants.js";
import { Button } from "../Button/index.js";
import { ButtonGroup } from "../ButtonGroup/index.js";
import { Tooltip } from "../Tooltip/index.js";
import { Link } from "../Link/index.js";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons/index.js";
import "./Pagination.css";

export const Pagination = ({
  nextKeys,
  previousKeys,
  nextTooltip,
  previousTooltip,
  nextURL,
  previousURL,
  hasNext = false,
  hasPrevious = false,
  accessibilityLabel,
  accessibilityLabels,
  onNext,
  onPrevious,
  label,
  type = "page",
}: PaginationProps) => {
  // Keyboard navigation
  useEffect(() => {
    if (!nextKeys && !previousKeys) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const keyCode = event.keyCode;

      // Check if the pressed key matches nextKeys
      if (nextKeys && nextKeys.includes(keyCode) && hasNext && onNext) {
        event.preventDefault();
        onNext();
      }

      // Check if the pressed key matches previousKeys
      if (
        previousKeys &&
        previousKeys.includes(keyCode) &&
        hasPrevious &&
        onPrevious
      ) {
        event.preventDefault();
        onPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextKeys, previousKeys, hasNext, hasPrevious, onNext, onPrevious]);

  // Render previous button
  const renderPreviousButton = () => {
    const button = previousURL ? (
      <Button
        asChild
        variant="tertiary"
        iconOnly
        icon={<ChevronLeftIcon />}
        disabled={!hasPrevious}
        aria-label={accessibilityLabels?.previous || "Previous"}
      >
        <Link url={previousURL} unstyled />
      </Button>
    ) : (
      <Button
        variant="tertiary"
        iconOnly
        icon={<ChevronLeftIcon />}
        disabled={!hasPrevious}
        onClick={onPrevious}
        aria-label={accessibilityLabels?.previous || "Previous"}
      />
    );

    if (previousTooltip) {
      return (
        <Tooltip content={previousTooltip} activatorWrapper="">
          {button}
        </Tooltip>
      );
    }

    return button;
  };

  // Render next button
  const renderNextButton = () => {
    const button = nextURL ? (
      <Button
        asChild
        variant="tertiary"
        iconOnly
        icon={<ChevronRightIcon />}
        disabled={!hasNext}
        aria-label={accessibilityLabels?.next || "Next"}
      >
        <Link url={nextURL} unstyled />
      </Button>
    ) : (
      <Button
        variant="tertiary"
        iconOnly
        icon={<ChevronRightIcon />}
        disabled={!hasNext}
        onClick={onNext}
        aria-label={accessibilityLabels?.next || "Next"}
      />
    );

    if (nextTooltip) {
      return (
        <Tooltip content={nextTooltip} activatorWrapper="">
          {button}
        </Tooltip>
      );
    }

    return button;
  };

  return (
    <nav
      className={paginationVariants({ type })}
      aria-label={accessibilityLabel || "Pagination"}
    >
      <div className="odi-pagination__controls">
        <ButtonGroup variant="segmented">
          {renderPreviousButton()}
          {label && <div className="odi-pagination__label">{label}</div>}
          {renderNextButton()}
        </ButtonGroup>
      </div>
    </nav>
  );
};
