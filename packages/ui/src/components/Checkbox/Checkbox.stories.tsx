import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useEffect } from "react";
import { Checkbox } from "./index.js";
import type { CheckboxProps } from "./Checkbox.type.js";

const CheckboxWithHooks = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  useEffect(() => {
    setChecked(args.checked ?? false);
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(isChecked) => {
        setChecked(isChecked);
        args.onChange?.(isChecked, args.id || "");
      }}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: "Design System/Components/Selection and input/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "radio",
      options: [true, false, "indeterminate"],
    },
    tone: {
      control: "select",
      options: [undefined, "magic"],
    },
    onChange: { action: "changed" },
  },
  render: (args) => <CheckboxWithHooks {...args} />,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Basic Checkbox",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    checked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Indeterminate Checkbox",
    checked: "indeterminate",
  },
};

export const WithHelpText: Story = {
  args: {
    label: "Subscribe to newsletter",
    helpText: " You will receive weekly updates about our products.",
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled Checked",
    disabled: true,
    checked: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Agree to terms",
    error: "You must agree to the terms and conditions.",
    checked: false,
  },
};

export const HiddenLabel: Story = {
  args: {
    label: "Select item 1",
    labelHidden: true,
    checked: false,
  },
};

export const MagicTone: Story = {
  args: {
    label: "Magic Tone Checkbox",
    tone: "magic",
    checked: true,
  },
};
