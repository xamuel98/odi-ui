import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResourceList } from "./ResourceList.js";
import { ResourceItem } from "../ResourceItem/index.js";
import { Avatar } from "../Avatar/index.js";
import { Button } from "../Button/index.js";
import { Card } from "../Card/index.js";
import { DeleteIcon, MenuHorizontalIcon } from "../../icons/index.js";
import { EmptyState } from "../EmptyState/EmptyState.js";
import { Text } from "../Text/index.js";

const meta: Meta<typeof ResourceList> = {
  title: "Design System/Components/Lists/ResourceList",
  component: ResourceList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Card padding="0">
        <Story />
      </Card>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ResourceList>;

const items = [
  {
    id: "1",
    name: "Cooper desk lamp",
    location: "Warehouse A",
    initials: "CD",
  },
  {
    id: "2",
    name: "Essence Upholstered Bed",
    location: "Warehouse B",
    initials: "EB",
  },
  {
    id: "3",
    name: "Ethan Wall Clock",
    location: "Warehouse A",
    initials: "EW",
  },
  {
    id: "4",
    name: "Lily Table Lamp",
    location: "Warehouse C",
    initials: "LT",
  },
  {
    id: "5",
    name: "Ethan Arm chair",
    location: "Warehouse B",
    initials: "EA",
  },
];

const renderItem = (item: any) => {
  const { id, name, location, initials } = item as (typeof items)[0];
  const media = <Avatar size="md" name={name} initials={initials} />;

  return (
    <ResourceItem
      id={id}
      // url="#"
      media={media}
      accessibilityLabel={`View details for ${name}`}
      name={name}
      onClick={() => {}}
    >
      <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 600 }}>{name}</h3>
      <div style={{ fontSize: "12px", color: "#6d7175" }}>
        Location: {location}
      </div>
    </ResourceItem>
  );
};

export const Default: Story = {
  args: {
    items,
    renderItem,
    resourceName: { singular: "product", plural: "products" },
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    items: [],
    renderItem,
    emptyState: (
      <>
        <div style={{ fontWeight: 600 }}>No products found</div>
        <div style={{ color: "#6d7175" }}>
          Try changing the filters or search term
        </div>
      </>
    ),
  },
};

export const CustomizedEmpty: Story = {
  args: {
    items: [],
    renderItem,
    emptyState: (
      <EmptyState
        heading="No products found"
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        action={{
          content: "Add product",
          onAction: () => alert("Add product clicked"),
        }}
      >
        <Text as="p">Try changing the filters or search term</Text>
      </EmptyState>
    ),
  },
};

export const WithDetailedBulkActions: Story = {
  render: (args: React.ComponentProps<typeof ResourceList>) => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
      <ResourceList
        {...args}
        selectedItems={selected}
        onSelectionChange={(newSelected) => {
          if (newSelected === "All") {
            setSelected(items.map((i) => i.id));
          } else {
            setSelected(newSelected);
          }
        }}
        promotedBulkActions={[
          {
            content: "Approve",
            onAction: () => alert("Approve clicked"),
          },
          {
            tooltip: "More Action",
            icon: <MenuHorizontalIcon />,

            onAction: () => alert("Reject clicked"),
          },
        ]}
      />
    );
  },
  args: {
    ...Default.args,
    selectable: true,
    bulkActions: [
      {
        items: [{ content: "Delete", destructive: true }],
      },
    ],
  },
};

export const WithPagination: Story = {
  args: {
    ...Default.args,
    pagination: {
      hasNext: true,
      hasPrevious: false,
      onNext: () => alert("Next page"),
      onPrevious: () => alert("Previous page"),
      label: "1 of 5",
    },
  },
};

export const WithHeaderActions: Story = {
  args: {
    ...Default.args,
    sortOptions: [
      { label: "Newest update", value: "newest" },
      { label: "Oldest update", value: "oldest" },
      { label: "Title A-Z", value: "title" },
    ],
    sortValue: "newest",
    alternateTool: (
      <Button variant="secondary" size="medium">
        New Product
      </Button>
    ),
  },
};

export const WithPopoverBulkActions: Story = {
  render: (args: React.ComponentProps<typeof ResourceList>) => {
    const [selected, setSelected] = useState<string[]>(["1", "2"]);

    return (
      <ResourceList
        {...args}
        selectedItems={selected}
        onSelectionChange={(newSelected) => {
          if (newSelected === "All") {
            setSelected(items.map((i) => i.id));
          } else {
            setSelected(newSelected);
          }
        }}
        promotedBulkActions={[
          {
            content: "Archive",
            onAction: () => console.log("Archive action"),
          },
          {
            title: "More options",
            actions: [
              {
                content: "Add tags",
                onAction: () => console.log("Add tags action"),
              },
              {
                content: "Remove tags",
                onAction: () => console.log("Remove tags action"),
              },
              {
                content: "Delete customers",
                icon: <DeleteIcon />,
                destructive: true,
                onAction: () => console.log("Delete customers action"),
              },
            ],
            icon: <MenuHorizontalIcon />,
            accessibilityLabel: "More actions",
            tooltip: "More options",
          },
        ]}
      />
    );
  },
  args: {
    ...Default.args,
    selectable: true,
  },
};

export const WithSort: Story = {
  render: (args: React.ComponentProps<typeof ResourceList>) => {
    const [sortValue, setSortValue] = useState("newest");
    const [itemsToList, setItems] = useState(items);

    const handleSortChange = (selected: string) => {
      setSortValue(selected);
      const sorted = [...itemsToList].sort((a, b) => {
        if (selected === "title") {
          return a.name.localeCompare(b.name);
        }
        if (selected === "oldest") {
          return parseInt(a.id) - parseInt(b.id);
        }
        // newest
        return parseInt(b.id) - parseInt(a.id);
      });
      setItems(sorted);
    };

    return (
      <ResourceList
        {...args}
        items={itemsToList}
        sortValue={sortValue}
        sortOptions={[
          { label: "Newest update", value: "newest" },
          { label: "Oldest update", value: "oldest" },
          { label: "Title A-Z", value: "title" },
        ]}
        onSortChange={handleSortChange}
      />
    );
  },
  args: {
    ...Default.args,
  },
};

export const WithShortcutActions: Story = {
  render: (args: React.ComponentProps<typeof ResourceList>) => {
    return (
      <ResourceList
        {...args}
        renderItem={(item: any) => {
          const { id, name, location, initials } = item;
          const media = <Avatar size="md" name={name} initials={initials} />;

          return (
            <ResourceItem
              id={id}
              url="#"
              media={media}
              accessibilityLabel={`View details for ${name}`}
              name={name}
              shortcutActions={[
                {
                  content: "View",
                  url: "#",
                },
                {
                  content: "Quick Edit",
                  onAction: () => alert(`Quick edit ${name}`),
                },
              ]}
              persistActions
            >
              <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 600 }}>
                {name}
              </h3>
              <div style={{ fontSize: "12px", color: "#6d7175" }}>
                Location: {location}
              </div>
            </ResourceItem>
          );
        }}
      />
    );
  },
  args: {
    ...Default.args,
  },
};
