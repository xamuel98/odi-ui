import type { Meta, StoryObj } from "@storybook/react-vite";
import { Listbox } from "./Listbox.js";
import { PlusIcon } from "../../icons/index.js";
import { AutoSelection } from "../../enums/auto-selection.enum.js";

const meta: Meta<typeof Listbox> = {
  title: "Design System/Components/Lists/Listbox",
  component: Listbox,
  tags: ["autodocs"],
  argTypes: {
    autoSelection: {
      control: { type: "select" },
      options: [
        AutoSelection.FirstSelected,
        AutoSelection.First,
        AutoSelection.None,
      ],
    },
    enableKeyboardControl: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Listbox>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300 }}>
      <Listbox {...args} onSelect={(val) => console.log("Selected:", val)}>
        <Listbox.Option value="1">Option 1</Listbox.Option>
        <Listbox.Option value="2">Option 2</Listbox.Option>
        <Listbox.Option value="3">Option 3</Listbox.Option>
      </Listbox>
    </div>
  ),
};

export const WithSections: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300 }}>
      <Listbox {...args}>
        <Listbox.Header>Section 1</Listbox.Header>
        <Listbox.Option value="1.1">Item 1.1</Listbox.Option>
        <Listbox.Option value="1.2" divider>
          Item 1.2
        </Listbox.Option>

        <Listbox.Header>Section 2</Listbox.Header>
        <Listbox.Option value="2.1">Item 2.1</Listbox.Option>
        <Listbox.Option value="2.2" disabled>
          Item 2.2 (Disabled)
        </Listbox.Option>
      </Listbox>
    </div>
  ),
};

export const WithActions: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300 }}>
      <Listbox {...args}>
        <Listbox.Option value="1" divider>
          Existing Option
        </Listbox.Option>
        <Listbox.Action value="add" icon={<PlusIcon />}>
          Add new item
        </Listbox.Action>
      </Listbox>
    </div>
  ),
};

export const SelectedState: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300 }}>
      <Listbox {...args} autoSelection={AutoSelection.None}>
        <Listbox.Option value="1" selected>
          Selected Option
        </Listbox.Option>
        <Listbox.Option value="2">Option 2</Listbox.Option>
      </Listbox>
    </div>
  ),
};

export const DestructiveOption: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300 }}>
      <Listbox {...args}>
        <Listbox.Option value="edit">Edit</Listbox.Option>
        <Listbox.Option value="delete" destructive>
          Delete
        </Listbox.Option>
      </Listbox>
    </div>
  ),
};

export const LoadingState: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300 }}>
      <Listbox {...args}>
        <Listbox.TextOption color="subdued">
          Loading items...
        </Listbox.TextOption>
        <Listbox.Loading>Fetching data</Listbox.Loading>
      </Listbox>
    </div>
  ),
};
