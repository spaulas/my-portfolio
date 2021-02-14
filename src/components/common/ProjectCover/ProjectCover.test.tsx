/* eslint-disable react/display-name */
jest.mock("react-lottie", () => ({
  __esModule: true,
  default: (props: { className: string }) => (
    <div className={props.className}></div>
  ),
}));

import React from "react";
import ProjectCover from "./index";
import { CreateContainerType, createContainer } from "@test/domManipulators";
import animationData from "@images/animations/solitaire_lottie.json";

// TODO add tests for mouse over and mouse leave
describe("<ProjectCover />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  const defaultProps = {
    title: "Title",
    animationData,
  };

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders the wrapper with the correct class name", () => {
    render(<ProjectCover {...defaultProps} />);

    expect(container.querySelector("div.project-cover")).not.toBeNull();
  });

  it("renders the title", () => {
    render(<ProjectCover {...defaultProps} />);

    expect(
      container.querySelector(
        "div.project-cover>.project-title>.project-title__title"
      )?.textContent
    ).toEqual("Title");
  });
});
