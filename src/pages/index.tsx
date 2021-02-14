import React from "react";

import SEO from "@common/SEO";
import ProjectCover from "../components/common/ProjectCover/index";
import animationSocialNetwork from "@images/animations/social-network_lottie.json";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ProjectCover
      title="Social Network"
      animationData={animationSocialNetwork}
      size={{ width: 700, height: 700 }}
    />
  </>
);

export default IndexPage;
