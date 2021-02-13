import React from "react";
import { Props } from "./types.d";
import "./ProjectTitle.scss";

function ProjectTitle({ title, extraClass }: Props) {
  return (
    <div className={`project-title ${extraClass}`}>
      <span className="project-title__title">{title}</span>
    </div>
  );
}

export default ProjectTitle;
