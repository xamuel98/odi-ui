import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge.js";
import { CircleDashedIcon } from "../../icons/index.js"; // Using existing icons as placeholder

const meta: Meta<typeof Badge> = {
  title: "Design System/Components/Feedback Indicators/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    tone: {
      control: "select",
      options: [
        "default",
        "info",
        "success",
        "attention",
        "warning",
        "critical",
      ],
      description: "Colors and labels the badge with the given tone.",
    },
    progress: {
      control: "select",
      options: ["incomplete", "partiallyComplete", "complete", undefined],
      description: "Render a pip showing the progress of a given task.",
    },
    size: {
      control: "radio",
      options: ["medium", "small"],
    },
    icon: {
      control: false,
      description: "Icon to display to the left of the badge’s content.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge Label",
    tone: "default",
  },
};

export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge tone="default">Default</Badge>
      <Badge tone="info">Info</Badge>
      <Badge tone="success">Success</Badge>
      <Badge tone="attention">Attention</Badge>
      <Badge tone="warning">Warning</Badge>
      <Badge tone="critical">Critical</Badge>
    </div>
  ),
};

export const WithProgress: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge tone="default" progress="incomplete">
        Incomplete
      </Badge>
      <Badge tone="info" progress="partiallyComplete">
        Partially Complete
      </Badge>
      <Badge tone="success" progress="complete">
        Complete
      </Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge tone="default" icon={<CircleDashedIcon />}>
        With Icon
      </Badge>
      <Badge tone="critical" icon={<CircleDashedIcon />}>
        Critical Icon
      </Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge>Small</Badge>
      <Badge size="medium">Medium</Badge>
    </div>
  ),
};
