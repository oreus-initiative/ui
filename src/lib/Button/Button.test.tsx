// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      label: "Button",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render children correctly", () => {
    props.label = "Hello World";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveTextContent("Hello World");
  });

  it("should add className if provided", () => {
    props.className = "AdditionnalClass";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveClass("AdditionnalClass");
  });

  it("should have style if provided", () => {
    props.style = { color: "red", fontSize: "20px" };
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toHaveStyle("color: red");
    expect(component).toHaveStyle("fontSize: 20px");
  });

  it("should be disabled if provided", () => {
    props.disabled = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");

    expect(component).toBeDisabled();
  });

  // it("should be full width if provided", () => {
  //   props.fullWidth = true;
  //   const { getByTestId } = renderComponent();

  //   const component = getByTestId("Button");

  //   expect(component).toHaveStyle("width: 100%");
  // });

  // it("should call onClick", () => {
  //   const mockCallBack = sinon.spy();
  //   const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));

  //   button.find('button').simulate('click');
  //   expect(mockCallBack).toHaveProperty('callCount', 1);
  // });
});
