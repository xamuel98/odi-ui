import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bleed } from "./index.js";
import { Card } from "../Card/index.js";

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
      <p>Content inside the card padding.</p>
      <Bleed marginInline="400">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds horizontally to the card edges.
        </div>
      </Bleed>
      <p>More content inside the card.</p>
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
      <p>Content in the middle.</p>
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
      <p>Top content</p>
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
      <p>Content above</p>
      <Bleed marginBlock="100">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds vertically with marginBlock 100 (4px).
        </div>
      </Bleed>
      <p>Content below</p>
    </Card>
  ),
};

export const MarginBlockMedium: Story = {
  render: () => (
    <Card>
      <p>Content above</p>
      <Bleed marginBlock="200">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds vertically with marginBlock 200 (8px).
        </div>
      </Bleed>
      <p>Content below</p>
    </Card>
  ),
};

export const MarginBlockLarge: Story = {
  render: () => (
    <Card>
      <p>Content above</p>
      <Bleed marginBlock="600">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds vertically with marginBlock 600 (24px).
        </div>
      </Bleed>
      <p>Content below</p>
    </Card>
  ),
};

export const MarginBlockExtraLarge: Story = {
  render: () => (
    <Card>
      <p>Content above</p>
      <Bleed marginBlock="1000">
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          This content bleeds vertically with marginBlock 1000 (40px).
        </div>
      </Bleed>
      <p>Content below</p>
    </Card>
  ),
};

export const MarginBlockResponsive: Story = {
  render: () => (
    <Card>
      <p>Content above</p>
      <Bleed marginBlock={{ xs: "100", sm: "200", md: "400", lg: "600" }}>
        <div style={{ background: "#e3e3e3", padding: "16px" }}>
          Responsive marginBlock: 100 on xs, 200 on sm, 400 on md, 600 on lg.
        </div>
      </Bleed>
      <p>Content below</p>
    </Card>
  ),
};
