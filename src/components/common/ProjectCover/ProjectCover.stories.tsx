import React from "react";
import ProjectCover from "./index";
import animationData from "@images/animations/solitaire_lottie.json";

// TODO create options for Solitaire and Social Network
export default {
  title: "Common",
  argTypes: {
    title: { control: "text" },
  },
};

export const ProjectCoverC = (/* args: Props */): JSX.Element => {
  return <ProjectCover title="Solitaire" animationData={animationData} />;
};

ProjectCoverC.args = { title: "Title" };
