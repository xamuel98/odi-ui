import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./index.js";
import { Badge } from "../Badge/index.js";
import { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Design System/Components/Navigation/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const tabs = [
  { id: "all", content: "All" },
  { id: "active", content: "Active" },
  { id: "draft", content: "Draft" },
  { id: "archived", content: "Archived" },
];

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return <Tabs {...args} selected={selected} onSelect={setSelected} />;
  },
  args: {
    tabs: tabs,
  },
};

export const Fitted: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return (
      <div style={{ width: "500px" }}>
        <Tabs {...args} selected={selected} onSelect={setSelected} />
      </div>
    );
  },
  args: {
    tabs: tabs,
    fitted: true,
  },
};

export const WithChildren: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return (
      <Tabs {...args} selected={selected} onSelect={setSelected}>
        <div
          style={{
            padding: "16px",
            background: "#f1f1f1",
            borderRadius: "8px",
          }}
        >
          Panel content for {tabs[selected].content}
        </div>
      </Tabs>
    );
  },
  args: {
    tabs: tabs,
  },
};

export const WithBadges: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return <Tabs {...args} selected={selected} onSelect={setSelected} />;
  },
  args: {
    tabs: [
      { id: "tab1", content: "Tab 1", badge: <Badge size="small">12</Badge> },
      {
        id: "tab2",
        content: "Tab 2",
        badge: (
          <Badge tone="info" size="small">
            3
          </Badge>
        ),
      },
      { id: "tab3", content: "Tab 3" },
    ],
  },
};

export const WithCreateView: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return <Tabs {...args} selected={selected} onSelect={setSelected} />;
  },
  args: {
    tabs: tabs,
    canCreateNewView: true,
  },
};
