import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Popover } from "./Popover.js";
import { Button } from "../Button/index.js";
import { PopoverCloseSource } from "./Popover.type.js";
import { ActionList } from "../ActionList/index.js";
import { Listbox } from "../Listbox/index.js";
import { Text } from "../Text/index.js";
import { AutoSelection } from "../../enums/auto-selection.enum.js";

const meta: Meta<typeof Popover> = {
  title: "Design System/Components/Overlays/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    preferredPosition: {
      control: "select",
      options: ["above", "below"],
    },
    preferredAlignment: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((active) => !active);
    const handleClose = () => setActive(false);

    return (
      <div
        style={{ padding: "100px", display: "flex", justifyContent: "center" }}
      >
        <Popover
          {...args}
          active={active}
          activator={
            <Button onClick={toggleActive} disclosure>
              Toggle Popover
            </Button>
          }
          onClose={handleClose}
        >
          <div style={{ padding: "16px" }}>Popover Content</div>
        </Popover>
      </div>
    );
  },
};

export const Sectioned: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((active) => !active);
    const handleClose = () => setActive(false);

    return (
      <div
        style={{ padding: "100px", display: "flex", justifyContent: "center" }}
      >
        <Popover
          {...args}
          active={active}
          sectioned
          activator={
            <Button onClick={toggleActive} disclosure>
              Sectioned Popover
            </Button>
          }
          onClose={handleClose}
        >
          <Text as="p">This content has default padding.</Text>
        </Popover>
      </div>
    );
  },
};

export const CustomPositioning: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((active) => !active);
    const handleClose = () => setActive(false);

    return (
      <div style={{ padding: "200px 100px" }}>
        <Popover
          {...args}
          active={active}
          preferredPosition="above"
          preferredAlignment="left"
          activator={
            <Button onClick={toggleActive} disclosure>
              Above & Left
            </Button>
          }
          onClose={handleClose}
        >
          <div style={{ padding: "16px" }}>Content</div>
        </Popover>
      </div>
    );
  },
};

export const WithActionList: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((active) => !active);
    const handleClose = () => setActive(false);

    return (
      <div
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <Popover
          {...args}
          active={active}
          activator={
            <Button onClick={toggleActive} disclosure>
              Filter Actions
            </Button>
          }
          onClose={handleClose}
        >
          <ActionList
            items={[{ content: "Import file" }, { content: "Export file" }]}
            sections={[
              {
                title: "File options",
                items: [
                  { content: "Copy" },
                  { content: "Delete", destructive: true },
                ],
              },
            ]}
            onActionAnyItem={handleClose}
          />
        </Popover>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    const toggleActive = () => setActive((active) => !active);
    const handleClose = () => setActive(false);

    return (
      <div
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <Popover
          {...args}
          active={active}
          sectioned
          activator={
            <Button onClick={toggleActive} disclosure>
              Login Form
            </Button>
          }
          onClose={handleClose}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              minWidth: "200px",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              handleClose();
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <label htmlFor="email" style={{ fontSize: "0.875rem" }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                style={{
                  padding: "6px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "4px" }}
            >
              <label htmlFor="password" style={{ fontSize: "0.875rem" }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                style={{
                  padding: "6px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <Button type="submit">Login</Button>
          </form>
        </Popover>
      </div>
    );
  },
};

export const LazyLoadedList: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<string[]>([]);

    const toggleActive = () => {
      setActive((active) => {
        if (!active) {
          setLoading(true);
          setTimeout(() => {
            setItems(["Item 1", "Item 2", "Item 3", "Item 4"]);
            setLoading(false);
          }, 1500);
        }
        return !active;
      });
    };

    const handleClose = () => setActive(false);

    return (
      <div
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <Popover
          {...args}
          active={active}
          activator={
            <Button onClick={toggleActive} disclosure>
              Load Items
            </Button>
          }
          onClose={handleClose}
        >
          {loading ? (
            <div style={{ padding: "20px", textAlign: "center" }}>
              Loading...
            </div>
          ) : (
            <ActionList
              items={items.map((i) => ({ content: i }))}
              onActionAnyItem={handleClose}
            />
          )}
        </Popover>
      </div>
    );
  },
};

export const WithListbox: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState<string>("order");
    const toggleActive = () => setActive((active) => !active);
    const handleClose = () => setActive(false);

    const handleSelect = (value: string) => {
      setSelected(value);
      setActive(false);
    };

    const options = [
      { label: "Order Date", value: "order" },
      { label: "Shipping Date", value: "shipping" },
      { label: "Delivery Date", value: "delivery" },
    ];

    const selectedOption = options.find((opt) => opt.value === selected);

    return (
      <div
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <Popover
          {...args}
          active={active}
          activator={
            <Button onClick={toggleActive} disclosure>
              Sort by: {selectedOption?.label}
            </Button>
          }
          onClose={handleClose}
        >
          <div style={{ width: "200px" }}>
            <Listbox
              autoSelection={AutoSelection.FirstSelected}
              onSelect={handleSelect}
            >
              <Listbox.Header>Sort Options</Listbox.Header>
              {options.map((opt) => (
                <Listbox.Option
                  key={opt.value}
                  value={opt.value}
                  selected={selected === opt.value}
                >
                  {opt.label}
                </Listbox.Option>
              ))}
            </Listbox>
          </div>
        </Popover>
      </div>
    );
  },
};
