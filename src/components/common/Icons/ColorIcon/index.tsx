import React from "react";
import CircleHover from "common/CircleHover";
import Image from "common/Image";
import { Props } from "./types";
import "./ColorIcon.scss";
import classNames from "classnames";

function ColorIcon({
  title,
  subtitle,
  type,
  srcAltered,
  srcColor,
  smaller,
  storybook,
  extraClass,
}: Props) {
  const colorIconClass = classNames("color-icon", extraClass, {
    [`color-icon--${type}`]: type,
    "color-icon--smaller": smaller,
  });

  return (
    <CircleHover type={type} title={title} subtitle={subtitle} extraClass={colorIconClass}>
      {!storybook ? (
        <div className="color-icon__container">
          <Image src={srcAltered} className="color-icon__altered" />
          <Image src={srcColor} className="color-icon__color" />
        </div>
      ) : (
        <div className="color-icon__container">
          <img src={srcAltered} className="color-icon__altered" />
          <img src={srcColor} className="color-icon__color" />
        </div>
      )}
    </CircleHover>
  );
}

export default ColorIcon;
