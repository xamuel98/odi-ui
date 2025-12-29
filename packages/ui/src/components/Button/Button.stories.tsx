import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button.js";
import { ChevronDownIcon, ChevronUpIcon } from "../../icons/index.js";
import { useState } from "react";
import { ButtonGroup } from "../ButtonGroup/index.js";

const meta: Meta<typeof Button> = {
  title: "Design System/Components/Actions/Button",
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
    pressed: {
      control: "boolean",
      description: "Set the button to pressed state.",
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

const SIZES = ["micro", "medium", "large"] as const;
const VARIANTS = ["primary", "secondary", "tertiary", "plain"] as const;
const TONES = ["default", "critical", "success"] as const;

export const Default: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary Button",
    variant: "tertiary",
  },
};

export const Plain: Story = {
  args: {
    children: "Plain Button",
    variant: "plain",
  },
};

export const Critical: Story = {
  args: {
    children: "Delete Item",
    tone: "critical",
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    children: "Mark Complete",
    tone: "success",
    variant: "primary",
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {SIZES.map((size) => (
          <Button key={size} {...args} size={size}>
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </Button>
        ))}
      </div>
    );
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  parameters: {
    layout: "padded",
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <Button {...args} icon={<ChevronUpIcon />}>
        Edit
      </Button>
      <Button {...args} icon={<ChevronDownIcon />} iconPosition="end">
        Next
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <Button {...args} icon={<ChevronUpIcon />} iconOnly />
      <Button {...args} icon={<ChevronDownIcon />} iconOnly />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: "Saving...",
    loading: true,
  },
};

export const Pressed: Story = {
  args: {
    children: "Pressed Button",
    pressed: true,
  },
};

export const DisabledState: Story = {
  render: () => {
    return (
      <div style={{ display: "grid", gap: 24, padding: 20 }}>
        {VARIANTS.map((variant) => (
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
            {TONES.map((tone) => (
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
  },
};

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

export const VariantMatrix: Story = {
  render: () => {
    return (
      <div style={{ display: "grid", gap: 24, padding: 20 }}>
        {VARIANTS.map((variant) => (
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
            {TONES.map((tone) => (
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
  },
};
