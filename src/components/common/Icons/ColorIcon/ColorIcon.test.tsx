/* eslint-disable react/display-name */
jest.mock("../../Image/index.tsx", () => ({
  __esModule: true,
  default: (props: { className: string }) => (
    <div className={props.className}></div>
  ),
}));

import React from "react";
import ColorIcon from "./index";
import { CreateContainerType, createContainer } from "@test/domManipulators";
import { Props } from "./types.d";

const icon = require("images/icons/light-blue/social-icons/icon-light-blue__github.png");

describe("<ColorIcon />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  // --------------------
  // It functions

  const itAccordingToType = (type: Props["type"]) => {
    it(`according to the type: ${type}`, () => {
      render(
        <ColorIcon
          type={type}
          title="Title"
          srcAltered={icon}
          srcColor={icon}
        />
      );

      // should have --${type}
      expect(
        container.querySelector(`div.color-icon.color-icon--${type}`)
      ).not.toBeNull();
    });
  };

  const itAccordingToSize = (smaller: Props["smaller"]) => {
    it(`according to the size: ${smaller ? "smaller" : "normal"}`, () => {
      render(
        <ColorIcon
          type="social"
          title="Title"
          srcAltered={icon}
          srcColor={icon}
          smaller={smaller}
        />
      );

      const wrapper = container.querySelector(
        "div.color-icon.color-icon--smaller"
      );

      if (smaller) {
        expect(wrapper).not.toBeNull();
      } else {
        expect(wrapper).toBeNull();
      }
    });
  };

  // --------------------

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  describe("renders the wrapper with the correct class name", () => {
    itAccordingToType("tech");
    itAccordingToType("social");
    itAccordingToType("timeline");

    itAccordingToSize(true);
    itAccordingToSize(false);
  });

  it("renders two images", () => {
    render(
      <ColorIcon
        type="social"
        title="Title"
        srcAltered={icon}
        srcColor={icon}
      />
    );

    const images = container.querySelector(
      "div.color-icon>.color-icon__container"
    );

    expect(images?.children).toHaveLength(2);

    expect(images?.querySelector(".color-icon__altered")).not.toBeNull();
    expect(images?.querySelector(".color-icon__color")).not.toBeNull();
  });
});
