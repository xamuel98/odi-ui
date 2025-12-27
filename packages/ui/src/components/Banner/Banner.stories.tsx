import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "./Banner.js";
import {
  AlertDiamondIcon,
  AlertTriangleIcon,
  CheckIcon,
  CircleDashedIcon,
  InfoIcon,
} from "../../icons/index.js";

const meta: Meta<typeof Banner> = {
  title: "Design System/Components/Feedback Indicators/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {
    tone: {
      control: "select",
      options: ["info", "success", "warning", "critical"],
    },
    inCard: {
      control: "boolean",
    },
    hideIcon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: {
    title: "Informational Banner",
    children: "This is a standard informational banner.",
    tone: "info",
    icon: <InfoIcon />,
    onDismiss: () => alert("Dismissed"),
  },
};

export const Success: Story = {
  args: {
    title: "Success Banner",
    children: "The operation was completed successfully.",
    tone: "success",
    icon: <CheckIcon />,
    onDismiss: () => alert("Dismissed"),
  },
};

export const Warning: Story = {
  args: {
    title: "Warning Banner",
    children: "Please review your account settings.",
    tone: "warning",
    icon: <AlertTriangleIcon />,
    onDismiss: () => alert("Dismissed"),
  },
};

export const Critical: Story = {
  args: {
    title: "Critical Banner",
    children: "Your account is at risk. Immediate action required.",
    tone: "critical",
    icon: <AlertDiamondIcon />,
    onDismiss: () => alert("Dismissed"),
  },
};

export const InCard = () => {
  const tones = ["info", "success", "warning", "critical"] as const;
  const icons = [
    <InfoIcon />,
    <CheckIcon />,
    <AlertTriangleIcon />,
    <AlertDiamondIcon />,
  ];

  return (
    <div style={{ display: "grid", gap: 24, padding: 20 }}>
      {tones.map((tone, index) => (
        <Banner
          key={tone}
          tone={tone}
          title="In Card Banner"
          children="This banner is styled to fit within a card."
          inCard
          icon={icons[index]}
          onDismiss={() => alert("Dismissed")}
        />
      ))}
    </div>
  );
};

export const WithActions: Story = {
  args: {
    title: "Banner with Actions",
    children: "You can perform actions directly from this banner.",
    tone: "info",
    icon: <InfoIcon />,
    action: {
      content: "Primary Action",
      onAction: () => alert("Primary Action Clicked"),
    },
    secondaryAction: {
      content: "Secondary Action",
      onAction: () => alert("Secondary Action Clicked"),
    },
  },
};

export const Dismissible: Story = {
  args: {
    title: "Dismissible Banner",
    children: "Click the X button to dismiss.",
    tone: "success",
    icon: <CircleDashedIcon />,
    onDismiss: () => alert("Dismissed"),
  },
};

export const HideHeader = () => {
  const tones = ["info", "success", "warning", "critical"] as const;
  const icons = [
    <InfoIcon />,
    <CheckIcon />,
    <AlertTriangleIcon />,
    <AlertDiamondIcon />,
  ];

  return (
    <div style={{ display: "grid", gap: 24, padding: 20 }}>
      {tones.map((tone, index) => (
        <Banner
          key={tone}
          tone={tone}
          title="This title is hidden"
          hideTitle
          children="Message. Link text"
          icon={icons[index]}
          onDismiss={() => alert("Dismissed")}
        />
      ))}
    </div>
  );
};
