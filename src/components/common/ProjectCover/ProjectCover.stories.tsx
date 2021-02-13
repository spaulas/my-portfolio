import React from "react";
import ProjectCover from "./index";
/* import { Props } from "./types.d"; */

export default {
  title: "Common",
  argTypes: {
    title: { control: "text" },
  },
};

const animation = "@images/animations/solitaire_lottie.json";

export const ProjectCoverC = (/* args: Props */): JSX.Element => {
  return <ProjectCover title="Solitaire" url="" animation={animation} />;
};

ProjectCoverC.args = { title: "Title" };
