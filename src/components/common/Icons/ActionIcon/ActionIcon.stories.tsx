/* eslint-disable no-undef */
import React from "react";
import ActionIcon from "./index";

const about = require("imgAssets/icons/light-blue/action-icons/icon-light-blue__about.png");
const back = require("imgAssets/icons/light-blue/action-icons/icon-light-blue__back.png");
const close = require("imgAssets/icons/light-blue/action-icons/icon-light-blue__close.png");
const code = require("imgAssets/icons/light-blue/action-icons/icon-light-blue__code.png");
const language = require("imgAssets/icons/light-blue/action-icons/icon-light-blue__language.png");
const lightMode = require("imgAssets/icons/light-blue/action-icons/icon-light-blue__light-mode.png");
const website = require("imgAssets/icons/light-blue/action-icons/icon-light-blue__website.png");

export default {
  title: "Common/Icons",
  argTypes: {
    title: {
      control: {
        type: "select",
        options: [
          "About",
          "Back",
          "Close",
          "Code",
          "Language",
          "Light Mode",
          "Website",
        ],
      },
    },
  },
};

export const ActionIconC = (args: { title: string }): JSX.Element => {
  let src = undefined;
  switch (args.title) {
  case "Back":
    src = back;
    break;
  case "Close":
    src = close;
    break;
  case "Code":
    src = code;
    break;
  case "Language":
    src = language;
    break;
  case "Light Mode":
    src = lightMode;
    break;
  case "Website":
    src = website;
    break;
  default:
    src = about;
    break;
  }

  return <ActionIcon src={src} storybook />;
};

ActionIconC.args = {
  title: "About",
};
