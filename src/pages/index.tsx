import React from "react";

import SEO from "@common/SEO";
import ProjectCover from "../components/common/ProjectCover/index";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ProjectCover title="Solitaire" url="https://assets6.lottiefiles.com/packages/lf20_kbuumggs.json" />
  </>
);

export default IndexPage;
