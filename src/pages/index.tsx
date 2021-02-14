import React from "react";

import SEO from "@common/SEO";
import ProjectCover from "../components/common/ProjectCover/index";
import animationSocialNetwork from "@images/animations/social-network_lottie.json";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ProjectCover
      title="Social Network"
      animationData={animationSocialNetwork}
      size={{ width: 700, height: 700 }}
    />
  </>
);

export default IndexPage;
