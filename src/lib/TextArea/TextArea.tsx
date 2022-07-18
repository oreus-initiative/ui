// Generated with util/create-component.js
import React from "react";

import { TextAreaProps } from "./TextArea.types";

import "./TextArea.scss";

const TextArea: React.ForwardRefRenderFunction<unknown, TextAreaProps> = (
  props,
  ref
) => {
  const { className, color = "primary" } = props;

  return (
    <textarea
      data-testid="TextArea"
      ref={ref}
      className={`oreus-area-input ${`oreus-area-input-${color}`} ${
        className || ""
      }`}
      {...props}
    />
  );
};

export default React.forwardRef(TextArea);
