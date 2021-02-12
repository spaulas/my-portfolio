import React from "react";
import CircleHover from "common/CircleHover";
import Image from "common/Image";
import { Props } from "./types";
import "./ColorIcon.scss";
import classNames from "classnames";

function ColorIcon({
  title,
  type,
  srcAltered,
  srcColor,
  smaller,
  storybook,
  extraClass,
}: Props) {
  const colorIconClass = classNames("color-icons", extraClass, {
    [`color-icons--${type}`]: type,
    "color-icons--smaller": smaller,
  });

  return (
    <CircleHover type={type} title={title} extraClass={colorIconClass}>
      {!storybook ? (
        <div className="color-icons__container">
          <Image src={srcAltered} className="color-icons__altered" />
          <Image src={srcColor} className="color-icons__color" />
        </div>
      ) : (
        <div className="color-icons__container">
          <img src={srcAltered} className="color-icons__altered" />
          <img src={srcColor} className="color-icons__color" />
        </div>
      )}
    </CircleHover>
  );
}

export default ColorIcon;
