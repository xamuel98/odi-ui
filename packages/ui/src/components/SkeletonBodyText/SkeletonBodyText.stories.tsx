import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonBodyText } from "./SkeletonBodyText.js";
import { Card } from "../Card/index.js";
import { Text } from "../Text/index.js";

const meta: Meta<typeof SkeletonBodyText> = {
  title: "Design System/Components/Feedback indicators/Skeleton body text",
  component: SkeletonBodyText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkeletonBodyText>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "800px", padding: "40px" }}>
      <SkeletonBodyText />
    </div>
  ),
};

export const SingleLine: Story = {
  render: () => (
    <div style={{ width: "800px", padding: "40px" }}>
      <SkeletonBodyText lines={1} />
    </div>
  ),
};

export const TenLines: Story = {
  render: () => (
    <div style={{ width: "800px", padding: "40px" }}>
      <SkeletonBodyText lines={10} />
    </div>
  ),
};

export const InsideCard: Story = {
  render: () => (
    <Card padding="400">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Text as="h2" variant="headingMd">
          Product Description
        </Text>
        <SkeletonBodyText lines={5} />
      </div>
    </Card>
  ),
};
