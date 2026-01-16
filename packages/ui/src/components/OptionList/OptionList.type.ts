import type { ReactElement, ReactNode } from "react";

export interface IconProps {
  source: any;
  tone?:
    | "base"
    | "inherit"
    | "subdued"
    | "caution"
    | "warning"
    | "critical"
    | "interactive"
    | "info"
    | "success"
    | "primary"
    | "emphasis"
    | "magic"
    | "textCaution"
    | "textWarning"
    | "textCritical"
    | "textInfo"
    | "textSuccess"
    | "textPrimary"
    | "textMagic";
  accessibilityLabel?: string;
}

export interface AvatarProps {
  /** Size of avatar. Defaults to 'medium'. */
  size?: "extraSmall" | "small" | "medium" | "large";
  name?: string;
  initials?: string;
  customer?: boolean;
  source?: string;
  onError?: () => void;
  accessibilityLabel?: string;
}

export interface ThumbnailProps {
  /** Size of thumbnail. Defaults to 'medium'. */
  size?: "extraSmall" | "small" | "medium" | "large";
  source: any;
  alt: string;
  transparent?: boolean;
}

export interface OptionDescriptor {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  active?: boolean;
  id?: string;
  /** Media to display to the left of the option content. */
  media?: ReactElement<IconProps | ThumbnailProps | AvatarProps>;
}

export interface SectionDescriptor {
  options: OptionDescriptor[];
  title?: string;
}

export interface OptionListProps {
  /** A unique identifier for the option list. */
  id?: string;
  /** List title. */
  title?: string;
  /** Collection of options to be listed. */
  options?: OptionDescriptor[];
  /** Sections containing a header and related options. */
  sections?: SectionDescriptor[];
  /** The selected options. */
  selected: string[];
  /** Allow more than one option to be selected. */
  allowMultiple?: boolean;
  /** Defines a specific role attribute for the list itself. */
  role?: string;
  /** Vertically align child content to the center, top, or bottom. */
  verticalAlign?: "top" | "center" | "bottom";
  /** Callback when selection is changed. */
  onChange: (selected: string[]) => void;
  /** Callback when pointer enters an option. */
  onPointerEnterOption?: (value: string) => void;
  /** Callback when focusing an option. */
  onFocusOption?: (value: string) => void;
}
