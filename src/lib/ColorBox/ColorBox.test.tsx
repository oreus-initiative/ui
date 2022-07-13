// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ColorBox from "./ColorBox";
import { ColorBoxProps } from "./ColorBox.types";

describe("Test Component", () => {
  let props: ColorBoxProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<ColorBox {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ColorBox");

    expect(component).toHaveTextContent("harvey was here");
  });
});
