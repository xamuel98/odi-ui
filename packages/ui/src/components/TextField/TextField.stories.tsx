import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useCallback, useMemo, useState } from "react";
import { TextField } from "./TextField.js";
import { Text } from "../Text/index.js";
import { SearchIcon } from "../../icons/index.js";
import type { TextFieldProps } from "./TextField.type.js";

const meta: Meta<typeof TextField> = {
  title: "Design System/Components/Selection and input/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
  argTypes: {
    onChange: { action: "onChange" },
    onClearButtonClick: { action: "onClearButtonClick" },
    onFocus: { action: "onFocus" },
    onBlur: { action: "onBlur" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper for controlled state behavior in Storybook
const TextFieldWithState = (args: TextFieldProps) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <TextField
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange?.(newValue, args.id || "textfield");
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    value: "Value",
  },
};

export const WithPlaceholder: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    value: "",
    placeholder: "Enter some text...",
  },
};

export const WithHelpText: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    helpText: "This is some helpful text to guide the user.",
  },
};

export const WithLabelAction: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    labelAction: { content: "Action", onAction: () => alert("Label action!") },
  },
};

export const WithError: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    error: "This field is required",
    value: "Invalid value",
  },
};

export const Disabled: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    disabled: true,
    value: "Disabled value",
  },
};

export const ReadOnly: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    readOnly: true,
    value: "Readonly value",
  },
};

export const Required: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    required: true,
    requiredIndicator: true,
    label: "Required Field",
  },
};

export const Monospaced: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    monospaced: true,
    value: "RX-78-2",
    label: "Serial Number",
  },
};

export const Loading: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    loading: true,
    value: "Fetching data...",
  },
};

export const Suggestion = (args: TextFieldProps) => {
  const suggestions = useMemo(
    () => [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Icon Outlying Islands",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "U.S. Virgin Islands",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
    []
  );

  const [value, setValue] = useState(args.value || "");
  const [suggestion, setSuggestion] = useState<string | undefined>();

  const handleChange = useCallback(
    (value: string) => {
      const suggestion =
        value &&
        suggestions.find((suggestion) =>
          suggestion.toLowerCase().startsWith(value.toLowerCase())
        );

      setValue(value);
      setSuggestion(suggestion);
    },
    [suggestions]
  );

  return (
    <TextField
      {...args}
      label="State"
      value={value}
      onChange={handleChange}
      suggestion={suggestion}
    />
  );
};

export const SelectTextOnFocus: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    selectTextOnFocus: true,
    value: "Click to select all",
  },
};

export const Multiline: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    multiline: true,
    value:
      "This is a multiline text field.\nIt can contain multiple lines of text.",
  },
};

export const AutoSize: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    multiline: true,
    autoSize: true,
    label: "Auto-sizing Textarea",
    value: "Type more lines to see me grow...",
  },
};

export const WithPrefix: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    prefix: <SearchIcon />,
    placeholder: "Search in Fulfilled",
  },
};

export const WithSuffix: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    suffix: (
      <Text as="span" variant="bodyMd" tone="subdued">
        kg
      </Text>
    ),
    value: "10",
    type: "number",
    align: "right",
  },
};

export const WithClearButton: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    clearButton: true,
    value: "Clear me",
  },
};

export const WithCharacterCount: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    maxLength: 20,
    showCharacterCount: true,
    value: "Start typing...",
  },
};

export const ToneMagic: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "Magic Tone",
    tone: "magic",
    value: "Magic Value",
  },
};

export const NumberSpinner: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "Quantity",
    type: "number",
    value: "1",
    step: 1,
    largeStep: 5,
    helpText: "Use arrow keys or PageUp/PageDown",
  },
};

export const SlimSize: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    size: "slim",
    label: "Slim Input",
    placeholder: "Compact view",
  },
};

export const ConnectedFields: Story = {
  render: (args: TextFieldProps) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextFieldWithState
        {...args}
        label="Weight"
        connectedRight={
          <div
            style={{
              border: "1px solid var(--odi-color-border-default)",
              borderLeft: "none",
              padding: "0 8px",
              display: "flex",
              alignItems: "center",
              background: "var(--odi-color-bg-surface)",
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
            }}
          >
            <span style={{ fontSize: "14px" }}>kg</span>
          </div>
        }
      />
      <TextFieldWithState
        {...args}
        label="Website"
        connectedLeft={
          <div
            style={{
              border: "1px solid var(--odi-color-border-default)",
              borderRight: "none",
              padding: "0 8px",
              display: "flex",
              alignItems: "center",
              background: "var(--odi-color-bg-surface-secondary)",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "var(--odi-color-text-secondary)",
              }}
            >
              https://
            </span>
          </div>
        }
        placeholder="example.com"
      />
    </div>
  ),
};

export const VerticalContent: Story = {
  render: (args) => <TextFieldWithState {...args} />,
  args: {
    label: "Vertical Content Example",
    verticalContent: (
      <div
        style={{
          padding: "8px",
          background: "var(--odi-color-bg-surface-secondary)",
          borderRadius: "4px",
          marginBottom: "8px",
          border: "1px solid var(--odi-color-border-subdued)",
        }}
      >
        <Text as="span" variant="bodySm" tone="subdued">
          This content is rendered via the <code>verticalContent</code> prop,
          sitting between the label and the input.
        </Text>
      </div>
    ),
    placeholder: "Input value",
  },
};
