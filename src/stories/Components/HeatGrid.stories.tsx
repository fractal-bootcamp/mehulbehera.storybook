import type { Meta, StoryObj } from "@storybook/react";

import { HeatGrid } from "./HeatGrid";

const meta = {
  component: HeatGrid,
} satisfies Meta<typeof HeatGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

//generate 35 random numbers
var tempsArr: number[];
tempsArr = [];
while (tempsArr.length < 35) {
  var r = Math.floor(Math.random() * 100) + 1;
  if (tempsArr.indexOf(r) === -1) tempsArr.push(r);
}

export const Default: Story = {};
