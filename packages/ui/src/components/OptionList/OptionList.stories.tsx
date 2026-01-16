import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useState } from "react";
import { OptionList } from "./OptionList.js";
import { Card } from "../Card/index.js";
import { Popover } from "../Popover/index.js";
import { Button } from "../Button/index.js";

const meta: Meta<typeof OptionList> = {
  title: "Design System/Components/Lists/OptionList",
  component: OptionList,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OptionList>;

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const options = [
      { value: "byward_market", label: "Byward Market" },
      { value: "centretown", label: "Centretown" },
      { value: "hintonburg", label: "Hintonburg" },
      { value: "westboro", label: "Westboro" },
      { value: "downtown", label: "Downtown" },
    ];

    return (
      <Card>
        <OptionList
          title="Inventory Location"
          onChange={setSelected}
          options={options}
          selected={selected}
        />
      </Card>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const options = [
      { value: "online_store", label: "Online Store" },
      { value: "messenger", label: "Messenger" },
      { value: "facebook", label: "Facebook" },
      { value: "wholesale", label: "Wholesale" },
      { value: "buzzfeed", label: "BuzzFeed" },
    ];

    return (
      <Card>
        <OptionList
          title="Manage sales channels availability"
          onChange={setSelected}
          options={options}
          selected={selected}
          allowMultiple
        />
      </Card>
    );
  },
};

export const WithSections: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const sections = [
      {
        options: [
          { value: "sale_item_type", label: "Sale item type" },
          { value: "sale_kind", label: "Sale kind" },
        ],
      },
      {
        title: "Traffic",
        options: [
          {
            value: "traffic_referrer_source",
            label: "Traffic referrer source",
          },
          { value: "traffic_referrer_host", label: "Traffic referrer host" },
          { value: "traffic_referrer_path", label: "Traffic referrer path" },
        ],
      },
    ];

    return (
      <Card>
        <OptionList
          onChange={setSelected}
          sections={sections}
          selected={selected}
          allowMultiple
        />
      </Card>
    );
  },
};

export const InPopover: Story = {
  render: () => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState<string[]>(["byward_market"]);

    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const options = [
      { value: "byward_market", label: "Byward Market", active: true },
      { value: "centretown", label: "Centretown" },
      { value: "hintonburg", label: "Hintonburg", active: true },
      { value: "westboro", label: "Westboro" },
      { value: "downtown", label: "Downtown" },
    ];

    return (
      <div style={{ padding: "50px" }}>
        <Popover
          active={active}
          activator={
            <Button onClick={toggleActive} disclosure>
              Options
            </Button>
          }
          onClose={toggleActive}
          preferredAlignment="left"
        >
          <OptionList
            title="Inventory Location"
            onChange={setSelected}
            options={options}
            selected={selected}
          />
        </Popover>
      </div>
    );
  },
};
