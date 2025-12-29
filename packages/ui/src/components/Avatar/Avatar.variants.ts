import { cva, type VariantProps } from "class-variance-authority";

export const avatarVariants = cva("odi-avatar", {
  variants: {
    size: {
      xs: "odi-avatar--size-xs",
      sm: "odi-avatar--size-sm",
      md: "odi-avatar--size-md",
      lg: "odi-avatar--size-lg",
      xl: "odi-avatar--size-xl",
    },
    shape: {
      square: "odi-avatar--shape-square",
      circle: "odi-avatar--shape-circle",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "square",
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
