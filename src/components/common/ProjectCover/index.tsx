import React, { useState, useEffect } from "react";
import "./ProjectCover.scss";
import { Props } from "./types.d";
import ProjectTitle from "common/ProjectTitle";
import Lottie from "react-lottie";

function ProjectCover({
  title,
  animationData,
  size: { width, height },
  extraClass = "",
}: Props) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      setPlaying(false);
    }, 200);
  }, [playing]);

  const handleMouseEnter = () => {
    setDirection(1);
    setPlaying(true);
  };

  const handleMouseLeave = () => {
    setDirection(-1);
    setPlaying(true);
  };

  return (
    <div
      className={`project-cover ${extraClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-cover__animation-container">
        <Lottie
          direction={direction}
          options={{
            loop: false,
            autoplay: false,
            animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          width={width}
          height={height}
          isPaused={!playing}
        />
      </div>
      <ProjectTitle title={title} extraClass="project-cover__title" />
    </div>
  );
}

export default ProjectCover;
