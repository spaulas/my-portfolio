/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  siteMetadata: {
    title: "PS - Frontend Developer",
    description:
      "Have a look of my portfolio, know a little about me and my projects.",
    author: "Paula Santos",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        "@pages": path.join(__dirname, "src/pages"),
        "constants": path.join(__dirname, "src/constants"),
        "@components": path.join(__dirname, "src/components"),
        "common": path.join(__dirname, "src/components/common"),
        "testHelpers": path.join(__dirname, "src/test"),
        "@styles": path.join(__dirname, "src/styles"),
        "imgAssets": path.join(__dirname, "src/images"),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
