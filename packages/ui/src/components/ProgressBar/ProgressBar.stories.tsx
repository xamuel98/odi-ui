import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import { ProgressBar } from "./ProgressBar.js";

const meta: Meta<typeof ProgressBar> = {
  title: "Design System/Components/Feedback Indicators/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100 },
    },
    tone: {
      control: "select",
      options: ["highlight", "primary", "success", "critical"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    animated: {
      control: "boolean",
    },
    customFillColor: {
      control: "color",
      description: "Custom background color/gradient for the fill bar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

// Wrapper to simulate animation on mount
const AnimatedWrapper = (props: React.ComponentProps<typeof ProgressBar>) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Small delay to ensure transition happens after mount
    const timer = setTimeout(() => {
      setProgress(props.progress || 0);
    }, 100);
    return () => clearTimeout(timer);
  }, [props.progress]);

  return <ProgressBar {...props} progress={progress} />;
};

export const Default: Story = {
  render: (args) => <AnimatedWrapper {...args} />,
  args: {
    progress: 50,
  },
};

export const Tones: Story = {
  render: (args) => {
    const tones = ["highlight", "primary", "success", "critical"] as const;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {tones.map((tone) => (
          <AnimatedWrapper key={tone} {...args} tone={tone} />
        ))}
      </div>
    );
  },
  args: {
    progress: 60,
  },
};

export const Sizes: Story = {
  render: (args) => {
    const sizes = ["small", "medium", "large"] as const;
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {sizes.map((size) => (
          <AnimatedWrapper key={size} {...args} size={size} />
        ))}
      </div>
    );
  },
  args: {
    progress: 40,
    tone: "primary",
  },
};

export const CustomFill: Story = {
  name: "Custom Fill Color / Gradient",
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <AnimatedWrapper
        {...args}
        customFillColor="#8a2be2" // Solid color
      />
      <AnimatedWrapper
        {...args}
        customFillColor="linear-gradient(90deg, #ff00cc, #333399)" // Gradient
      />
    </div>
  ),
  args: {
    progress: 75,
    size: "medium",
  },
};

export const AnimatedInteraction = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <ProgressBar progress={value} />;
};

export const NoAnimation: Story = {
  render: (args) => <AnimatedWrapper {...args} />,
  args: {
    progress: 50,
    animated: false,
  },
};
