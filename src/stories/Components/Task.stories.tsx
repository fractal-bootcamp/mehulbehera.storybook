import type { Meta, StoryObj } from "@storybook/react";

import { Task } from "./Task";

const meta = {
  component: Task,
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;

const task = {
  isComplete: false,
  title: "TestingTitle",
  description: "Testing Description",
};

const taskcomplete = {
  isComplete: true,
  title: "Testing Complete Title",
  description: "Testing Complete Description",
};

export const inComplete: Story = {
  args: {
    task,
    onToggle,
  },
};

export const Complete: Story = {
  args: { taskcomplete, onToggle },
};
