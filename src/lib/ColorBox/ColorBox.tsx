// Generated with util/create-component.js
import React from "react";

import { ColorBoxProps } from "./ColorBox.types";

import "./ColorBox.scss";

const ColorBox: React.FC<ColorBoxProps> = ({ color, style, className }) => (
  <div
    data-testid="ColorBox"
    className={`oreus-color-box ${className || ""}`}
    style={style}
  >
    <div
      title={`color ${color}`}
      className="oreus-color-box-color"
      style={{ backgroundColor: color }}
    ></div>
  </div>
);

export default ColorBox;
