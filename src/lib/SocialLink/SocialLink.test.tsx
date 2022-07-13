// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SocialLink from "./SocialLink";
import { SocialLinkProps } from "./SocialLink.types";

describe("Test Component", () => {
  let props: SocialLinkProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SocialLink {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SocialLink");

    expect(component).toHaveTextContent("harvey was here");
  });
});
