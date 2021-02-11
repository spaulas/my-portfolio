import React, { PropsWithChildren } from "react";
import { Props } from "./types.d";
import classNames from "classnames";
import "./CircleHover.scss";

function CircleHover({
  title,
  type,
  extraClass,
  children,
}: PropsWithChildren<Props>) {
  const circleHoverClass = classNames("circle-hover", extraClass, {
    [`circle-hover--${type}`]: type,
    "circle-hover--show-title": !!title,
  });

  return (
    <div className={circleHoverClass}>
      {/* the title starts with display: none, when it is defined, it is shown on hover */}
      <div className="circle-hover__title-container">
        <span className="circle-hover__title">{title}</span>
      </div>

      {children}
    </div>
  );
}

export default CircleHover;
