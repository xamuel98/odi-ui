import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge.js";
import { CircleDashedIcon } from "../../icons/index.js";

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
      description: "Icon to display to the left of the badge's content.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const TONES = [
  "default",
  "info",
  "success",
  "attention",
  "warning",
  "critical",
] as const;

const PROGRESS_STATES = [
  { tone: "default", progress: "incomplete", label: "Incomplete" },
  { tone: "info", progress: "partiallyComplete", label: "Partially Complete" },
  { tone: "success", progress: "complete", label: "Complete" },
] as const;

const ICON_ITEMS = [
  { tone: "default", label: "With Icon" },
  { tone: "critical", label: "Critical Icon" },
] as const;

const SIZES = ["small", "medium"] as const;

export const Default: Story = {
  args: {
    children: "Badge Label",
    tone: "default",
  },
};

export const Tones: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {TONES.map((tone) => (
          <Badge key={tone} {...args} tone={tone}>
            {tone.charAt(0).toUpperCase() + tone.slice(1)}
          </Badge>
        ))}
      </div>
    );
  },
};

export const WithProgress: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        {PROGRESS_STATES.map((state) => (
          <Badge
            key={state.tone}
            {...args}
            tone={state.tone as any}
            progress={state.progress as any}
            icon={undefined}
          >
            {state.label}
          </Badge>
        ))}
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8 }}>
        {ICON_ITEMS.map((item) => (
          <Badge
            key={item.tone}
            {...args}
            tone={item.tone as any}
            icon={<CircleDashedIcon />}
            progress={undefined}
          >
            {item.label}
          </Badge>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    return (
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {SIZES.map((size) => (
          <Badge
            key={size}
            {...args}
            size={size === "small" ? undefined : size}
            // Explicitly cast to avoid discriminated union ambiguity in stories
            progress={(args.icon ? undefined : args.progress) as any}
            icon={(args.progress ? undefined : args.icon) as any}
          >
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </Badge>
        ))}
      </div>
    );
  },
};
