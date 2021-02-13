/* eslint-disable react/display-name */
jest.mock("@common/Image/index.tsx", () => ({
  __esModule: true,
  default: (props: { className: string }) => (
    <div className={props.className}></div>
  ),
}));

import React from "react";
import Timeline from "./index";
import { CreateContainerType, createContainer } from "@test/domManipulators";
import { TIMELINE, TimelineText } from "@constants/Timeline";

describe("<Timeline />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  // --------------------
  // It functions
  const itCheckTimelineItems = ({ ID, TITLE, YEAR }: TimelineText) => {
    it(`check item: ${ID}`, () => {
      render(<Timeline />);

      const item = container.querySelector(
        `div.timeline>.timeline__icon--${ID}`
      );
      
      expect(
        item?.querySelector(
          ".circle-hover__title-container>.circle-hover__title"
        ).textContent
      ).toEqual(TITLE);
      expect(
        item?.querySelector(
          ".circle-hover__subtitle-container>.circle-hover__subtitle"
        ).textContent
      ).toEqual(YEAR);
    });
  };

  // --------------------

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders the wrapper with the correct class name", () => {
    render(<Timeline />);
    expect(container.querySelector("div.timeline")).not.toBeNull();
  });

  it("renders the correct number of items", () => {
    render(<Timeline />);

    expect(container.querySelector("div.timeline")?.children).toHaveLength(
      TIMELINE.length
    );
  });

  describe("check time items", () => {
    itCheckTimelineItems(TIMELINE[0]);
    itCheckTimelineItems(TIMELINE[TIMELINE.length - 1]);
  });
});
