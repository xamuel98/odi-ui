import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResourceItem } from "./ResourceItem.js";
import { Avatar } from "../Avatar/index.js";
import { MenuHorizontalIcon } from "../../icons/index.js";

const meta: Meta<typeof ResourceItem> = {
  title: "Design System/Components/Lists/ResourceItem",
  component: ResourceItem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ResourceItem>;

export const Default: Story = {
  args: {
    id: "1",
    accessibilityLabel: "View details for Item 1",
    name: "Item 1",
    children: (
      <>
        <h3 style={{ margin: 0, fontSize: "13px", fontWeight: 650 }}>
          Cooper desk lamp
        </h3>
        <div style={{ fontSize: "12px", color: "#6d7175" }}>
          Location: Warehouse A
        </div>
      </>
    ),
  },
};

export const WithUrl: Story = {
  args: {
    id: "1",
    url: "#",
    accessibilityLabel: "View details for Item 1",
    name: "Item 1",
    children: (
      <>
        <h3 style={{ margin: 0, fontSize: "13px", fontWeight: 650 }}>
          Cooper desk lamp
        </h3>
        <div style={{ fontSize: "12px", color: "#6d7175" }}>
          Location: Warehouse A
        </div>
      </>
    ),
  },
};

export const WithMedia: Story = {
  args: {
    ...Default.args,
    media: <Avatar name="Cooper desk lamp" initials="CD" size="md" />,
  },
};

export const Selectable: Story = {
  args: {
    ...WithMedia.args,
    selectable: true,
  },
};

export const Selected: Story = {
  args: {
    ...Selectable.args,
    selected: true,
  },
};

export const WithActions: Story = {
  args: {
    ...WithMedia.args,
    shortcutActions: [
      {
        content: "Edit",
        onAction: () => alert("Edit clicked"),
      },
      {
        content: "Delete",
        onAction: () => alert("Delete clicked"),
      },
    ],
    persistActions: true,
  },
};

export const Disabled: Story = {
  args: {
    ...WithMedia.args,
    disabled: true,
  },
};

export const WithActionList: Story = {
  args: {
    ...WithMedia.args,
    shortcutActions: [
      {
        content: "Edit",
        onAction: () => alert("Edit clicked"),
      },
      {
        title: "More actions",
        actions: [
          {
            content: "Duplicate",
            onAction: () => console.log("Duplicate"),
          },
          {
            content: "Archive",
            onAction: () => console.log("Archive"),
          },
          {
            content: "Delete",
            destructive: true,
            onAction: () => console.log("Delete"),
          },
        ],
        icon: <MenuHorizontalIcon />,
      },
    ],
    persistActions: true,
  },
};
