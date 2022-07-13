// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import OutlinedText from "./OutlinedText";
import { OutlinedTextProps } from "./OutlinedText.types";

describe("Test Component", () => {
  let props: OutlinedTextProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<OutlinedText {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("OutlinedText");

    expect(component).toHaveTextContent("harvey was here");
  });
});
