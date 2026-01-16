import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker.js";
import type { Color } from "./ColorPicker.type.js";

const meta: Meta<typeof ColorPicker> = {
  title: "Design System/Components/Selection and input/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

const ColorPickerWithState = (args: any) => {
  const [color, setColor] = useStateLike<Color>({
    hue: 0,
    saturation: 1,
    brightness: 1,
    alpha: 1,
  });

  return <ColorPicker {...args} color={color} onChange={setColor} />;
};

function useStateLike<T>(initial: T): [T, (v: T) => void] {
  const [val, setVal] = useState(initial);
  return [val, setVal];
}

export const Default: Story = {
  render: (args) => {
    const [color, setColor] = useState<Color>({
      hue: 0,
      saturation: 1,
      brightness: 1,
      alpha: 1,
    });
    return <ColorPicker {...args} color={color} onChange={setColor} />;
  },
};

export const WithAlpha: Story = {
  render: (args) => {
    const [color, setColor] = useState<Color>({
      hue: 200,
      saturation: 0.8,
      brightness: 0.9,
      alpha: 0.5,
    });
    return (
      <ColorPicker {...args} allowAlpha color={color} onChange={setColor} />
    );
  },
};

export const FullWidth: Story = {
  render: (args) => {
    const [color, setColor] = useState<Color>({
      hue: 120,
      saturation: 0.5,
      brightness: 0.8,
      alpha: 1,
    });
    return (
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <ColorPicker {...args} fullWidth color={color} onChange={setColor} />
      </div>
    );
  },
};
