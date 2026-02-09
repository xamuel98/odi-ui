import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonDisplayText } from "./SkeletonDisplayText.js";
import { Card } from "../Card/index.js";
import { Text } from "../Text/index.js";

const meta: Meta<typeof SkeletonDisplayText> = {
  title: "Design System/Components/Feedback indicators/Skeleton display text",
  component: SkeletonDisplayText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkeletonDisplayText>;

export const Default: Story = {
  render: () => (
    <Card padding="400">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SkeletonDisplayText size="medium" maxWidth="120px" />
        <Text as="p" variant="bodyMd">
          This is some text below the skeleton title.
        </Text>
      </div>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card padding="400">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SkeletonDisplayText size="small" maxWidth="100px" />
        <Text as="p" variant="bodyMd">
          This is some text below the skeleton title.
        </Text>
      </div>
    </Card>
  ),
};

export const Large: Story = {
  render: () => (
    <Card padding="400">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SkeletonDisplayText size="large" maxWidth="200px" />
        <Text as="p" variant="bodyMd">
          This is some text below the skeleton title.
        </Text>
      </div>
    </Card>
  ),
};

export const ExtraLarge: Story = {
  render: () => (
    <Card padding="400">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SkeletonDisplayText size="extraLarge" maxWidth="300px" />
        <Text as="p" variant="bodyMd">
          This is some text below the skeleton title.
        </Text>
      </div>
    </Card>
  ),
};

export const InsideCard: Story = {
  render: () => (
    <Card padding="400">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <SkeletonDisplayText size="large" maxWidth="200px" />
        <Text as="p" variant="bodyMd">
          This is some text below the skeleton title.
        </Text>
      </div>
    </Card>
  ),
};
