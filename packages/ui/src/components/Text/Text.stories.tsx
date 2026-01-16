import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text.js";

const meta: Meta<typeof Text> = {
  title: "Design System/Components/Typography/Text",
  component: Text,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is some default text.",
    as: "p",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Text as="h1" variant="heading3xl">
        Heading 3XL
      </Text>
      <Text as="h2" variant="heading2xl">
        Heading 2XL
      </Text>
      <Text as="h3" variant="headingXl">
        Heading XL
      </Text>
      <Text as="h4" variant="headingLg">
        Heading LG
      </Text>
      <Text as="h5" variant="headingMd">
        Heading MD
      </Text>
      <Text as="h6" variant="headingSm">
        Heading SM
      </Text>
      <Text as="p" variant="bodyLg">
        Body LG
      </Text>
      <Text as="p" variant="bodyMd">
        Body MD
      </Text>
      <Text as="p" variant="bodySm">
        Body SM
      </Text>
      <Text as="p" variant="bodyXs">
        Body XS
      </Text>
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Text as="p" tone="base">
        Base Text
      </Text>
      <Text as="p" tone="subdued">
        Subdued Text
      </Text>
      <Text as="p" tone="success">
        Success Text
      </Text>
      <Text as="p" tone="caution">
        Caution Text
      </Text>
      <Text as="p" tone="critical">
        Critical Text
      </Text>
      <Text as="p" tone="disabled">
        Disabled Text
      </Text>
      <Text as="p" tone="magic">
        Magic Text
      </Text>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Text as="p" fontWeight="regular">
        Regular Weight
      </Text>
      <Text as="p" fontWeight="medium">
        Medium Weight
      </Text>
      <Text as="p" fontWeight="semibold">
        Semibold Weight
      </Text>
      <Text as="p" fontWeight="bold">
        Bold Weight
      </Text>
    </div>
  ),
};

export const Truncation: Story = {
  args: {
    as: "p",
    truncate: true,
    children:
      "This is a very long text that should be truncated when it exceeds the container width. It is effectively using the truncate prop to handle overflow.",
  },
  decorators: [
    (Story) => (
      <div
        style={{ width: "300px", border: "1px solid #ddd", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
      }}
    >
      <Text as="p" alignment="start">
        Start Aligned
      </Text>
      <Text as="p" alignment="center">
        Center Aligned
      </Text>
      <Text as="p" alignment="end">
        End Aligned
      </Text>
      <Text as="p" alignment="justify">
        Justified text should stretch the text to fit the container width. This
        is appropriate for blocks of text that need to look clean on the sides.
      </Text>
    </div>
  ),
};
