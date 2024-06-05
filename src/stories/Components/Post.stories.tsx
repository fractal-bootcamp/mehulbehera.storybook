import type { Meta, StoryObj } from "@storybook/react";

import { Post } from "./Post";

const meta = {
  component: Post,
} satisfies Meta<typeof Post>;

export default meta;

type Story = StoryObj<typeof meta>;

const data = {
  name: "Daniel",
  groupName: "Fractal",
  time: 1717618557408,
  avatarurl:
    "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
  imgurl:
    "https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hieu-697259.jpg&fm=jpg",
  postdesc: "Flowers from a field",
  numlikes: 23,
  numcomments: 4,
};

export const Default: Story = {
  args: {
    name: "Daniel",
    groupName: "Fractal",
    time: 1717618557408,
    avatarurl:
      "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg",
    imgurl:
      "https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hieu-697259.jpg&fm=jpg",
    postdesc: "Flowers from a field",
    numlikes: 23,
    numcomments: 4,
  },
};

//avatar url: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"
//img url: "https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?cs=srgb&dl=pexels-hieu-697259.jpg&fm=jpg"
