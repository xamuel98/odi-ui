import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select.js";
import React, { useState } from "react";

const SelectWithState = (args: any) => {
  const [value, setValue] = useState(args.value || "");
  return <Select {...args} value={value} onChange={(val) => setValue(val)} />;
};

const meta: Meta<typeof Select> = {
  title: "Design System/Components/Selection and input/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    labelHidden: { control: "boolean" },
    labelInline: { control: "boolean" },
    requiredIndicator: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Country",
    options: ["Canada", "United States", "Mexico"],
    placeholder: "Select a country",
  },
};

export const WithInlineLabel: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Country",
    labelInline: true,
    options: ["Canada", "United States", "Mexico"],
    value: "Canada",
  },
};

export const Disabled: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Country",
    disabled: true,
    options: ["Canada", "United States", "Mexico"],
    value: "Canada",
  },
};

export const WithPrefix: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Currency",
    options: [
      { value: "usd", label: "USD", prefix: "$" },
      { value: "eur", label: "EUR", prefix: "€" },
      { value: "gbp", label: "GBP", prefix: "£" },
    ],
    value: "usd",
  },
};

export const WithError: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Country",
    options: ["Canada", "United States", "Mexico"],
    error: "Please select a country",
    placeholder: "Select",
  },
};

export const WithLabelAction: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Country",
    options: ["Canada", "United States", "Mexico"],
    labelAction: {
      content: "Add country",
      onAction: () => alert("Add country clicked"),
    },
    value: "Canada",
  },
};

export const WithOptionGroups: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Location",
    options: [
      {
        title: "North America",
        options: ["Canada", "United States", "Mexico"],
      },
      {
        title: "Europe",
        options: ["United Kingdom", "France", "Germany"],
      },
    ],
    placeholder: "Select a location",
  },
};

export const WithHelpText: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Country",
    options: ["Canada", "United States", "Mexico"],
    helpText: "Choose your billing country",
    value: "Canada",
  },
};

export const MagicTone: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "AI Model",
    options: ["GPT-4", "Claude", "Gemini"],
    tone: "magic",
    value: "GPT-4",
  },
};

export const RequiredIndicator: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: "Country",
    options: ["Canada", "United States", "Mexico"],
    requiredIndicator: true,
    placeholder: "Select a country",
  },
};
