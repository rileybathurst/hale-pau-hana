// this is the Name.stories.tsx file
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Color } from './Color';

type ColorPropsAndCustomArgs = React.ComponentProps<typeof Color> & { footer?: string };

const meta: Meta<ColorPropsAndCustomArgs> = {
  component: Color,
  render: ({ footer, ...args }) => (
    <Color {...args}>
      <footer>{footer}</footer>
    </Color>
  ),
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};