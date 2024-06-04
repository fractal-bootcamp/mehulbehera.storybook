import type { Meta, StoryObj } from "@storybook/react";

import { Task } from "./Task";

const meta = {
  component: Task,
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;

export const inComplete: Story = {
  args: {
    isComplete: false,
    title: "TestingTitle",
    description: "Testing Description",
  },
};

export const Complete: Story = {
  args: {
    isComplete: true,
    title: "Testing Complete Title",
    description: "Testing Complete Description",
  },
};
