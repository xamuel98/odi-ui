import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useEffect } from "react";
import { ChoiceList } from "./index.js";
import type { ChoiceListProps } from "./ChoiceList.type.js";

const ChoiceListWithHooks = (args: ChoiceListProps) => {
  const [selected, setSelected] = useState(args.selected ?? []);

  useEffect(() => {
    setSelected(args.selected ?? []);
  }, [args.selected]);

  return (
    <ChoiceList
      {...args}
      selected={selected}
      onChange={(newSelected, name) => {
        setSelected(newSelected);
        args.onChange?.(newSelected, name);
      }}
    />
  );
};

const meta: Meta<typeof ChoiceList> = {
  title: "Design System/Components/Selection and input/ChoiceList",
  component: ChoiceList,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
  },
  render: (args) => <ChoiceListWithHooks {...args} />,
};

export default meta;

type Story = StoryObj<typeof ChoiceList>;

const choices = [
  { label: "Canberra", value: "canberra" },
  { label: "Sydney", value: "sydney" },
  { label: "Melbourne", value: "melbourne" },
];

export const SingleSelection: Story = {
  args: {
    title: "Select a city",
    choices: choices,
    selected: ["sydney"],
    allowMultiple: false,
  },
};

export const MultiSelection: Story = {
  args: {
    title: "Select cities",
    choices: choices,
    selected: ["sydney", "melbourne"],
    allowMultiple: true,
  },
};

export const WithHelpText: Story = {
  args: {
    title: "Shipping Method",
    choices: [
      {
        label: "Standard",
        value: "standard",
        helpText: "3-5 business days",
      },
      {
        label: "Express",
        value: "express",
        helpText: "1-2 business days",
      },
    ],
    selected: ["standard"],
    allowMultiple: false,
  },
};

export const Disabled: Story = {
  args: {
    title: "Select a city",
    choices: choices,
    selected: [],
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    title: "Select a city",
    choices: choices,
    selected: [],
    error: "You must select a city",
  },
};

export const DescribedByError: Story = {
  args: {
    title: "Select a city",
    choices: [
      { label: "Canberra", value: "canberra", describedByError: true },
      { label: "Sydney", value: "sydney" },
    ],
    selected: [],
    error: "Selection invalid",
  },
};

export const WithChildren: Story = {
  args: {
    title: "Subscription",
    choices: [
      {
        label: "Monthly",
        value: "monthly",
      },
      {
        label: "Yearly",
        value: "yearly",
        renderChildren: (isSelected) => (
          <div style={{ color: "green" }}>Save 20% by paying yearly!</div>
        ),
      },
    ],
    selected: ["yearly"],
  },
};

export const MagicTone: Story = {
  args: {
    title: "Select a magic spell",
    choices: [
      { label: "Fireball", value: "fireball" },
      { label: "Ice storm", value: "ice" },
    ],
    selected: ["fireball"],
    tone: "magic",
    allowMultiple: true,
  },
};
