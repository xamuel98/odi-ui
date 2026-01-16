import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Tooltip } from "./Tooltip.js";
import { ButtonGroup } from "../ButtonGroup/index.js";
import { Button } from "../Button/index.js";

const meta: Meta<typeof Tooltip> = {
  title: "Design System/Components/Overlays/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    preferredPosition: {
      control: "select",
      options: ["above", "below"],
    },
    width: {
      control: "select",
      options: ["default", "wide"],
    },
    padding: {
      control: "select",
      options: ["default", "400"],
    },
    borderRadius: {
      control: "select",
      options: ["100", "200"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: "This is a tooltip",
  },
  render: (args) => (
    <div
      style={{ padding: "100px", display: "flex", justifyContent: "center" }}
    >
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const WithUnderline: Story = {
  args: {
    content: "Helper text",
    hasUnderline: true,
  },
  render: (args) => (
    <div
      style={{ padding: "100px", display: "flex", justifyContent: "center" }}
    >
      <p>
        Here is some text with a{" "}
        <Tooltip {...args}>
          <span>tooltip</span>
        </Tooltip>{" "}
        inside.
      </p>
    </div>
  ),
};

export const Wide: Story = {
  args: {
    content:
      "This is a wide tooltip with more content that might wrap to multiple lines.",
    width: "wide",
  },
  render: (args) => (
    <div
      style={{ padding: "100px", display: "flex", justifyContent: "center" }}
    >
      <Tooltip {...args}>
        <Button>Wide Tooltip</Button>
      </Tooltip>
    </div>
  ),
};

export const CustomDelay: Story = {
  args: {
    content: "Delayed tooltip",
    hoverDelay: 1000,
  },
  render: (args) => (
    <div
      style={{ padding: "100px", display: "flex", justifyContent: "center" }}
    >
      <Tooltip {...args}>
        <Button>Hover for 1s</Button>
      </Tooltip>
    </div>
  ),
};

export const ConsecutiveHover: Story = {
  render: (args) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isWarm, setIsWarm] = useState(false);
    const [timers] = useState<{
      open: NodeJS.Timeout | null;
      close: NodeJS.Timeout | null;
    }>({ open: null, close: null });

    const handleOpen = (id: string) => {
      if (timers.close) {
        clearTimeout(timers.close);
        timers.close = null;
      }

      if (isWarm) {
        setActiveId(id);
      } else {
        timers.open = setTimeout(() => {
          setIsWarm(true);
          setActiveId(id);
        }, 500);
      }
    };

    const handleClose = () => {
      if (timers.open) {
        clearTimeout(timers.open);
        timers.open = null;
      }
      setActiveId(null);

      // Cooldown period
      timers.close = setTimeout(() => {
        setIsWarm(false);
      }, 300);
    };

    const items = [
      { id: "bold", label: "B", tooltip: "Bold" },
      { id: "italic", label: "I", tooltip: "Italic" },
      { id: "underline", label: "U", tooltip: "Underline" },
      { id: "strike", label: "S", tooltip: "Strikethrough" },
    ];

    return (
      <div
        style={{
          padding: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ButtonGroup variant="segmented">
          {items.map((item) => (
            <Tooltip
              key={item.id}
              {...args}
              content={item.tooltip}
              active={activeId === item.id}
              activatorWrapper="" // No wrapper for ButtonGroup compatibility
              hoverDelay={0} // We handle delay manually
              onOpen={() => handleOpen(item.id)}
              onClose={handleClose}
              preferredPosition="above"
            >
              <Button>{item.label}</Button>
            </Tooltip>
          ))}
        </ButtonGroup>
      </div>
    );
  },
};
