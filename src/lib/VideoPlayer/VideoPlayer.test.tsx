// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import VideoPlayer from "./VideoPlayer";
import { VideoPlayerProps } from "./VideoPlayer.types";

describe("Test Component", () => {
  let props: VideoPlayerProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<VideoPlayer {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("VideoPlayer");

    expect(component).toHaveTextContent("harvey was here");
  });
});
