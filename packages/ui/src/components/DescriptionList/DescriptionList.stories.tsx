import type { Meta, StoryObj } from "@storybook/react-vite";
import { DescriptionList } from "./index.js";

const meta: Meta<typeof DescriptionList> = {
  title: "Design System/Components/Lists/DescriptionList",
  component: DescriptionList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DescriptionList>;

const items = [
  {
    term: "Logistic",
    description:
      "The management of products or other resources as they travel between a point of origin and a destination.",
  },
  {
    term: "Sole proprietorship",
    description:
      "A business structure where a single individual is both the owner and the operator of the business.",
  },
  {
    term: "Discount code",
    description:
      "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount on a special offer.",
  },
];

export const Default: Story = {
  args: {
    items: items,
  },
};

export const TightGap: Story = {
  args: {
    gap: "tight",
    items: items,
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      ...items,
      {
        term: "Cross-border",
        description:
          "Involving movement or activity across a border between two countries.",
      },
      {
        term: "Wholesale",
        description:
          "The selling of goods in large quantities to be retailed by others.",
      },
    ],
  },
};
