import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActionList } from "./index.js";
import { PersonIcon } from "../../icons/index.js";
import { Badge } from "../Badge/index.js";

const meta: Meta<typeof ActionList> = {
  title: "Design System/Components/Lists/ActionList",
  component: ActionList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ActionList>;

const items = [
  { content: "Import file" },
  { content: "Export file", icon: <PersonIcon /> },
  { content: "Duplicate", disabled: true },
  { content: "Delete", destructive: true },
];

export const Default: Story = {
  args: {
    items: items,
  },
};

export const WithSections: Story = {
  args: {
    sections: [
      {
        title: "File options",
        items: [{ content: "Import" }, { content: "Export" }],
      },
      {
        title: "Dangerous options",
        items: [{ content: "Delete", destructive: true }],
      },
    ],
  },
};

export const WithLinks: Story = {
  args: {
    items: [
      {
        content: "Google (New Tab)",
        url: "https://google.com",
        external: true,
      },
      { content: "Same Tab Link", url: "#" },
    ],
  },
};

export const Filterable: Story = {
  args: {
    allowFiltering: true,
    items: Array.from({ length: 15 }, (_, i) => ({
      content: `Item ${i + 1}`,
    })),
  },
};

export const FixedWidth: Story = {
  render: (args) => (
    <div style={{ width: "300px", border: "1px dashed red" }}>
      <ActionList {...args} />
    </div>
  ),
  args: {
    items: [{ content: "Item that should stretch" }, { content: "Short" }],
  },
};

export const WithMetadata: Story = {
  args: {
    items: [
      {
        content: "Update Profile",
        helpText: "Change your personal information",
        icon: <PersonIcon />,
      },
      {
        content: "Notifications",
        suffix: (
          <Badge tone="info" size="small">
            New
          </Badge>
        ),
      },
      {
        content: "Settings",
        suffix: <span style={{ color: "gray", fontSize: "12px" }}>⌘S</span>,
      },
    ],
  },
};

export const WithMedia: Story = {
  args: {
    items: [
      {
        content: "User 1",
        image: "https://i.pravatar.cc/150?u=1",
        helpText: "user1@example.com",
      },
      {
        content: "User 2",
        image: "https://i.pravatar.cc/150?u=2",
        helpText: "user2@example.com",
      },
    ],
  },
};

export const WithTruncation: Story = {
  render: (args) => (
    <div style={{ width: "200px", border: "1px dashed red" }}>
      <ActionList {...args} />
    </div>
  ),
  args: {
    items: [
      {
        content:
          "This is a very long item that should truncate because it exceeds the width",
        truncate: true,
      },
      {
        content: "This item uses ellipsis prop",
        ellipsis: true,
      },
    ],
  },
};

export const Hierarchy: Story = {
  args: {
    items: [
      { content: "Parent Item" },
      { content: "Child Item 1", variant: "indented" },
      { content: "Child Item 2", variant: "indented" },
      { content: "Other Item" },
    ],
  },
};

export const States: Story = {
  args: {
    items: [
      { content: "Active Item", active: true },
      { content: "Disabled Item", disabled: true },
      { content: "Destructive Item", destructive: true },
    ],
  },
};
