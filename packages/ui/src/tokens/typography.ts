import { primitiveSize } from "./primitives/size.js";
import {
  primitiveFontFamily,
  primitiveFontWeight,
  primitiveLetterSpacing,
} from "./primitives/typography.js";

export const typography = {
  body: {
    xs: {
      fontSize: primitiveSize[275], // 11px
      lineHeight: primitiveSize[300], // 12px
      fontWeight: primitiveFontWeight.regular,
      letterSpacing: primitiveLetterSpacing.normal,
      fontFamily: primitiveFontFamily.sans,
    },

    sm: {
      fontSize: primitiveSize[300], // 12px
      lineHeight: primitiveSize[400], // 16px
      fontWeight: primitiveFontWeight.regular,
      letterSpacing: primitiveLetterSpacing.normal,
      fontFamily: primitiveFontFamily.sans,
    },

    md: {
      fontSize: primitiveSize[325], // 13px
      lineHeight: primitiveSize[500], // 20px
      fontWeight: primitiveFontWeight.regular,
      letterSpacing: primitiveLetterSpacing.dense,
      fontFamily: primitiveFontFamily.sans,
    },

    lg: {
      fontSize: primitiveSize[350], // 14px
      lineHeight: primitiveSize[500], // 20px
      fontWeight: primitiveFontWeight.regular,
      letterSpacing: primitiveLetterSpacing.normal,
      fontFamily: primitiveFontFamily.sans,
    },
  },

  heading: {
    sm: {
      fontSize: primitiveSize[325], // 13px
      lineHeight: primitiveSize[500], // 20px
      fontWeight: primitiveFontWeight.semibold,
      letterSpacing: primitiveLetterSpacing.normal,
      fontFamily: primitiveFontFamily.sans,
    },

    md: {
      fontSize: primitiveSize[350], // 14px
      lineHeight: primitiveSize[500], // 20px
      fontWeight: primitiveFontWeight.semibold,
      letterSpacing: primitiveLetterSpacing.normal,
      fontFamily: primitiveFontFamily.sans,
    },

    lg: {
      fontSize: primitiveSize[500], // 20px
      lineHeight: primitiveSize[600], // 24px
      fontWeight: primitiveFontWeight.semibold,
      letterSpacing: primitiveLetterSpacing.dense,
      fontFamily: primitiveFontFamily.sans,
    },

    xl: {
      fontSize: primitiveSize[600], // 24px
      lineHeight: primitiveSize[800], // 32px
      fontWeight: primitiveFontWeight.bold,
      letterSpacing: primitiveLetterSpacing.dense,
      fontFamily: primitiveFontFamily.sans,
    },

    "2xl": {
      fontSize: primitiveSize[750], // 30px
      lineHeight: primitiveSize[1000], // 40px
      fontWeight: primitiveFontWeight.bold,
      letterSpacing: primitiveLetterSpacing.denser,
      fontFamily: primitiveFontFamily.sans,
    },

    "3xl": {
      fontSize: primitiveSize[900], // 36px
      lineHeight: primitiveSize[1200], // 48px
      fontWeight: primitiveFontWeight.bold,
      letterSpacing: primitiveLetterSpacing.densest,
      fontFamily: primitiveFontFamily.sans,
    },
  },
} as const;
