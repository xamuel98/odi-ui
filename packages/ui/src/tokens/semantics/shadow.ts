import { primitiveShadow } from "../primitives/shadow.js";

export const shadowColor = "rgba(0, 0, 0,";
export const whiteColor = "rgba(255, 255, 255,";
export const lightBorderColor = "rgba(204, 204, 204,"; // Corresponds to gray["10"]
export const darkBorderColor = "rgba(26, 26, 26,"; // Corresponds to gray["16"]

const shadowInset = `
  ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[13]}) inset,
  -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[13]}) inset,
  ${primitiveShadow.x[0]} -${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[17]}) inset,
  ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${lightBorderColor} ${primitiveShadow.opacity[50]}) inset
`.trim();

export const shadow = {
  inset: {
    100: `${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[15]}) inset,
          ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[2]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[15]}) inset`,

    200: `-${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[12]}) inset,
          ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[12]}) inset,
          ${primitiveShadow.x[0]} ${primitiveShadow.y[2]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[20]}) inset`,
  },

  elevation: {
    0: `${primitiveShadow.x[0]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[0]})`,

    100: `${shadowInset}, 
        ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[7]})`,

    200: `${shadowInset}, 
        ${primitiveShadow.x[0]} ${primitiveShadow.y[3]} ${primitiveShadow.blur[1]} -${primitiveShadow.spread[1]} ${darkBorderColor} ${primitiveShadow.opacity[7]})`,

    300: `${shadowInset}, 
        ${primitiveShadow.x[0]} ${primitiveShadow.y[4]} ${primitiveShadow.blur[6]} -${primitiveShadow.spread[2]} ${darkBorderColor} ${primitiveShadow.opacity[20]})`,

    400: `${shadowInset}, 
        ${primitiveShadow.x[0]} ${primitiveShadow.y[8]} ${primitiveShadow.blur[16]} -${primitiveShadow.spread[4]} ${darkBorderColor} ${primitiveShadow.opacity[22]})`,

    500: `${shadowInset}, 
        ${primitiveShadow.x[0]} ${primitiveShadow.y[12]} ${primitiveShadow.blur[20]} -${primitiveShadow.spread[8]} ${darkBorderColor} ${primitiveShadow.opacity[24]})`,

    600: `${shadowInset}, 
        ${primitiveShadow.x[0]} ${primitiveShadow.y[20]} ${primitiveShadow.blur[20]} -${primitiveShadow.spread[8]} ${darkBorderColor} ${primitiveShadow.opacity[28]})`,
  },
  bevel: {
    100: `${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[13]}) inset,
          -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[13]}) inset,
          ${primitiveShadow.x[0]} -${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[17]}) inset,
          ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${lightBorderColor} ${primitiveShadow.opacity[50]}) inset`,
  },

  borderInset: `${primitiveShadow.x[0]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[1]} ${shadowColor} ${primitiveShadow.opacity[8]})`,
} as const;
