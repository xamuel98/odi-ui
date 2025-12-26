import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "./ButtonGroup.js";
import { Button } from "../Button/Button.js";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: "radio",
      options: ["extraTight", "tight", "loose"],
      description: "Determines the space between button group items.",
      table: {
        defaultValue: { summary: "tight" },
      },
    },
    variant: {
      control: "radio",
      options: ["segmented"],
      description: "Styling variant for group.",
    },
    fullWidth: {
      control: "boolean",
      description: "Buttons will stretch/shrink to occupy the full width.",
    },
    connectedTop: {
      control: "boolean",
      description: "Remove top left and right border radius.",
    },
    noWrap: {
      control: "boolean",
      description:
        "Prevent buttons in button group from wrapping to next line.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
  args: {
    gap: "loose",
  },
};

export const Segmented: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
    </ButtonGroup>
  ),
  args: {
    variant: "segmented",
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <div style={{ width: "100%", border: "1px dashed #ccc", padding: 10 }}>
      {/* Container to show full width behavior */}
      <ButtonGroup {...args}>
        <Button>Full</Button>
        <Button>Width</Button>
        <Button>Group</Button>
      </ButtonGroup>
    </div>
  ),
  args: {
    fullWidth: true,
    variant: "segmented",
  },
};

export const SegmentedConnectedTop: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 400,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: 16,
          background: "#f9f9f9",
          borderBottom: "1px solid #e3e3e3",
        }}
      >
        Card Header or Preview
      </div>
      <ButtonGroup {...args}>
        <Button fullWidth>Option A</Button>
        <Button fullWidth>Option B</Button>
      </ButtonGroup>
    </div>
  ),
  args: {
    variant: "segmented",
    connectedTop: true,
    fullWidth: true,
  },
};
