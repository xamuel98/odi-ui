import type {
  ResponsiveProp,
  SpaceScale,
} from "../components/Bleed/Bleed.type.js";

/**
 * Helper to get inline styles for negative margins
 * @param value - The margin value
 * @param property - The CSS property to apply the margin to
 * @returns An object with the inline style for the margin
 */
export const getMarginStyle = (
  value: ResponsiveProp<SpaceScale> | undefined,
  property: string
): React.CSSProperties => {
  if (!value) return {};

  // For simple string values, calculate the negative margin
  if (typeof value === "string") {
    const varName = `var(--odi-space-${value})`;
    return { [property]: `calc(-1 * ${varName})` } as React.CSSProperties;
  }

  // For responsive values, we'd need CSS classes or CSS custom properties
  const breakpoints = value as { [key: string]: SpaceScale };
  const xsValue = breakpoints.xs;
  if (xsValue) {
    const varName = `var(--odi-space-${xsValue})`;
    return { [property]: `calc(-1 * ${varName})` } as React.CSSProperties;
  }

  return {};
};
