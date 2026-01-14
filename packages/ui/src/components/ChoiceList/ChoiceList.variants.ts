import { cva, type VariantProps } from "class-variance-authority";

export const choiceListVariants = cva("odi-choice-list", {
  variants: {
    titleHidden: {
      true: "odi-choice-list--title-hidden",
      false: "",
    },
    error: {
      true: "odi-choice-list--error",
      false: "",
    },
    tone: {
      magic: "odi-choice-list--tone-magic",
    },
  },
  defaultVariants: {
    titleHidden: false,
    error: false,
    tone: undefined,
  },
});

export type ChoiceListVariants = VariantProps<typeof choiceListVariants>;
