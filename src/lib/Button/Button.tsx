// Generated with util/create-component.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import { ButtonProps } from "./Button.types";

import "./Button.scss";

const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  style,
  title,
  onClick,
  loading,
  variant = "outlined",
  color = "primary",
  fullWidth = false,
  disabled,
  className,
}) => (
  <button
    style={style}
    title={title}
    onClick={onClick}
    className={`oreus-btn oreus-btn-${variant} oreus-btn-${color} ${
      fullWidth ? "oreus-btn-fw" : ""
    } ${className ? className : ""}`}
    disabled={disabled || loading}
    data-testid="Button"
  >
    {icon ? (
      <FontAwesomeIcon
        icon={loading ? faCircleNotch : icon}
        className={`oreus-btn-icon`}
        style={{ marginRight: label ? "8px" : "0" }}
        spin={loading}
      />
    ) : null}
    <span className="oreus-btn-text">{label}</span>
  </button>
);

export default Button;
