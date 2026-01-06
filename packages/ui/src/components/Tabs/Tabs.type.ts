import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { tabsVariants } from "./Tabs.variants.js";

export interface TabProps {
  id: string;
  content: ReactNode;
  badge?: ReactNode;
  accessibilityLabel?: string;
  panelID?: string;
  disabled?: boolean;
}

export interface TabsProps extends VariantProps<typeof tabsVariants> {
  /**
   * The items that map to each Tab.
   */
  tabs: TabProps[];
  /**
   * Content to display in tabs.
   */
  children?: ReactNode;
  /**
   * The index of the currently selected Tab.
   */
  selected: number;
  /**
   * Optional callback invoked when a Tab becomes selected.
   */
  onSelect?: (selectedTabIndex: number) => void;
  /**
   * Whether the Tabs are disabled or not.
   */
  disabled?: boolean;
  /**
   * Whether to show the add new view Tab.
   */
  canCreateNewView?: boolean;
  /**
   * Label for the new view Tab. Will override the default of "Create new view".
   */
  newViewAccessibilityLabel?: string;
  /**
   * Optional callback invoked when a merchant saves a new view from the Modal.
   */
  onCreateNewView?: (value: string) => Promise<boolean>;
  /**
   * Text to replace disclosures horizontal dots.
   */
  disclosureText?: string;
  /**
   * Override z-index of popovers and tooltips.
   */
  disclosureZIndexOverride?: number;
}
