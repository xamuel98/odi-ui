import { primitiveBorder } from "./primitives/border.js";

export const border = {
  borderRadiusCard: primitiveBorder.radius["300"],
  borderRadiusButton: primitiveBorder.radius["200"],
  borderRadiusPopover: primitiveBorder.radius["300"],
} as const;
