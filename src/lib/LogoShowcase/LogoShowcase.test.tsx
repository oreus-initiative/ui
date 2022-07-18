// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import LogoShowcase from "./LogoShowcase";
import { LogoShowcaseProps } from "./LogoShowcase.types";

describe("Test Component", () => {
  let props: LogoShowcaseProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<LogoShowcase {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("LogoShowcase");

    expect(component).toHaveTextContent("harvey was here");
  });
});
