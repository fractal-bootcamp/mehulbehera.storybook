import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@vitest/spy";

import { TaskList } from "./TaskList";

const meta = {
  component: TaskList,
} satisfies Meta<typeof TaskList>;

export default meta;

type Story = StoryObj<typeof meta>;

const Task1 = {
  isComplete: false,
  title: "Title1",
  description: "desc",
};

const Task2 = {
  isComplete: false,
  title: "Title2",
  description: "desc2",
};

const Task3 = {
  isComplete: false,
  title: "Title3",
  description: "desc3",
};

const taskListArray = [Task1, Task2, Task3];

export const list: Story = {
  args: {
    tasks: taskListArray,
  },
};
