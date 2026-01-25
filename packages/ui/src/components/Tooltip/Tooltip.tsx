import React, { useState, useRef, useCallback, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { Text } from "../Text/Text.js";
import { type TooltipProps, type TooltipPosition } from "./Tooltip.type.js";
import {
  tooltipVariants,
  tooltipActivatorVariants,
} from "./Tooltip.variants.js";
import "./Tooltip.css";

export const Tooltip = ({
  children,
  content,
  active: activeProp,
  hoverDelay = 0,
  dismissOnMouseOut = false,
  preferredPosition = "above",
  activatorWrapper = "span",
  accessibilityLabel,
  width = "default",
  padding = "default",
  borderRadius = "200",
  zIndexOverride,
  hasUnderline,
  persistOnClick,
  onOpen,
  onClose,
}: TooltipProps) => {
  const [internalActive, setInternalActive] = useState(false);
  const isControlled = activeProp !== undefined;
  const isActive = isControlled ? activeProp : internalActive;

  const activatorRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [positionStyle, setPositionStyle] = useState<React.CSSProperties>({});
  const [currentPosition, setCurrentPosition] =
    useState<TooltipPosition>(preferredPosition);

  // -- Event Handlers --

  const handleOpen = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      if (!isControlled) setInternalActive(true);
      onOpen?.();
    }, hoverDelay);
  }, [hoverDelay, isControlled, onOpen]);

  const handleClose = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!isControlled) setInternalActive(false);
    onClose?.();
  }, [isControlled, onClose]);

  const handleMouseEnter = () => {
    handleOpen();
  };

  const handleMouseLeave = () => {
    handleClose();
  };

  const handleFocus = () => {
    handleOpen();
  };

  const handleBlur = () => {
    handleClose();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (persistOnClick) {
      if (!isActive) {
        handleOpen();
      }
    }
    // Pass through click
    if (React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      if (child.props.onClick) {
        child.props.onClick(e);
      }
    }
  };

  // -- Positioning Logic --
  const updatePosition = useCallback(() => {
    if (!isActive || !activatorRef.current || !contentRef.current) return;

    const activatorRect = activatorRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = 0;
    let left = 0;
    let calculatedPosition = preferredPosition;

    // Tail size
    const tailHeight = 6;
    const gap = 8; // Gap + Tail

    // Calculate vertical position
    if (preferredPosition === "above") {
      top = activatorRect.top - contentRect.height - gap;
      if (top < 0) {
        top = activatorRect.bottom + gap;
        calculatedPosition = "below";
      }
    } else if (preferredPosition === "below") {
      top = activatorRect.bottom + gap;
      if (top + contentRect.height > viewportHeight) {
        top = activatorRect.top - contentRect.height - gap;
        calculatedPosition = "above";
      }
    }

    // Horizontal center alignment
    left = activatorRect.left + activatorRect.width / 2 - contentRect.width / 2;

    // Keep within bounds
    if (left < 8) left = 8;
    if (left + contentRect.width > viewportWidth - 8) {
      left = viewportWidth - contentRect.width - 8;
    }

    setPositionStyle({
      top: top + window.scrollY,
      left: left + window.scrollX,
      zIndex: zIndexOverride,
    });
    setCurrentPosition(calculatedPosition);
  }, [isActive, preferredPosition, zIndexOverride]);

  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [updatePosition]);

  // -- Render Activator --
  const ActivatorWrapper = activatorWrapper as any;

  const activatorProps = {
    // We compose the ref below if cloning
    className: hasUnderline
      ? tooltipActivatorVariants({ hasUnderline })
      : undefined,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    // Accessibility
    "aria-describedby": isActive ? "tooltip-content" : undefined,
  };

  let renderedActivator;

  if (activatorWrapper === "") {
    // No wrapper mode: clone the child
    if (React.isValidElement(children)) {
      const child = children as React.ReactElement<any>;
      renderedActivator = React.cloneElement(child, {
        ...activatorProps,
        // Merge refs
        ref: (node: HTMLElement) => {
          (activatorRef as any).current = node;
          // Handle child's existing ref
          const { ref } = child as any;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as any).current = node;
          }
        },
        // Merge classes
        className: [child.props.className, activatorProps.className]
          .filter(Boolean)
          .join(" "),
        onMouseEnter: (e: React.MouseEvent) => {
          handleMouseEnter();
          child.props.onMouseEnter?.(e);
        },
        onMouseLeave: (e: React.MouseEvent) => {
          handleMouseLeave();
          child.props.onMouseLeave?.(e);
        },
        onFocus: (e: React.FocusEvent) => {
          handleFocus();
          child.props.onFocus?.(e);
        },
        onBlur: (e: React.FocusEvent) => {
          handleBlur();
          child.props.onBlur?.(e);
        },
        onClick: (e: React.MouseEvent) => {
          handleClick(e);
          // handleClick already calls child.props.onClick
        },
      });
    } else {
      // Fallback if not a valid element
      renderedActivator = <span {...activatorProps}>{children}</span>;
    }
  } else {
    renderedActivator = (
      <ActivatorWrapper ref={activatorRef} {...activatorProps}>
        {children}
      </ActivatorWrapper>
    );
  }

  // -- Render Overlay --
  const portalContainer =
    typeof document !== "undefined" ? document.body : null;

  if (!portalContainer) return renderedActivator;

  return (
    <>
      {renderedActivator}
      {isActive &&
        createPortal(
          <div
            id="tooltip-content"
            ref={contentRef}
            className={`odi-tooltip-overlay ${tooltipVariants({
              width,
              padding,
              borderRadius,
            })} ${isActive ? "odi-tooltip-overlay--active" : ""}`}
            style={positionStyle}
            role="tooltip"
            aria-hidden={!isActive}
          >
            {/* Tail element */}
            <div
              className="odi-tooltip-tail"
              style={{
                left: "50%",
                marginLeft: "-6px", // Half width
                ...(currentPosition === "above"
                  ? { bottom: "-5px" }
                  : { top: "-5px", transform: "rotate(180deg)" }),
              }}
            />

            {accessibilityLabel && (
              <span className="visually-hidden">{accessibilityLabel}</span>
            )}
            <Text as="p" variant="bodySm">
              {content}
            </Text>
          </div>,
          portalContainer,
        )}
    </>
  );
};
