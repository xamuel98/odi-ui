import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag.js";

const meta: Meta<typeof Tag> = {
  title: "Design System/Components/Selection and input/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["large", undefined],
    },
    tone: {
      control: { type: "select" },
      options: ["default", "success", "warning", "critical", "magic"],
    },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const ToneSuccess: Story = {
  args: {
    children: "Success",
    tone: "success",
  },
};

export const ToneWarning: Story = {
  args: {
    children: "Warning",
    tone: "warning",
  },
};

export const ToneCritical: Story = {
  args: {
    children: "Critical",
    tone: "critical",
  },
};

export const ToneMagic: Story = {
  args: {
    children: "Magic",
    tone: "magic",
  },
};

export const Removable: Story = {
  args: {
    children: "Label",
    onRemove: () => alert("Removed!"),
    accessibilityLabel: "Remove tag",
  },
};

export const Clickable: Story = {
  args: {
    children: "Label",
    onClick: () => alert("Clicked!"),
  },
};

export const WithLink: Story = {
  args: {
    children: "Label",
    url: "#",
  },
};

export const RemovableWithLink: Story = {
  args: {
    children: "Label",
    url: "#",
    tone: "magic",
    onRemove: () => alert("Removed!"),
  },
};

export const Disabled: Story = {
  args: {
    children: "Label",
    disabled: true,
    onClick: () => alert("Should not click"),
  },
};

export const DisabledRemovable: Story = {
  args: {
    children: "Label",
    onRemove: () => alert("Removed!"),
    accessibilityLabel: "Remove tag",
    disabled: true,
  },
};
