import { cva, type VariantProps } from "class-variance-authority";

export const textFieldVariants = cva("odi-textfield", {
  variants: {
    variant: {
      inherit: "odi-textfield--variant-inherit",
      borderless: "odi-textfield--variant-borderless",
    },
    size: {
      medium: "odi-textfield--size-medium",
      slim: "odi-textfield--size-slim",
    },
    tone: {
      magic: "odi-textfield--tone-magic",
    },
    disabled: {
      true: "odi-textfield--disabled",
    },
    readOnly: {
      true: "odi-textfield--readonly",
    },
    error: {
      true: "odi-textfield--error",
    },
    multiline: {
      true: "odi-textfield--multiline",
    },
    monospaced: {
      true: "odi-textfield--monospaced",
    },
    align: {
      left: "odi-textfield--align-left",
      center: "odi-textfield--align-center",
      right: "odi-textfield--align-right",
    },
  },
  defaultVariants: {
    variant: "inherit",
    size: "medium",
    align: "left",
  },
});

export type TextFieldVariants = VariantProps<typeof textFieldVariants>;
