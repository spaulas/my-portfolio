import React from "react";
import ProjectTitle from "./index";
import { CreateContainerType, createContainer } from "@test/domManipulators";

describe("<Timeline />", () => {
  let container: CreateContainerType["container"];
  let render: CreateContainerType["render"];

  beforeEach(() => {
    const result = createContainer();
    container = result.container;
    render = result.render;
  });

  it("renders the wrapper with the correct class name", () => {
    render(<ProjectTitle title="Title" />);

    expect(container.querySelector("div.project-title")).not.toBeNull();
  });

  it("renders the title", () => {
    render(<ProjectTitle title="Title" />);

    expect(
      container.querySelector("div.project-title>.project-title__title")
        ?.textContent
    ).toEqual("Title");
  });
});
