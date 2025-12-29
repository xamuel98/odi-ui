import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "./Spinner.js";

const meta: Meta<typeof Spinner> = {
  title: "Design System/Components/Feedback Indicators/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "large"],
      description: "Size of the spinner.",
      table: {
        defaultValue: { summary: "large" },
      },
    },
    type: {
      control: "radio",
      options: ["ring", "ring-with-bg"],
      description: "Type of the spinner.",
      table: {
        defaultValue: { summary: "ring" },
      },
    },
    accessibilityLabel: {
      control: "text",
      description: "Accessible label for the spinner.",
    },
    hasFocusableParent: {
      control: "boolean",
      description:
        "Allows the component to apply the correct accessibility roles based on focus.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

const SIZES = ["small", "large"] as const;
const TYPES = ["ring", "ring-with-bg"] as const;

export const Default: Story = {
  args: {
    size: "large",
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {SIZES.map((size) => (
          <div
            key={size}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12, fontFamily: "monospace" }}>
              {size}
            </span>
            <Spinner {...args} size={size} />
          </div>
        ))}
      </div>
    );
  },
  args: {
    type: "ring",
  },
};

export const Types: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        {TYPES.map((type) => (
          <div
            key={type}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 12, fontFamily: "monospace" }}>
              {type}
            </span>
            <Spinner {...args} type={type} />
          </div>
        ))}
      </div>
    );
  },
  args: {
    size: "large",
  },
};
