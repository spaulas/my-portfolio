import { GatsbyImageFluidProps } from "gatsby-image";

export type MatchNode = {
  childImageSharp: GatsbyImageFluidProps;
  publicURL: string;
  extension: string;
};

export type Props = {
  src: string;
  alt?: string;
  className?: string;
};
