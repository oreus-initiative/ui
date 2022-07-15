// Generated with util/create-component.js
import React from "react";

import { TextInputProps } from "./TextInput.types";

import "./TextInput.scss";

const TextInput: React.ForwardRefRenderFunction<unknown, TextInputProps> = (
  props,
  ref
) => {
  const { className } = props;

  return (
    <input
      data-testid="TextInput"
      ref={ref}
      className={`oreus-text-input ${className || ""}`}
      {...props}
    />
  );
};

export default React.forwardRef(TextInput);
