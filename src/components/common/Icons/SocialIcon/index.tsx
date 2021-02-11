import React from "react";
import CircleHover from "common/CircleHover";
import Image from "common/Image";
import { Props } from "./types.d";

function SocialIcon({ title, src, storybook }: Props) {
  return (
    <CircleHover type="social" title={title}>
      {!storybook ? <Image src={src} /> : <img src={src} />}
    </CircleHover>
  );
}

export default SocialIcon;
