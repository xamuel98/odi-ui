import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonTabs } from "./SkeletonTabs.js";
import { Card } from "../Card/index.js";

const meta: Meta<typeof SkeletonTabs> = {
  title: "Design System/Components/Feedback indicators/Skeleton tabs",
  component: SkeletonTabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkeletonTabs>;

export const Default: Story = {
  render: () => (
    <Card padding="400">
      <div style={{ minWidth: "800px" }}>
        <SkeletonTabs count={2} />
      </div>
    </Card>
  ),
};

export const CustomCount: Story = {
  render: () => (
    <Card padding="400">
      <SkeletonTabs count={5} />
    </Card>
  ),
};

export const Fitted: Story = {
  render: () => (
    <Card padding="400">
      <div style={{ width: "800px" }}>
        <SkeletonTabs count={3} fitted />
      </div>
    </Card>
  ),
};
