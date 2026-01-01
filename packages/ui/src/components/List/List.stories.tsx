import type { Meta, StoryObj } from "@storybook/react-vite";
import { List } from "./index.js";

const meta: Meta<typeof List> = {
  title: "Design System/Components/Lists/List",
  component: List,
  tags: ["autodocs"],
  subcomponents: { "List.Item": List.Item } as any,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Bullet: Story = {
  render: (args) => (
    <List {...args}>
      <List.Item>Yellow shirt</List.Item>
      <List.Item>Red shirt</List.Item>
      <List.Item>Green shirt</List.Item>
    </List>
  ),
  args: {
    type: "bullet",
  },
};

export const Number: Story = {
  render: (args) => (
    <List {...args}>
      <List.Item>First item</List.Item>
      <List.Item>Second item</List.Item>
      <List.Item>Third item</List.Item>
    </List>
  ),
  args: {
    type: "number",
  },
};

export const ExtraTightGap: Story = {
  render: (args) => (
    <List {...args}>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
    </List>
  ),
  args: {
    gap: "extraTight",
  },
};

export const LooseGap: Story = {
  render: (args) => (
    <List {...args}>
      <List.Item>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
    </List>
  ),
  args: {
    gap: "loose",
  },
};
