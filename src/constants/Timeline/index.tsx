import birthColor from "imgAssets/icons/color/timeline-icons/icon-color__birth.png";
import birthNavyBlue from "imgAssets/icons/navy-blue/timeline-icons/icon-navy-blue__birth.png";
import uaColor from "imgAssets/icons/color/timeline-icons/icon-color__ua.png";
import uaNavyBlue from "imgAssets/icons/navy-blue/timeline-icons/icon-navy-blue__ua.png";
import wavecomColor from "imgAssets/icons/color/timeline-icons/icon-color__wavecom.png";
import wavecomNavyBlue from "imgAssets/icons/navy-blue/timeline-icons/icon-navy-blue__wavecom.png";
import hapibotColor from "imgAssets/icons/color/timeline-icons/icon-color__hapibot.png";
import hapibotNavyBlue from "imgAssets/icons/navy-blue/timeline-icons/icon-navy-blue__hapibot.png";

export type TimelineText = {
  ID: string;
  TITLE: string;
  YEAR: string;
  NAVY_BLUE_ICON: string;
  COLOR_ICON: string;
};

export const TIMELINE: Array<TimelineText> = [
  {
    ID: "birth",
    TITLE: "Birth",
    YEAR: "1995",
    NAVY_BLUE_ICON: birthNavyBlue,
    COLOR_ICON: birthColor,
  },
  {
    ID: "ua",
    TITLE: "Uni",
    YEAR: "2013",
    NAVY_BLUE_ICON: uaNavyBlue,
    COLOR_ICON: uaColor,
  },
  {
    ID: "wavecom",
    TITLE: "Wavecom",
    YEAR: "2018",
    NAVY_BLUE_ICON: wavecomNavyBlue,
    COLOR_ICON: wavecomColor,
  },
  {
    ID: "hapibot",
    TITLE: "Hapibot",
    YEAR: "2020",
    NAVY_BLUE_ICON: hapibotNavyBlue,
    COLOR_ICON: hapibotColor,
  },
];
