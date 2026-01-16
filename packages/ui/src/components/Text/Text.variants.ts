import { cva } from "class-variance-authority";

export const textVariants = cva("odi-text", {
  variants: {
    alignment: {
      start: "odi-text--align-start",
      center: "odi-text--align-center",
      end: "odi-text--align-end",
      justify: "odi-text--align-justify",
    },
    tone: {
      base: "odi-text--tone-base",
      disabled: "odi-text--tone-disabled",
      inherit: "odi-text--tone-inherit",
      success: "odi-text--tone-success",
      critical: "odi-text--tone-critical",
      caution: "odi-text--tone-caution",
      subdued: "odi-text--tone-subdued",
      "text-inverse": "odi-text--tone-text-inverse",
      "text-inverse-secondary": "odi-text--tone-text-inverse-secondary",
      magic: "odi-text--tone-magic",
      "magic-subdued": "odi-text--tone-magic-subdued",
    },
    fontWeight: {
      regular: "odi-text--weight-regular",
      medium: "odi-text--weight-medium",
      semibold: "odi-text--weight-semibold",
      bold: "odi-text--weight-bold",
    },
    variant: {
      headingXs: "odi-text--variant-headingXs",
      headingSm: "odi-text--variant-headingSm",
      headingMd: "odi-text--variant-headingMd",
      headingLg: "odi-text--variant-headingLg",
      headingXl: "odi-text--variant-headingXl",
      heading2xl: "odi-text--variant-heading2xl",
      heading3xl: "odi-text--variant-heading3xl",
      bodyXs: "odi-text--variant-bodyXs",
      bodySm: "odi-text--variant-bodySm",
      bodyMd: "odi-text--variant-bodyMd",
      bodyLg: "odi-text--variant-bodyLg",
    },
    breakWord: {
      true: "odi-text--break-word",
    },
    numeric: {
      true: "odi-text--numeric",
    },
    truncate: {
      true: "odi-text--truncate",
    },
    visuallyHidden: {
      true: "odi-text--visually-hidden",
    },
    textDecorationLine: {
      "line-through": "odi-text--decoration-line-through",
    },
  },
});
