/* eslint-disable no-undef */
import React from "react";
import { Props } from "./types";
import ColorIcon from "./index";

/***************
 * TECH ICONS
 ***************/

const githubLightBlue = require("imgAssets/icons/light-blue/social-icons/icon-light-blue__github.png");
const githubColor = require("imgAssets/icons/color/social-icons/icon-color__github.png");

const linkedinLightBlue = require("imgAssets/icons/light-blue/social-icons/icon-light-blue__linkedin.png");
const linkedinColor = require("imgAssets/icons/color/social-icons/icon-color__linkedin.png");

const antdLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__antd.png");
const antdColor = require("imgAssets/icons/color/tech-icons/icon-color__antd.png");

const cssLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__css.png");
const cssColor = require("imgAssets/icons/color/tech-icons/icon-color__css.png");

const cypressLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__cypress.png");
const cypressColor = require("imgAssets/icons/color/tech-icons/icon-color__cypress.png");

const firebaseLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__firebase.png");
const firebaseColor = require("imgAssets/icons/color/tech-icons/icon-color__firebase.png");

const htmlLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__html.png");
const htmlColor = require("imgAssets/icons/color/tech-icons/icon-color__html.png");

const javascriptLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__javascript.png");
const javascriptColor = require("imgAssets/icons/color/tech-icons/icon-color__javascript.png");

const jestLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__jest.png");
const jestColor = require("imgAssets/icons/color/tech-icons/icon-color__jest.png");

const lessLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__less.png");
const lessColor = require("imgAssets/icons/color/tech-icons/icon-color__less.jpg");

const materialuiLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__materialui.png");
const materialuiColor = require("imgAssets/icons/color/tech-icons/icon-color__materialui.png");

const mysqlLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__mysql.png");
const mysqlColor = require("imgAssets/icons/color/tech-icons/icon-color__mysql.png");

const nodeLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__node.png");
const nodeColor = require("imgAssets/icons/color/tech-icons/icon-color__node.png");

const phpLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__php.png");
const phpColor = require("imgAssets/icons/color/tech-icons/icon-color__php.png");

const reactLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__react.png");
const reactColor = require("imgAssets/icons/color/tech-icons/icon-color__react.png");

const reduxSagaLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__redux-saga.png");
const reduxSagaColor = require("imgAssets/icons/color/tech-icons/icon-color__redux-saga.svg");

const reduxLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__redux.png");
const reduxColor = require("imgAssets/icons/color/tech-icons/icon-color__redux.png");

const sassLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__sass.png");
const sassColor = require("imgAssets/icons/color/tech-icons/icon-color__sass.svg");

const typescriptLightBlue = require("imgAssets/icons/light-blue/tech-icons/icon-light-blue__typescript.png");
const typescriptColor = require("imgAssets/icons/color/tech-icons/icon-color__typescript.png");

/***************
 * TIMELINE ICONS
 ***************/

const birthNavyBlue = require("imgAssets/icons/navy-blue/timeline-icons/icon-navy-blue__birth.png");
const birthColor = require("imgAssets/icons/color/timeline-icons/icon-color__birth.png");

const hapibotNavyBlue = require("imgAssets/icons/navy-blue/timeline-icons/icon-navy-blue__hapibot.png");
const hapibotColor = require("imgAssets/icons/color/timeline-icons/icon-color__hapibot.png");

const uaNavyBlue = require("imgAssets/icons/navy-blue/timeline-icons/icon-navy-blue__ua.png");
const uaColor = require("imgAssets/icons/color/timeline-icons/icon-color__ua.png");

const wavecomNavyBlue = require("imgAssets/icons/navy-blue/timeline-icons/icon-navy-blue__wavecom.png");
const wavecomColor = require("imgAssets/icons/color/timeline-icons/icon-color__wavecom.png");

export default {
  title: "Common/Icons",
  argTypes: {
    title: {
      control: {
        type: "select",
        options: [
          "Github",
          "Linkedin",
          "Antd",
          "CSS",
          "Cypress",
          "Firebase",
          "HTML",
          "Javascript",
          "Jest",
          "Less",
          "MaterialUI",
          "MySQL",
          "Node",
          "PHP",
          "React",
          "Redux-Saga",
          "Redux",
          "Sass",
          "Typescript",
          "Birth",
          "Hapibot",
          "UA",
          "Wavecom",
        ],
      },
    },
  },
};

export const ColorIconC = (args: Props): JSX.Element => {
  let props = undefined;
  switch (args.title) {
  case "Github":
    props = {
      title: "Github",
      srcColor: githubColor,
      srcAltered: githubLightBlue,
      type: "social" as "social",
    };
    break;
  case "Antd":
    props = {
      title: "Antd",
      srcColor: antdColor,
      srcAltered: antdLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "CSS":
    props = {
      title: "CSS",
      srcColor: cssColor,
      srcAltered: cssLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Cypress":
    props = {
      title: "Cypress",
      srcColor: cypressColor,
      srcAltered: cypressLightBlue,
      smaller: true,
      type: "tech" as "tech",
    };
    break;
  case "Firebase":
    props = {
      title: "Firebase",
      srcColor: firebaseColor,
      srcAltered: firebaseLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "HTML":
    props = {
      title: "HTML",
      srcColor: htmlColor,
      srcAltered: htmlLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Javascript":
    props = {
      title: "Javascript",
      srcColor: javascriptColor,
      srcAltered: javascriptLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Jest":
    props = {
      title: "Jest",
      srcColor: jestColor,
      srcAltered: jestLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Less":
    props = {
      title: "Less",
      srcColor: lessColor,
      srcAltered: lessLightBlue,
      smaller: true,
      type: "tech" as "tech",
    };
    break;
  case "MaterialUI":
    props = {
      title: "MaterialUI",
      srcColor: materialuiColor,
      srcAltered: materialuiLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "MySQL":
    props = {
      title: "MySQL",
      srcColor: mysqlColor,
      srcAltered: mysqlLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Node":
    props = {
      title: "Node",
      srcColor: nodeColor,
      srcAltered: nodeLightBlue,
      smaller: true,
      type: "tech" as "tech",
    };
    break;
  case "PHP":
    props = {
      title: "PHP",
      srcColor: phpColor,
      srcAltered: phpLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "React":
    props = {
      title: "React",
      srcColor: reactColor,
      srcAltered: reactLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Redux-Saga":
    props = {
      title: "Redux-Saga",
      srcColor: reduxSagaColor,
      srcAltered: reduxSagaLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Redux":
    props = {
      title: "Redux",
      srcColor: reduxColor,
      srcAltered: reduxLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Sass":
    props = {
      title: "Sass",
      srcColor: sassColor,
      srcAltered: sassLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Typescript":
    props = {
      title: "Typescript",
      srcColor: typescriptColor,
      srcAltered: typescriptLightBlue,
      type: "tech" as "tech",
    };
    break;
  case "Birth":
    props = {
      title: "Birth",
      subtitle: "1995",
      srcColor: birthColor,
      srcAltered: birthNavyBlue,
      type: "timeline" as "timeline",
    };
    break;
  case "Hapibot":
    props = {
      title: "Hapibot",
      subtitle: "2020",
      srcColor: hapibotColor,
      srcAltered: hapibotNavyBlue,
      type: "timeline" as "timeline",
    };
    break;
  case "UA":
    props = {
      title: "UA",
      subtitle: "2013",
      srcColor: uaColor,
      srcAltered: uaNavyBlue,
      type: "timeline" as "timeline",
    };
    break;
  case "Wavecom":
    props = {
      title: "Wavecom",
      subtitle: "2018",
      srcColor: wavecomColor,
      srcAltered: wavecomNavyBlue,
      type: "timeline" as "timeline",
    };
    break;
  default:
    props = {
      title: "Linkedin",
      srcColor: linkedinColor,
      srcAltered: linkedinLightBlue,
      type: "social" as "social",
    };
  }

  return <ColorIcon {...props} storybook />;
};

ColorIconC.args = {
  title: "Github",
};
