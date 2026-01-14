import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useEffect } from "react";
import { RadioButton } from "./index.js";
import type { RadioButtonProps } from "./RadioButton.type.js";

const RadioButtonWithHooks = (args: RadioButtonProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  useEffect(() => {
    setChecked(args.checked ?? false);
  }, [args.checked]);

  return (
    <RadioButton
      {...args}
      checked={checked}
      onChange={(isChecked) => {
        setChecked(isChecked);
        args.onChange?.(isChecked, args.id || "");
      }}
    />
  );
};

const meta: Meta<typeof RadioButton> = {
  title: "Design System/Components/Selection and input/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "radio",
      options: [true, false],
    },
    tone: {
      control: "select",
      options: [undefined, "magic"],
    },
    onChange: { action: "changed" },
  },
  render: (args) => <RadioButtonWithHooks {...args} />,
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Basic RadioButton",
    checked: false,
    value: "1",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked RadioButton",
    checked: true,
    value: "2",
  },
};

export const WithHelpText: Story = {
  args: {
    label: "Subscribe to newsletter",
    helpText: "You will receive weekly updates about our products.",
    checked: false,
    value: "3",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled RadioButton",
    disabled: true,
    checked: false,
    value: "4",
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked",
    disabled: true,
    checked: true,
    value: "5",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Invalid selection",
    error: "This field is required.",
    checked: false,
    value: "6",
  },
};

export const MagicTone: Story = {
  args: {
    label: "Magic Tone RadioButton",
    tone: "magic",
    checked: true,
    value: "7",
  },
};
