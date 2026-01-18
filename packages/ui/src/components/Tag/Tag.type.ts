import React from "react";

interface NonMutuallyExclusiveProps {
  /**
   * Content to display in the tag.
   */
  children?: React.ReactNode;
  /**
   * The size of the tag.
   */
  size?: "large";
  /**
   * The tone of the tag.
   */
  tone?: "default" | "success" | "warning" | "critical" | "magic";
  /**
   * Disables the tag.
   */
  disabled?: boolean;
  /**
   * A string to use when tag has more than textual content.
   */
  accessibilityLabel?: string;
}

export type TagProps = NonMutuallyExclusiveProps &
  (
    | { onClick?(): void; onRemove?: undefined; url?: undefined }
    | { onClick?: undefined; onRemove?(): void; url?: string }
  );
