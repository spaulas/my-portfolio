import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

import { Props } from "./types.d";
import ProjectTitle from "@common/ProjectTitle";

function ProjectCover({ title, animation, url, extraClass }: Props) {
  let animationRef: any = useRef();

  console.log("URL = ", url);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return (
    <div className={`project-cover ${extraClass}`}>
      <div
        className="project-cover__animation-container"
        ref={animationRef}
      ></div>
      <ProjectTitle title={title} />
    </div>
  );
}

export default ProjectCover;
