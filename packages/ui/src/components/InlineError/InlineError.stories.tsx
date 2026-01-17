import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { InlineError } from "./InlineError.js";

const meta: Meta<typeof InlineError> = {
  title: "Design System/Components/Selection and input/InlineError",
  component: InlineError,
  tags: ["autodocs"],
  argTypes: {
    message: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof InlineError>;

export const Default: Story = {
  args: {
    message: "Store name is required",
    fieldID: "store-name-error",
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "This is a longer error message that might wrap to a second line depending on the container width. It should align correctly with the icon.",
    fieldID: "long-error",
  },
};
