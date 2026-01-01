import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./index.js";

const meta: Meta<typeof Link> = {
  title: "Design System/Components/Navigation/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Example Link",
    url: "#",
  },
};

export const Monochrome: Story = {
  render: (args) => (
    <div style={{ color: "purple" }}>
      <p style={{ fontSize: "13px", lineHeight: "20px" }}>
        Currently surrounding text is purple. <Link {...args} /> inherits this
        color.
      </p>
    </div>
  ),
  args: {
    children: "Monochrome Link",
    url: "#",
    monochrome: true,
  },
};

export const External: Story = {
  args: {
    children: "Google (External)",
    url: "https://google.com",
    external: true,
  },
};

export const RemoteUnderline: Story = {
  args: {
    children: "No Underline Link",
    url: "#",
    removeUnderline: true,
  },
};

export const ButtonLink: Story = {
  args: {
    children: "Button styled as Link (No URL)",
    onClick: () => alert("Clicked!"),
  },
};
