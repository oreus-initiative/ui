// Generated with util/create-component.js
import React, { useState } from "react";

import { DropdownProps } from "./Dropdown.types";

import "./Dropdown.scss";
import useComponentVisible from "../../hooks/useComponentVisible";
import Button from "../Button/Button";
import {
  faCaretDown,
  faCaretUp,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";

const Dropdown: React.FC<DropdownProps> = ({
  style,
  className,
  placeholder = "Select...",
  options,
  loading,
  disabled,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(isOpen, true, (state: boolean) => setIsOpen(state));

  const handleChange = (val: any) => {
    if (selected !== val) {
      onChange(val);
    }
    setIsOpen(false);
  };

  const handleDropdownToggle = (state: boolean) => {
    setIsOpen(state);
    setIsComponentVisible(state);
  };

  return (
    <div
      data-testid="Dropdown"
      className={`oreus-dropdown-container ${className || ""}`}
      style={style}
      ref={ref}
    >
      <Button
        className="oreus-dropdown"
        disabled={disabled || loading}
        loading={loading}
        icon={loading ? faCircleNotch : isOpen ? faCaretDown : faCaretUp}
        label={selected?.label || placeholder}
        onClick={() => handleDropdownToggle(!isOpen)}
      />
      {isOpen && isComponentVisible ? (
        <div className="oreus-dropdown-options">
          <ul>
            {options && options.length > 0 ? (
              options.map((option: any, index: number) => (
                <li key={`${option.value}-${index}`}>
                  <Button
                    variant="text"
                    label={option.label}
                    className={
                      option.value.localeCompare(selected.value) === 0
                        ? "option-selected"
                        : ""
                    }
                    onClick={() => handleChange(option)}
                  />
                </li>
              ))
            ) : (
              <li style={{ padding: "16px 24px", cursor: "not-allowed" }}>
                No available options
              </li>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
