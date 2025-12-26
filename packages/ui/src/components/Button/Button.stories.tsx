import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button.js";
import { ChevronDownIcon, ChevronUpIcon } from "../../icons/index.js";
import { useState } from "react";
import { ButtonGroup } from "../ButtonGroup/index.js";

/**
 * Buttons are used to trigger actions or navigate to other pages.
 * They adhere to the Odi UI design system tokens for consistent coloring, typography, and spacing.
 */
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Button` component supports multiple variants, tones, and sizes to fit various contexts. It uses the `secondary` variant by default.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "tertiary", "plain"],
      description: "Changes the visual appearance of the Button.",
      table: {
        defaultValue: { summary: "secondary" },
        type: { summary: "primary | secondary | tertiary | plain" },
      },
    },
    tone: {
      control: "radio",
      options: ["critical", "success", undefined],
      description:
        "Sets the color treatment of the Button for semantic meaning.",
      table: {
        defaultValue: { summary: "undefined (neutral)" },
        type: { summary: "critical | success" },
      },
    },
    size: {
      control: "radio",
      options: ["micro", "medium", "large"],
      description: "Controls the size (height and padding) of the button.",
      table: {
        defaultValue: { summary: "medium" },
        type: { summary: "micro | medium | large" },
      },
    },
    fullWidth: {
      control: "boolean",
      description: "Allows the button to grow to the width of its container.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    icon: {
      control: false,
      description: "Icon element to display before or after the label.",
    },
    iconPosition: {
      control: "radio",
      options: ["start", "end"],
      description: "The position of the icon relative to the label.",
      table: {
        defaultValue: { summary: "start" },
      },
    },
    loading: {
      control: "boolean",
      description:
        "Replaces button text with a spinner/loading state while an action is performed.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disclosure: {
      control: "boolean",
      description:
        "Displays the button with a disclosure chevron icon. Defaults to `down` when true.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    asChild: {
      control: false,
      description:
        "Change the underlying element (e.g. to an `a` tag) using Radix UI Slot pattern.",
    },
    children: {
      description: "The button label or content.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * The default button style, used for secondary actions.
 */
export const Default: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

/**
 * Used for the main action on a screen.
 */
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

/**
 * Used for less important actions.
 */
export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
  },
};

/**
 * Used for the lowest priority actions, resembling a link.
 */
export const Plain: Story = {
  args: {
    children: "Plain Button",
    variant: "plain",
  },
};

/**
 * Destructive actions should use the `critical` tone.
 */
export const Critical: Story = {
  args: {
    children: "Delete Item",
    tone: "critical",
    variant: "primary",
  },
};

/**
 * Positive confirmation actions should use the `success` tone.
 */
export const Success: Story = {
  args: {
    children: "Mark Complete",
    tone: "success",
    variant: "primary",
  },
};

/**
 * Buttons come in three sizes: `micro`, `medium` (default), and `large`.
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Button size="micro">Micro</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

/**
 * Buttons can span the full width of their container.
 */
export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

/**
 * Buttons can include an icon at the start or end of the label.
 */
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Button icon={<ChevronUpIcon />}>Edit</Button>
      <Button icon={<ChevronDownIcon />} iconPosition="end">
        Next
      </Button>
    </div>
  ),
};

/**
 * Buttons can include an icon only.
 */
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16 }}>
      <Button icon={<ChevronUpIcon />} iconOnly />
      <Button icon={<ChevronDownIcon />} iconOnly />
    </div>
  ),
};

/**
 * Buttons can display a loading state, which disables interaction.
 */
export const Loading: Story = {
  args: {
    children: "Saving...",
    loading: true,
  },
};

/**
 * Buttons can be disabled to prevent interaction.
 */
export const DisabledState = () => {
  const variants = ["primary", "secondary", "tertiary", "plain"] as const;
  const tones = ["default", "critical", "success"] as const;

  return (
    <div style={{ display: "grid", gap: 24, padding: 20 }}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{
            display: "grid",
            gridTemplateColumns: "100px repeat(3, 1fr)",
            gap: 16,
            alignItems: "center",
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 12 }}>
            Disabled {variant}
          </span>
          {tones.map((tone) => (
            // implicit default tone for first column
            <Button
              key={`${variant}-${tone}`}
              variant={variant}
              tone={tone === "default" ? undefined : tone}
              disabled
            >
              {tone === "default" ? "Neutral" : tone}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

/**
 * Buttons can include a disclosure chevron, typically used for menus or collapsible content.
 */

// A plain button with a disclosure chevron.
export const PlainDisclosure = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Button
      variant="plain"
      disclosure={expanded ? "up" : "down"}
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      {expanded ? "Less options" : "More options"}
    </Button>
  );
};

// A plain button with a disclosure chevron aligned to the right.
export const RightAlignedDisclosure = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Button
      disclosure={expanded ? "up" : "down"}
      textAlign="end"
      onClick={() => {
        setExpanded(!expanded);
      }}
    >
      {expanded ? "Less options" : "More options"}
    </Button>
  );
};

/**
 * Buttons can be grouped to create a split button.
 */
export const SplitButton = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
    <ButtonGroup variant="segmented">
      <Button>Default Action</Button>
      <Button icon={<ChevronDownIcon />} iconOnly aria-label="More options" />
    </ButtonGroup>

    <ButtonGroup variant="segmented">
      <Button variant="primary">Primary Action</Button>
      <Button
        variant="primary"
        icon={<ChevronDownIcon />}
        iconOnly
        aria-label="More options"
      />
    </ButtonGroup>
  </div>
);

/**
 * A matrix showing all permutations of variants and tones.
 */
export const VariantMatrix = () => {
  const variants = ["primary", "secondary", "tertiary", "plain"] as const;
  const tones = ["default", "critical", "success"] as const;

  return (
    <div style={{ display: "grid", gap: 24, padding: 20 }}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{
            display: "grid",
            gridTemplateColumns: "100px repeat(3, 1fr)",
            gap: 16,
            alignItems: "center",
          }}
        >
          <span style={{ fontFamily: "monospace", fontSize: 12 }}>
            {variant}
          </span>
          {tones.map((tone) => (
            // implicit default tone for first column
            <Button
              key={`${variant}-${tone}`}
              variant={variant}
              tone={tone === "default" ? undefined : tone}
            >
              {tone === "default" ? "Neutral" : tone}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
