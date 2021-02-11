import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { MatchNode, Props } from "./types.d";

const Image = ({ src, ...rest }: Props) => {
  const data: {
    images: { edges: Array<{ node: any }> };
  } = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const match:
    | {
        node: MatchNode;
      }
    | undefined = useMemo(
      () => data.images.edges.find(({ node }) => src === node.relativePath),
      [data, src]
    );

  if (!match) return null;

  const { node: { childImageSharp, publicURL, extension } = {} } = match;

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} {...rest} />;
  }

  return <Img fluid={childImageSharp.fluid} {...rest} />;
};

export default Image;
