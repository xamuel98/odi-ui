import type { Meta, StoryObj } from "@storybook/react-vite";
import { CalloutCard } from "./index.js";
import { JugAndPlateIllustration } from "../../svg/index.js";

const meta: Meta<typeof CalloutCard> = {
  title: "Design System/Components/Layout and structure/CalloutCard",
  component: CalloutCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CalloutCard>;

export const Default: Story = {
  args: {
    title: "Customize the style of your checkout",
    children: "Upload your store's logo, change colors and fonts, and more.",
    illustration: <img src={JugAndPlateIllustration} alt="" />,
    primaryAction: {
      content: "Customize",
      onAction: () => console.log("Customize action"),
    },
    onDismiss: () => console.log("Dismissed"),
  },
};

export const WithURLIllustration: Story = {
  args: {
    title: "Add a new sales channel",
    children:
      "Reach more customers by selling on Facebook, Instagram, and more.",
    illustration:
      "https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg",
    primaryAction: {
      content: "Add channel",
      onAction: () => console.log("Add channel"),
    },
    onDismiss: () => console.log("Dismissed"),
  },
};

export const WithSecondaryAction: Story = {
  args: {
    title: "Improve your shipping strategy",
    children: "Learn how to save time and money on shipping.",
    illustration: <img src={JugAndPlateIllustration} alt="" />,
    primaryAction: {
      content: "Learn more",
      onAction: () => console.log("Learn more"),
    },
    secondaryAction: {
      content: "View settings",
      onAction: () => console.log("View settings"),
      variant: "plain",
    },
    onDismiss: () => console.log("Dismissed"),
  },
};

export const NoDismiss: Story = {
  args: {
    title: "Review your account details",
    children:
      "Please ensure your billing information is up to date to avoid service interruption.",
    illustration: <img src={JugAndPlateIllustration} alt="" />,
    primaryAction: {
      content: "Review account",
      onAction: () => console.log("Review action"),
    },
  },
};

export const WithExternalLink: Story = {
  args: {
    title: "Review your account details",
    children:
      "Please ensure your billing information is up to date to avoid service interruption.",
    illustration: <img src={JugAndPlateIllustration} alt="" />,
    primaryAction: {
      content: "Review account",
      url: "https://www.shopify.com",
      external: true,
      onAction: () => console.log("Review action"),
    },
  },
};
