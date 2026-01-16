import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState } from "./EmptyState.js";
import { Card } from "../Card/index.js";
import { Text } from "../Text/index.js";

const meta: Meta<typeof EmptyState> = {
  title: "Design System/Components/Layout and structure/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Card padding="0">
        <Story />
      </Card>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

const placeholderImage =
  "https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png";

export const Default: Story = {
  args: {
    heading: "Manage your inventory",
    image: placeholderImage,
    children: (
      <Text as="p">
        Track and receive your incoming inventory from suppliers.
      </Text>
    ),
    action: {
      content: "Add transfer",
      onAction: () => alert("Add transfer clicked"),
    },
  },
};

export const WithSecondaryAction: Story = {
  args: {
    ...Default.args,
    heading: "Upload a file",
    secondaryAction: {
      content: "Learn more",
      url: "#",
      outline: true,
    },
  },
};

export const WithFooterContent: Story = {
  args: {
    ...Default.args,
    heading: "Enable two-step authentication",
    children: (
      <Text as="p">Protect your account with an extra layer of security.</Text>
    ),
    action: {
      content: "Enable two-step",
      onAction: () => alert("Enable clicked"),
    },
    footerContent: (
      <Text as="p">
        If you lose your mobile device, you can receive a code via email.
      </Text>
    ),
  },
};

export const FullWidth: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    ...Default.args,
    fullWidth: true,
  },
};

export const ImageContained: Story = {
  args: {
    ...Default.args,
    imageContained: true,
  },
};
