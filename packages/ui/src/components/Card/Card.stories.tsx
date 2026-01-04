import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./index.js";
import { Button } from "../Button/index.js";

const meta: Meta<typeof Card> = {
  title: "Design System/Components/Layout and structure/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <p>This is a basic card with default styling.</p>
    </Card>
  ),
};

export const WithSubduedBackground: Story = {
  render: () => (
    <Card background="bg-surface-secondary">
      <p>This card has a subdued background.</p>
    </Card>
  ),
};

export const WithVaryingPadding: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card padding="200">
        <p>Padding: 200 (8px)</p>
      </Card>
      <Card padding="400">
        <p>Padding: 400 (16px - default)</p>
      </Card>
      <Card padding="600">
        <p>Padding: 600 (24px)</p>
      </Card>
    </div>
  ),
};

export const WithResponsiveBorderRadius: Story = {
  render: () => (
    <Card roundedAbove="sm">
      <p>
        This card has no border radius on mobile, but rounded corners on sm+
        breakpoints.
      </p>
    </Card>
  ),
};

export const WithSection: Story = {
  render: () => (
    <Card>
      <Card.Section>
        <p>This is content inside a section.</p>
      </Card.Section>
    </Card>
  ),
};

export const WithSubduedSection: Story = {
  render: () => (
    <Card>
      <p>Regular card content above.</p>
      <Card.Section subdued>
        <p>This section has a subdued background.</p>
      </Card.Section>
    </Card>
  ),
};

export const WithMultipleSections: Story = {
  render: () => (
    <Card>
      <Card.Section>
        <p>First section content.</p>
      </Card.Section>
      <Card.Section>
        <p>Second section content.</p>
      </Card.Section>
      <Card.Section>
        <p>Third section content.</p>
      </Card.Section>
    </Card>
  ),
};

export const WithMultipleTitledSections: Story = {
  render: () => (
    <Card>
      <Card.Section title="Section One">
        <p>Content for section one.</p>
      </Card.Section>
      <Card.Section title="Section Two">
        <p>Content for section two.</p>
      </Card.Section>
    </Card>
  ),
};

export const WithFlushedSection: Story = {
  render: () => (
    <Card>
      <p>Content above</p>
      <Card.Section flush>
        <img
          src="https://picsum.photos/400/150"
          alt="Placeholder"
          style={{ width: "100%", display: "block" }}
        />
      </Card.Section>
    </Card>
  ),
};

export const WithSectionsAndActions: Story = {
  render: () => (
    <Card>
      <Card.Section
        title="Products"
        actions={
          <Button size="micro" variant="plain">
            Add product
          </Button>
        }
      >
        <p>Manage your products here.</p>
      </Card.Section>
    </Card>
  ),
};

export const WithSectionsAndCriticalAction: Story = {
  render: () => (
    <Card>
      <Card.Section
        title="Danger Zone"
        actions={
          <Button size="micro" variant="plain" tone="critical">
            Delete
          </Button>
        }
      >
        <p>This action cannot be undone.</p>
      </Card.Section>
    </Card>
  ),
};

export const WithSeparateHeader: Story = {
  render: () => (
    <Card>
      <Card.Header title="Card Title" />
      <p>Card body content goes here.</p>
    </Card>
  ),
};

export const WithHeaderActions: Story = {
  render: () => (
    <Card>
      <Card.Header
        title="Products"
        actions={<Button size="micro">Add product</Button>}
      />
      <p>Manage your products from here.</p>
    </Card>
  ),
};

export const WithHeaderIconActions: Story = {
  render: () => (
    <Card>
      <Card.Header
        title="Settings"
        actions={
          <Button size="micro" variant="tertiary">
            ⚙️
          </Button>
        }
      />
      <p>Configure your settings.</p>
    </Card>
  ),
};

export const WithFooterActions: Story = {
  render: () => (
    <Card>
      <p>Card content here.</p>
      <Card.Footer primaryAction={<Button>Save</Button>} />
    </Card>
  ),
};

export const WithMultipleFooterActions: Story = {
  render: () => (
    <Card>
      <p>Card content here.</p>
      <Card.Footer
        primaryAction={<Button>Save</Button>}
        secondaryActions={<Button variant="tertiary">Cancel</Button>}
      />
    </Card>
  ),
};

export const WithCustomFooterActions: Story = {
  render: () => (
    <Card>
      <p>Card content here.</p>
      <Card.Footer>
        <Button variant="tertiary">Discard</Button>
        <Button variant="secondary">Save as draft</Button>
        <Button>Publish</Button>
      </Card.Footer>
    </Card>
  ),
};

export const WithCriticalFooterAction: Story = {
  render: () => (
    <Card>
      <p>Are you sure you want to delete this?</p>
      <Card.Footer
        primaryAction={<Button tone="critical">Delete</Button>}
        secondaryActions={<Button variant="tertiary">Cancel</Button>}
      />
    </Card>
  ),
};

export const WithCustomReactNodeTitle: Story = {
  render: () => (
    <Card>
      <Card.Header
        title={
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>📦</span>
            <span>Products</span>
          </div>
        }
      />
      <p>Custom React node as title.</p>
    </Card>
  ),
};

export const WithAllElements: Story = {
  render: () => (
    <Card>
      <Card.Header
        title="Complete Card Example"
        actions={
          <Button size="micro" variant="tertiary">
            Edit
          </Button>
        }
      />
      <Card.Section title="Overview">
        <p>This card demonstrates all available features.</p>
      </Card.Section>
      <Card.Section
        title="Details"
        actions={
          <Button size="micro" variant="plain">
            View all
          </Button>
        }
      >
        <p>Section with title and actions.</p>
      </Card.Section>
      <Card.Section subdued>
        <p>A subdued section for less important info.</p>
      </Card.Section>
      <Card.Footer
        primaryAction={<Button>Save changes</Button>}
        secondaryActions={<Button variant="tertiary">Cancel</Button>}
      />
    </Card>
  ),
};
