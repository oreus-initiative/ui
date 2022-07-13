// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import TextInvertingBox from "./TextInvertingBox";
import { TextInvertingBoxProps } from "./TextInvertingBox.types";

describe("Test Component", () => {
  let props: TextInvertingBoxProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<TextInvertingBox {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TextInvertingBox");

    expect(component).toHaveTextContent("harvey was here");
  });
});
