/**
 * Helper to convert HSB to CSS HSL string for display purposes
 * @param h Hue
 * @param s Saturation
 * @param b Brightness
 * @param a Alpha
 * @returns CSS HSL string
 */
export const hsbToCss = (h: number, s: number, b: number, a: number = 1) => {
  // HSB to HSL conversion for CSS
  const l = ((2 - s) * b) / 2;
  const sat = l && l < 1 ? (s * b) / (l < 0.5 ? l * 2 : 2 - l * 2) : s;

  return `hsla(${h}, ${sat * 100}%, ${l * 100}%, ${a})`;
};
