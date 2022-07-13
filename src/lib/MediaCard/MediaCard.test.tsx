// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import MediaCard from "./MediaCard";
import { MediaCardProps } from "./MediaCard.types";

describe("Test Component", () => {
  let props: MediaCardProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<MediaCard {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("MediaCard");

    expect(component).toHaveTextContent("harvey was here");
  });
});
