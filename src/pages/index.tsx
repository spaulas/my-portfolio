import React from "react";

import Image from "common/Image";
import SEO from "common/SEO";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
      <Image src="assets/icons/light-blue/social-icons/icon-light-blue__github.png" />
    </div>
  </>
);

export default IndexPage;
