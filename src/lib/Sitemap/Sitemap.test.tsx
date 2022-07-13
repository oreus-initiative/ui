// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Sitemap from "./Sitemap";
import { SitemapProps } from "./Sitemap.types";

describe("Test Component", () => {
  let props: SitemapProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Sitemap {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Sitemap");

    expect(component).toHaveTextContent("harvey was here");
  });
});
