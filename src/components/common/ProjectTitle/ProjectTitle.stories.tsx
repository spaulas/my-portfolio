import React from "react";
import ProjectTitle from "./index";
import { Props } from "./types.d";

export default {
  title: "Common",
  argTypes: {
    title: { control: "text" },
  },
};

export const ProjectTitleC = (args: Props): JSX.Element => {
  return <ProjectTitle {...args} />;
};

ProjectTitleC.args = { title: "Title" };
