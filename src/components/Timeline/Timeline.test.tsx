/* eslint-disable react/display-name */
jest.mock("../../Image/index.tsx", () => ({
  __esModule: true,
  default: (props: { className: string }) => (
    <div className={props.className}></div>
  ),
}));

import React from "react";
import Timeline from "./index";
import { CreateContainerType, createContainer } from "test/domManipulators";
import { TIMELINE } from "constants/Timeline";

describe("<Timeline />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  describe("renders the wrapper with the correct class name", () => {
    render(<Timeline />);

    expect(container.querySelector("div.timeline")).not.toBeNull();
  });

  it("renders the correct number of items", () => {
    render(<Timeline />);

    expect(container.querySelector("div.timeline")?.children).toHaveLength(
      TIMELINE.length
    );
  });
});
