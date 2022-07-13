// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Contact from "./Contact";
import { ContactProps } from "./Contact.types";

describe("Test Component", () => {
  let props: ContactProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Contact {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Contact");

    expect(component).toHaveTextContent("harvey was here");
  });
});
