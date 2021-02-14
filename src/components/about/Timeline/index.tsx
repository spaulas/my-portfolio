import React from "react";
import ColorIcon from "common/Icons/ColorIcon";
import { Props } from "./types";
import { TIMELINE, TimelineText } from "constants/Timeline";
import "./Timeline.scss";

function Timeline({ extraClass = "" }: Props) {
  return (
    <div className={`timeline ${extraClass}`}>
      {TIMELINE.map(
        ({ ID, TITLE, YEAR, NAVY_BLUE_ICON, COLOR_ICON }: TimelineText) => (
          <ColorIcon
            key={`timeline-${ID}`}
            type="timeline"
            title={TITLE}
            subtitle={YEAR}
            srcAltered={NAVY_BLUE_ICON}
            srcColor={COLOR_ICON}
            extraClass={`timeline__icon--${ID}`}
          />
        )
      )}
    </div>
  );
}

export default Timeline;
