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

export const Default: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Ring: Story = {
  args: {
    type: "ring",
  },
};

export const RingWithBg: Story = {
  args: {
    type: "ring-with-bg",
  },
};
