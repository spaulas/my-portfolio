import React from "react";
import { Props } from "./types.d";
import SocialIcon from "./index";
import image from "images/assets/icons/light-blue/social-icons/icon-light-blue__github.png";

export default {
  title: "Common",
  argTypes: {
    title: { control: "text" },
    type: {
      control: {
        type: "select",
        options: ["tech", "social", "action"],
      },
    },
  },
};

export const SocialIconC = (args: Props): JSX.Element => {
  return <SocialIcon {...args} storybook/>;
};

SocialIconC.args = {
  title: "Github",
  src: image,
};
