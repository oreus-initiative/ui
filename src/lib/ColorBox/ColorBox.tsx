// Generated with util/create-component.js
import React from "react";

import { ColorBoxProps } from "./ColorBox.types";

import "./ColorBox.scss";

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => (
    <div data-testid="ColorBox" className="oreus-color-box">
      <div className="oreus-color-box-color" style={{backgroundColor: color}}></div>
    </div>
);

export default ColorBox;

