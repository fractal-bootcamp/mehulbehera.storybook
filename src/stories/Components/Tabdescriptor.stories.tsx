import type { Meta, StoryObj } from "@storybook/react";

import { Tabdescriptor } from "./Tabdescriptor";

const meta = {
  component: Tabdescriptor,
} satisfies Meta<typeof Tabdescriptor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
