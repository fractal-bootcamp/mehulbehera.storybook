import type { Meta, StoryObj } from '@storybook/react';

import { Post } from './Post';

const meta = {
  component: Post,
} satisfies Meta<typeof Post>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};