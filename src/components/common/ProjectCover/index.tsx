import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import { Props } from "./types.d";
import ProjectTitle from "@common/ProjectTitle";

function ProjectCover({ title, url, extraClass }: Props) {
  return (
    <div className={`project-cover ${extraClass}`}>
      <Player
        src={url}
        background="transparent"
        speed={1}
        //style="width: 300px; height: 300px;"
        hover
        autoplay
      ></Player>
      <ProjectTitle title={title} />
    </div>
  );
}

export default ProjectCover;
