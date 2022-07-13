// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Copyright from "./Copyright";
import { CopyrightProps } from "./Copyright.types";

describe("Test Component", () => {
  let props: CopyrightProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Copyright {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Copyright");

    expect(component).toHaveTextContent("harvey was here");
  });
});
