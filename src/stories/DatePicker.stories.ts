import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "@tsatsarisg/react-date-pickers";

const meta = {
  title: "DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
