import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./index.js";
import { Button } from "../Button/index.js";
import { Text } from "../Text/index.js";

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
      <Text as="p">This is a basic card with default styling.</Text>
    </Card>
  ),
};

export const WithSubduedBackground: Story = {
  render: () => (
    <Card background="bg-surface-secondary">
      <Text as="p">This card has a subdued background.</Text>
    </Card>
  ),
};

export const WithVaryingPadding: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Card padding="200">
        <Text as="p">Padding: 200 (8px)</Text>
      </Card>
      <Card padding="400">
        <Text as="p">Padding: 400 (16px - default)</Text>
      </Card>
      <Card padding="600">
        <Text as="p">Padding: 600 (24px)</Text>
      </Card>
    </div>
  ),
};

export const WithResponsiveBorderRadius: Story = {
  render: () => (
    <Card roundedAbove="sm">
      <Text as="p">
        This card has no border radius on mobile, but rounded corners on sm+
        breakpoints.
      </Text>
    </Card>
  ),
};

export const WithSection: Story = {
  render: () => (
    <Card>
      <Card.Section>
        <Text as="p">This is content inside a section.</Text>
      </Card.Section>
    </Card>
  ),
};

export const WithSubduedSection: Story = {
  render: () => (
    <Card>
      <Text as="p">Regular card content above.</Text>
      <Card.Section subdued>
        <Text as="p">This section has a subdued background.</Text>
      </Card.Section>
    </Card>
  ),
};

export const WithMultipleSections: Story = {
  render: () => (
    <Card>
      <Card.Section>
        <Text as="p">First section content.</Text>
      </Card.Section>
      <Card.Section>
        <Text as="p">Second section content.</Text>
      </Card.Section>
      <Card.Section>
        <Text as="p">Third section content.</Text>
      </Card.Section>
    </Card>
  ),
};

export const WithMultipleTitledSections: Story = {
  render: () => (
    <Card>
      <Card.Section title="Section One">
        <Text as="p">Content for section one.</Text>
      </Card.Section>
      <Card.Section title="Section Two">
        <Text as="p">Content for section two.</Text>
      </Card.Section>
    </Card>
  ),
};

export const WithFlushedSection: Story = {
  render: () => (
    <Card>
      <Text as="p">Content above</Text>
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
        <Text as="p">Manage your products here.</Text>
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
        <Text as="p">This action cannot be undone.</Text>
      </Card.Section>
    </Card>
  ),
};

export const WithSeparateHeader: Story = {
  render: () => (
    <Card>
      <Card.Header title="Card Title" />
      <Text as="p">Card body content goes here.</Text>
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
      <Text as="p">Manage your products from here.</Text>
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
      <Text as="p">Configure your settings.</Text>
    </Card>
  ),
};

export const WithFooterActions: Story = {
  render: () => (
    <Card>
      <Text as="p">Card content here.</Text>
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
      <Text as="p">Card content here.</Text>
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
      <Text as="p">Are you sure you want to delete this?</Text>
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
      <Text as="p">Custom React node as title.</Text>
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
        <Text as="p">This card demonstrates all available features.</Text>
      </Card.Section>
      <Card.Section
        title="Details"
        actions={
          <Button size="micro" variant="plain">
            View all
          </Button>
        }
      >
        <Text as="p">Section with title and actions.</Text>
      </Card.Section>
      <Card.Section subdued>
        <Text as="p">A subdued section for less important info.</Text>
      </Card.Section>
      <Card.Footer
        primaryAction={<Button>Save changes</Button>}
        secondaryActions={<Button variant="tertiary">Cancel</Button>}
      />
    </Card>
  ),
};
