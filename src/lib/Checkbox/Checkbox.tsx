// Generated with util/create-component.js
import React from "react";

import { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  value,
  onChange,
}) => (
  <div className="oreus-checkbox-container">
    <label>
      <span
        className={`oreus-checkbox-check ${
          value === true ? "oreus-checkbox-checked" : ""
        }`}
      >
        <FontAwesomeIcon icon={faCheck} />
      </span>
      <input
        type="checkbox"
        data-testid="Checkbox"
        checked={value === true ? "checked" : ""}
        className="oreus-checkbox-input"
        onChange={() => onChange(!value)}
        id={id}
        name={name}
      />
      {label}
    </label>
  </div>
);

export default Checkbox;