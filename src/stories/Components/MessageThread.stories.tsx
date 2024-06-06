import type { Meta, StoryObj } from '@storybook/react';

import { MessageThread } from './MessageThread';

const meta = {
  component: MessageThread,
} satisfies Meta<typeof MessageThread>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};