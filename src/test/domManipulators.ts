
import ReactDOM from "react-dom";

export type CreateContainerType = {
  container: Element;
  render: (component: JSX.Element) => any;
};

export const createContainer = (): CreateContainerType => {
  const container = document.createElement("div");

  return {
    // eslint-disable-next-line react/no-render-return-value
    render: (component: JSX.Element) => ReactDOM.render(component, container),
    container,
  };
};