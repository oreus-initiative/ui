// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import BlueprintContainer from "./BlueprintContainer";
import { BlueprintContainerProps } from "./BlueprintContainer.types";

describe("Test Component", () => {
  let props: BlueprintContainerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<BlueprintContainer {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("BlueprintContainer");

    expect(component).toHaveTextContent("harvey was here");
  });
});
