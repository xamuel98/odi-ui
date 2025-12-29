import type { Meta, StoryObj } from "@storybook/react-vite";
import { Thumbnail } from "./index.js";
import { PersonIcon } from "../../icons/index.js";

const meta: Meta<typeof Thumbnail> = {
  title: "Design System/Components/Images and Icons/Thumbnail",
  component: Thumbnail,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["extraSmall", "small", "medium", "large"],
      description: "Size of thumbnail",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    transparent: {
      control: "boolean",
      description: "Transparent background",
    },
    source: {
      control: "text",
      description: "URL for the image or an icon element",
    },
    alt: {
      control: "text",
      description: "Alt text for the thumbnail image",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Thumbnail>;

export const Default: Story = {
  args: {
    source: "https://i.pravatar.cc/150?u=thumbnail",
    alt: "Thumbnail image",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      {(["extraSmall", "small", "medium", "large"] as const).map((size) => (
        <Thumbnail key={size} {...args} size={size} />
      ))}
    </div>
  ),
  args: {
    source: "https://i.pravatar.cc/150?u=sizes",
    alt: "Thumbnail size test",
  },
};

export const Transparent: Story = {
  args: {
    source: "https://i.pravatar.cc/150?u=transparent",
    alt: "Transparent thumbnail",
    transparent: true,
  },
};

export const WithIcon: Story = {
  args: {
    source: <PersonIcon />,
    alt: "Icon thumbnail",
  },
};

export const BrokenImage: Story = {
  args: {
    source: "https://invalid-url.com/image.png",
    alt: "Broken image",
  },
};
