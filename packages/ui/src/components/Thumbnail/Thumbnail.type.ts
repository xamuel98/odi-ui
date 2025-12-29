import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import type { thumbnailVariants } from "./Thumbnail.variants.js";

export interface ThumbnailProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof thumbnailVariants> {
  /**
   * Size of thumbnail.
   * @default 'medium'
   */
  size?: "extraSmall" | "small" | "medium" | "large" | undefined;
  /**
   * URL for the image or an icon element.
   */
  source: string | ReactNode;
  /**
   * Alt text for the thumbnail image.
   */
  alt: string;
  /**
   * Transparent background.
   */
  transparent?: boolean;
}
