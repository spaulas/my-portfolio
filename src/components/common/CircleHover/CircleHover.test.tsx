import React from "react";
import CircleHover from "./index";
import { CreateContainerType, createContainer } from "test/domManipulators";
import { Props } from "./types.d";

describe("<CircleHover />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  // --------------------
  // It functions

  const itAccordingToType = (type: Props["type"]) => {
    it(`according to the type: ${type}`, () => {
      render(<CircleHover type={type} />);

      // should have --${type}
      expect(
        container.querySelector(`div.circle-hover.circle-hover--${type}`)
      ).not.toBeNull();
    });
  };

  const itAccordingToTitle = (
    {
      title,
      subtitle,
    }: {
      title?: string;
      subtitle?: string;
    },
    className: string
  ) => {
    it(`it is ${title || subtitle ? "defined" : "undefined"}`, () => {
      render(<CircleHover type="action" title={title} subtitle={subtitle} />);

      const titleComponent = container.querySelector(
        `div.circle-hover>.circle-hover__${className}-container>.circle-hover__${className}`
      );

      // should always have circle-hover__title
      expect(titleComponent).not.toBeNull();

      // check the content
      expect(titleComponent?.textContent).toEqual(title || subtitle || "");
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
    itAccordingToType("action");
    itAccordingToType("timeline");

    it("according to the title: with", () => {
      render(<CircleHover type="action" title="Title" />);

      expect(
        container.querySelector("div.circle-hover.circle-hover--show-title")
      ).not.toBeNull();
    });

    it("according to the title: without", () => {
      render(<CircleHover type="action" />);

      // should not have --show-title
      expect(
        container.querySelector("div.circle-hover.circle-hover--show-title")
      ).toBeNull();
    });
  });

  describe("renders the title accordingly when", () => {
    itAccordingToTitle({ title: "Title" }, "title");
    itAccordingToTitle({}, "title");
  });

  describe("renders the subtitle accordingly when", () => {
    itAccordingToTitle({ subtitle: "Title" }, "subtitle");
    itAccordingToTitle({}, "subtitle");
  });
});
