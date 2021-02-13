import React from "react";
import { Props } from "./types.d";
import CircleHover from "./index";

export default {
  title: "Common",
  argTypes: {
    title: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["tech", "social", "action", "timeline"],
      },
    },
  },
};

export const CircleHoverC = (args: Props): JSX.Element => {
  return (
    <CircleHover {...args}>
      <span>#</span>
    </CircleHover>
  );
};

CircleHoverC.args = { title: "Title", subtitle: "", type: "tech" };
