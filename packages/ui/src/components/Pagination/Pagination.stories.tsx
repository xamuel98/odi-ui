import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination, Key } from "./index.js";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Design System/Components/Navigation/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/**
 * Default pagination with basic next/previous functionality.
 */
export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;

    return (
      <Pagination
        hasPrevious={page > 1}
        hasNext={page < totalPages}
        onPrevious={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
      />
    );
  },
};

/**
 * Pagination with keyboard shortcuts attached to navigation buttons.
 * Use J to go to previous page and K to go to next page.
 */
export const WithKeyboardNavigation: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;

    return (
      <Pagination
        hasPrevious={page > 1}
        hasNext={page < totalPages}
        onPrevious={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
        previousKeys={[Key.KeyJ]}
        nextKeys={[Key.KeyK]}
        previousTooltip="Previous (J)"
        nextTooltip="Next (K)"
      />
    );
  },
};

/**
 * Pagination with a label showing current page information.
 */
export const WithLabel: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;

    return (
      <Pagination
        hasPrevious={page > 1}
        hasNext={page < totalPages}
        onPrevious={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
        label={`Page ${page} of ${totalPages}`}
      />
    );
  },
};

/**
 * Pagination styled for use at the bottom of tables or lists.
 */
export const WithTableType: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;
    const totalItems = 150;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (page - 1) * itemsPerPage + 1;
    const endItem = Math.min(page * itemsPerPage, totalItems);

    return (
      <div style={{ width: "600px" }}>
        <Pagination
          type="table"
          hasPrevious={page > 1}
          hasNext={page < totalPages}
          onPrevious={() => setPage(page - 1)}
          onNext={() => setPage(page + 1)}
          label={`Showing ${startItem}-${endItem} of ${totalItems} items`}
        />
      </div>
    );
  },
};

/**
 * Demonstrates all possible states of the pagination component.
 */
export const AllStates: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Both Disabled</h3>
          <Pagination hasPrevious={false} hasNext={false} />
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>Only Previous Enabled</h3>
          <Pagination
            hasPrevious={true}
            hasNext={false}
            onPrevious={() => console.log("Previous")}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>Only Next Enabled</h3>
          <Pagination
            hasPrevious={false}
            hasNext={true}
            onNext={() => console.log("Next")}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>Both Enabled</h3>
          <Pagination
            hasPrevious={true}
            hasNext={true}
            onPrevious={() => console.log("Previous")}
            onNext={() => console.log("Next")}
          />
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>With Label (Page Type)</h3>
          <Pagination
            hasPrevious={true}
            hasNext={true}
            onPrevious={() => console.log("Previous")}
            onNext={() => console.log("Next")}
            label="Page 5 of 10"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>With Label (Table Type)</h3>
          <Pagination
            type="table"
            hasPrevious={true}
            hasNext={true}
            onPrevious={() => console.log("Previous")}
            onNext={() => console.log("Next")}
            label="Showing 1-20 of 100 items"
          />
        </div>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>With Tooltips</h3>
          <Pagination
            hasPrevious={true}
            hasNext={true}
            onPrevious={() => console.log("Previous")}
            onNext={() => console.log("Next")}
            previousTooltip="Go to previous page"
            nextTooltip="Go to next page"
          />
        </div>
      </div>
    );
  },
};

/**
 * Pagination with URL-based navigation (simulated).
 */
export const WithURLs: Story = {
  args: {
    hasPrevious: true,
    hasNext: true,
    previousURL: "/products?page=1",
    nextURL: "/products?page=3",
    label: "Page 2 of 10",
  },
};

/**
 * Pagination with custom accessibility labels.
 */
export const WithAccessibilityLabels: Story = {
  args: {
    hasPrevious: true,
    hasNext: true,
    onPrevious: () => console.log("Previous"),
    onNext: () => console.log("Next"),
    accessibilityLabel: "Product list pagination",
    accessibilityLabels: {
      previous: "Go to previous page of products",
      next: "Go to next page of products",
    },
  },
};
