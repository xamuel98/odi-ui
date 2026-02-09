import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonThumbnail } from "./SkeletonThumbnail.js";

const meta: Meta<typeof SkeletonThumbnail> = {
  title: "Design System/Components/Feedback indicators/Skeleton thumbnail",
  component: SkeletonThumbnail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SkeletonThumbnail>;

export const Medium: Story = {
  render: () => <SkeletonThumbnail size="medium" />,
};

export const Large: Story = {
  render: () => <SkeletonThumbnail size="large" />,
};

export const Small: Story = {
  render: () => <SkeletonThumbnail size="small" />,
};

export const ExtraSmall: Story = {
  render: () => <SkeletonThumbnail size="extraSmall" />,
};
