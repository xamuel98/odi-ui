import { cva } from "class-variance-authority";

export const exceptionListItemVariants = cva("odi-exception-list__item");

export const exceptionListBulletVariants = cva("odi-exception-list__bullet", {
  variants: {
    status: {
      default: "",
      warning: "odi-exception-list__bullet--warning",
      critical: "odi-exception-list__bullet--critical",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

export const exceptionListIconVariants = cva("odi-exception-list__icon", {
  variants: {
    status: {
      default: "",
      warning: "odi-exception-list__icon--warning",
      critical: "odi-exception-list__icon--critical",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

export const exceptionListTitleVariants = cva("odi-exception-list__title", {
  variants: {
    status: {
      default: "",
      warning: "odi-exception-list__title--warning",
      critical: "odi-exception-list__title--critical",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

export const exceptionListDescriptionVariants = cva(
  "odi-exception-list__description",
  {
    variants: {
      truncate: {
        true: "odi-exception-list__description--truncate",
        false: "",
      },
    },
    defaultVariants: {
      truncate: false,
    },
  },
);
