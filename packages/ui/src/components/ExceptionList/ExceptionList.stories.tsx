import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExceptionList } from "./ExceptionList.js";
import { Card } from "../Card/index.js";
import { AlertTriangleIcon } from "../../icons/AlertTriangleIcon.js";
import { XCircleIcon } from "../../icons/XCircleIcon.js";
import { InfoIcon } from "../../icons/InfoIcon.js";

const meta: Meta<typeof ExceptionList> = {
  title: "Design System/Components/Feedback indicators/Exception list",
  component: ExceptionList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ExceptionList>;

export const Default: Story = {
  render: () => (
    <div style={{ minWidth: "600px" }}>
      <ExceptionList
        items={[
          {
            icon: <InfoIcon />,
            description: "Description",
          },
          {
            icon: <AlertTriangleIcon />,
            description: "Description",
            status: "warning",
          },
          {
            icon: <XCircleIcon />,
            description: "Description",
            status: "critical",
          },
        ]}
      />
    </div>
  ),
};

export const WithTitles: Story = {
  render: () => (
    <div style={{ minWidth: "600px" }}>
      <ExceptionList
        items={[
          {
            title: "Title",
            description: "Description",
          },
          {
            title: "Title",
            description: "Description",
            status: "warning",
          },
          {
            title: "Title",
            description: "Description",
            status: "critical",
          },
        ]}
      />
    </div>
  ),
};

export const WithIconsAndTitles: Story = {
  render: () => (
    <div style={{ minWidth: "600px" }}>
      <ExceptionList
        items={[
          {
            icon: <InfoIcon />,
            title: "Information",
            description:
              "This is an informational message with additional context.",
          },
          {
            icon: <AlertTriangleIcon />,
            title: "Warning",
            description: "This is a warning message that requires attention.",
            status: "warning",
          },
          {
            icon: <XCircleIcon />,
            title: "Critical Error",
            description:
              "This is a critical error that needs immediate action.",
            status: "critical",
          },
        ]}
      />
    </div>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <ExceptionList
        items={[
          {
            title: "Long Title Example",
            description:
              "This is a very long description that will be truncated when the truncate prop is set to true. It contains a lot of text that would normally wrap to multiple lines.",
            truncate: true,
          },
          {
            icon: <AlertTriangleIcon />,
            title: "Warning with Long Text",
            description:
              "Another very long description that demonstrates the truncation feature with a warning status applied to it.",
            status: "warning",
            truncate: true,
          },
        ]}
      />
    </div>
  ),
};
