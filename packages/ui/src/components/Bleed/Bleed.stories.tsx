import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bleed } from "./index.js";
import { Card } from "../Card/index.js";
import { Text } from "../Text/index.js";

const meta: Meta<typeof Bleed> = {
  title: "Design System/Components/Layout and structure/Bleed",
  component: Bleed,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Bleed>;

export const HorizontalBleed: Story = {
  render: () => (
    <Card>
      <Text as="p">Content inside the card padding.</Text>
      <Bleed marginInline="400">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds horizontally to the card edges.
        </div>
      </Bleed>
      <Text as="p">More content inside the card.</Text>
    </Card>
  ),
};

export const VerticalBleed: Story = {
  render: () => (
    <Card>
      <Bleed marginBlockStart="400">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds to the top edge.
        </div>
      </Bleed>
      <Text as="p">Content in the middle.</Text>
    </Card>
  ),
};

export const AllDirections: Story = {
  render: () => (
    <Card>
      <Bleed marginInline="400" marginBlock="400">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds in all directions.
        </div>
      </Bleed>
    </Card>
  ),
};

export const SpecificDirections: Story = {
  render: () => (
    <Card>
      <Text as="p">Top content</Text>
      <Bleed marginInlineStart="400" marginBlockEnd="400">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          Bleeds left and bottom only.
        </div>
      </Bleed>
    </Card>
  ),
};

export const MarginBlockSmall: Story = {
  render: () => (
    <Card>
      <Text as="p">Content above</Text>
      <Bleed marginBlock="100">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds vertically with marginBlock 100 (4px).
        </div>
      </Bleed>
      <Text as="p">Content below</Text>
    </Card>
  ),
};

export const MarginBlockMedium: Story = {
  render: () => (
    <Card>
      <Text as="p">Content above</Text>
      <Bleed marginBlock="200">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds vertically with marginBlock 200 (8px).
        </div>
      </Bleed>
      <Text as="p">Content below</Text>
    </Card>
  ),
};

export const MarginBlockLarge: Story = {
  render: () => (
    <Card>
      <Text as="p">Content above</Text>
      <Bleed marginBlock="600">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds vertically with marginBlock 600 (24px).
        </div>
      </Bleed>
      <Text as="p">Content below</Text>
    </Card>
  ),
};

export const MarginBlockExtraLarge: Story = {
  render: () => (
    <Card>
      <Text as="p">Content above</Text>
      <Bleed marginBlock="1000">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds vertically with marginBlock 1000 (40px).
        </div>
      </Bleed>
      <Text as="p">Content below</Text>
    </Card>
  ),
};

export const MarginBlockResponsive: Story = {
  render: () => (
    <Card>
      <Text as="p">Content above</Text>
      <Bleed marginBlock={{ xs: "100", sm: "200", md: "400", lg: "600" }}>
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          Responsive marginBlock: 100 on xs, 200 on sm, 400 on md, 600 on lg.
        </div>
      </Bleed>
      <Text as="p">Content below</Text>
    </Card>
  ),
};
