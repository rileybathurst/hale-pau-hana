import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Color } from "./Color";

const meta = {
  component: Color,
  args: { onClick: fn() },
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
