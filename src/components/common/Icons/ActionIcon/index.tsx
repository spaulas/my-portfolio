import React from "react";
import CircleHover from "common/CircleHover";
import Image from "common/Image";
import { Props } from "./types.d";
import "./ActionIcon.scss";

function ActionIcon({ src, extraClass }: Props) {
  return (
    <CircleHover type="action" extraClass={`action-icon ${extraClass}`}>
      {!process.env.IMAGES_SOURCE ? (
        <Image src={src} className="action-icon__image" />
      ) : (
        <img src={src} className="action-icon__image" />
      )}
    </CircleHover>
  );
}

export default ActionIcon;
