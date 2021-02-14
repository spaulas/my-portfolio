import React from "react";
import ProjectCover from "./index";
import animationSolitaire from "imgAssets/animations/solitaire_lottie.json";
import animationSocialNetwork from "imgAssets/animations/social-network_lottie.json";

export default {
  title: "Common",
  argTypes: {
    project: {
      control: {
        type: "select",
        options: ["Solitaire", "Social Network"],
      },
    },
  },
};

export const ProjectCoverC = (args: { project: string }): JSX.Element => {
  let props = undefined;
  switch (args.project) {
  case "Social Network":
    props = {
      title: "Social Network",
      animationData: animationSocialNetwork,
      size: {
        width: 700,
        height: 700,
      },
    };
    break;
  default:
    props = {
      title: "Solitaire",
      animationData: animationSolitaire,
      size: {
        width: 540,
        height: 600,
      },
    };
  }
  return <ProjectCover {...props} />;
};

ProjectCoverC.args = { project: "Solitaire" };
