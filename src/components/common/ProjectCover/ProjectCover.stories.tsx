import React from "react";
import ProjectCover from "./index";
/* import { Props } from "./types.d"; */

export default {
  title: "Common",
  argTypes: {
    title: { control: "text" },
  },
};

export const ProjectCoverC = (/* args: Props */): JSX.Element => {
  return <ProjectCover title="Solitaire" url="https://assets6.lottiefiles.com/packages/lf20_kbuumggs.json" />;
};

ProjectCoverC.args = { title: "Title" };
