import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";
import { type PopoverProps, PopoverCloseSource } from "./Popover.type.js";
import { popoverVariants } from "./Popover.variants.js";
import "./Popover.css";

// Helper hook for handling clicks outside
function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  activatorRef: React.RefObject<HTMLElement | null>,
  handler: (source: PopoverCloseSource) => void,
  active: boolean,
  preventCloseOnChildOverlayClick: boolean
) {
  useEffect(() => {
    if (!active) return;

    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      // Do nothing if clicking ref's element or descendent elements
      if (
        !ref.current ||
        ref.current.contains(target) ||
        (activatorRef.current && activatorRef.current.contains(target))
      ) {
        return;
      }

      handler(PopoverCloseSource.Click);
    };

    document.addEventListener("mousedown", listener, true);
    document.addEventListener("touchstart", listener, true);
    return () => {
      document.removeEventListener("mousedown", listener, true);
      document.removeEventListener("touchstart", listener, true);
    };
  }, [ref, activatorRef, handler, active, preventCloseOnChildOverlayClick]);
}

export const Popover = ({
  children,
  preferredPosition = "below",
  preferredAlignment = "center",
  active,
  activator,
  activatorWrapper = "div",
  zIndexOverride,
  preventFocusOnClose,
  sectioned,
  fullWidth,
  fullHeight,
  fluidContent,
  fixed,
  ariaHaspopup,
  hideOnPrint,
  onClose,
  autofocusTarget = "container",
  preventCloseOnChildOverlayClick = false,
  captureOverscroll = false,
}: PopoverProps) => {
  const activatorRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [positionStyle, setPositionStyle] = useState<React.CSSProperties>({});

  // This is a simplified positioning engine.
  const updatePosition = useCallback(() => {
    if (!active || !activatorRef.current || !contentRef.current) return;

    const activatorRect = activatorRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let top = 0;
    let left = 0;

    // Simple vertical positioning
    if (preferredPosition === "above") {
      top = activatorRect.top - contentRect.height - 8; // 8px gap
      if (top < 0) {
        // Flip to below if not enough space
        top = activatorRect.bottom + 8;
      }
    } else {
      // default below
      top = activatorRect.bottom + 8;
      if (top + contentRect.height > viewportHeight) {
        // Flip to above
        top = activatorRect.top - contentRect.height - 8;
      }
    }

    // Horizontal alignment
    if (preferredAlignment === "left") {
      left = activatorRect.left;
    } else if (preferredAlignment === "right") {
      left = activatorRect.right - contentRect.width;
    } else {
      // Center
      left =
        activatorRect.left + activatorRect.width / 2 - contentRect.width / 2;
    }

    // Keep within viewport bounds
    left = Math.max(8, Math.min(left, viewportWidth - contentRect.width - 8));

    // Full width override
    if (fullWidth) {
      // Match activator width? Or Full screen width?
      // Docs say: "Allow popover to stretch to the full width of its activator."
      const width = activatorRect.width;
      setPositionStyle({
        top: top + window.scrollY,
        left: activatorRect.left + window.scrollX,
        width: width,
        zIndex: zIndexOverride,
      });
      return;
    }

    setPositionStyle({
      top: top + window.scrollY,
      left: left + window.scrollX,
      zIndex: zIndexOverride,
    });
  }, [
    active,
    preferredPosition,
    preferredAlignment,
    fullWidth,
    zIndexOverride,
  ]);

  // Recalculate on mount, active change, resize, scroll
  useLayoutEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true); // Capture scroll on all elements
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [updatePosition]);

  // -- Close handlers --
  useClickOutside(
    contentRef,
    activatorRef,
    onClose,
    active,
    preventCloseOnChildOverlayClick
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (active && e.key === "Escape") {
        onClose(PopoverCloseSource.EscapeKeypress);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [active, onClose]);

  // -- Focus Management --
  useEffect(() => {
    if (active && autofocusTarget === "container" && contentRef.current) {
      contentRef.current.focus();
    }
  }, [active, autofocusTarget]);

  // -- Render Activator --
  const ActivatorWrapper = activatorWrapper as any; // Dynamic tag

  // Clone activator to add ref if it's a valid element, otherwise wrap
  const renderedActivator = (
    <ActivatorWrapper ref={activatorRef} className="odi-popover-activator">
      {activator}
    </ActivatorWrapper>
  );

  // -- Render Overlay --
  const portalContainer =
    typeof document !== "undefined" ? document.body : null;

  if (!portalContainer) return renderedActivator;

  return (
    <>
      {renderedActivator}
      {active &&
        createPortal(
          <div
            ref={contentRef}
            className={`odi-popover-overlay ${popoverVariants({
              sectioned,
              fullWidth,
              fullHeight,
              fluidContent,
              fixed,
              hideOnPrint,
            })}`}
            style={positionStyle}
            tabIndex={-1} // Allow focus
            role={ariaHaspopup === "dialog" ? "dialog" : undefined}
          >
            {children}
          </div>,
          portalContainer
        )}
    </>
  );
};
