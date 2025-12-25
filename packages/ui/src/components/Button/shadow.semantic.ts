import {
  darkBorderColor,
  primitiveShadow,
  shadowColor,
  whiteColor,
} from "../../tokens/index.js";

export const buttonShadowSemantics = {
  default: `${primitiveShadow.x[0]} -${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #B5B5B5 inset,
                -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #E3E3E3 inset,
                ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #E3E3E3 inset,
                ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #E3E3E3 inset`,

  hover: `${primitiveShadow.x[0]} -${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #CCC inset,
                ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #EBEBEB inset,
                -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} #EBEBEB inset,
                ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #EBEBEB inset`,

  inset: `-${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[12]}) inset,
                ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[12]}) inset,
                ${primitiveShadow.x[0]} ${primitiveShadow.y[2]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${darkBorderColor} ${primitiveShadow.opacity[20]}) inset`,

  primary: {
    default: `${primitiveShadow.x[0]} ${primitiveShadow.y[2]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                  ${primitiveShadow.x[2]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                  -${primitiveShadow.x[2]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                  ${primitiveShadow.x[0]} -${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[1]} #000 inset,
                  ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #000 inset`,

    hover: `${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[24]}) inset,
                  ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                  -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                  ${primitiveShadow.x[0]} -${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #000 inset,
                  ${primitiveShadow.x[0]} -${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[1]} #000 inset`,

    inset: `${primitiveShadow.x[0]} ${primitiveShadow.y[3]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} #000 inset`,

    success: {
      default: `${primitiveShadow.x[0]} -${primitiveShadow.y["015"]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[25]}) inset,
                    ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                    -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[48]}) inset`,

      hover: `${primitiveShadow.x[0]} -${primitiveShadow.y["015"]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[25]}) inset,
                    -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[48]}) inset`,

      inset: `-${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[0]} ${primitiveShadow.y[2]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[60]}) inset`,
    },

    critical: {
      default: `${primitiveShadow.x[0]} -${primitiveShadow.y["015"]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[25]}) inset,
                    ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                    -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[48]}) inset`,

      hover: `${primitiveShadow.x[0]} -${primitiveShadow.y["015"]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[25]}) inset,
                    -${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[0]} ${primitiveShadow.y[1]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${whiteColor} ${primitiveShadow.opacity[48]}) inset`,

      inset: `-${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[1]} ${primitiveShadow.y[0]} ${primitiveShadow.blur[1]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[20]}) inset,
                    ${primitiveShadow.x[0]} ${primitiveShadow.y[2]} ${primitiveShadow.blur[0]} ${primitiveShadow.spread[0]} ${shadowColor} ${primitiveShadow.opacity[60]}) inset`,
    },
  },
};
