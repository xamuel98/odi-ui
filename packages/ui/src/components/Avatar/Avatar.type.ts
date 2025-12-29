import type { VariantProps } from "class-variance-authority";
import type { avatarVariants } from "./Avatar.variants.js";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  /**
   * Size of avatar.
   * @default 'medium'
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Shape of the avatar.
   * @default 'square'
   */
  shape?: "square" | "circle";
  /**
   * The name of the person.
   */
  name?: string;
  /**
   * Initials of person to display.
   */
  initials?: string;
  /**
   * Whether the avatar is for a customer.
   */
  customer?: boolean;
  /**
   * URL of the avatar image which falls back to initials if the image fails to load.
   */
  source?: string;
  /**
   * Callback fired when the image fails to load.
   */
  onError?: () => void;
  /**
   * Accessible label for the avatar image.
   */
  accessibilityLabel?: string;
  /**
   * Additional custom class names
   */
  className?: string;
}
