import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./index.js";

const meta: Meta<typeof Avatar> = {
  title: "Design System/Components/Images and Icons/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Size of avatar",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    shape: {
      control: { type: "radio" },
      options: ["square", "circle"],
      description: "Shape of the avatar",
      table: {
        defaultValue: { summary: "square" },
      },
    },
    source: {
      control: "text",
      description: "URL of the avatar image",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: "John Doe",
  },
};

export const WithImage: Story = {
  args: {
    name: "Jane Doe",
    source: "https://i.pravatar.cc/150?u=jane",
  },
};

export const WithImageError: Story = {
  args: {
    name: "Broken Link",
    source: "https://invalid-url.com/image.png",
    shape: "square",
  },
};

export const InitialsOnly: Story = {
  args: {
    initials: "AB",
  },
};

export const Customer: Story = {
  args: {
    customer: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Avatar key={size} {...args} size={size} />
      ))}
    </div>
  ),
  args: {
    name: "Size Test",
  },
};

export const Shapes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <Avatar {...args} shape="square" />
      <Avatar {...args} shape="circle" />
    </div>
  ),
  args: {
    name: "Shape Test",
  },
};

export const ColorVariations: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {/* These names are chosen to generate different hash indices (1-5) */}
      <Avatar name="Alice" />
      <Avatar name="Bob" />
      <Avatar name="Charlie" />
      <Avatar name="David" />
      <Avatar name="Eve" />
    </div>
  ),
};
