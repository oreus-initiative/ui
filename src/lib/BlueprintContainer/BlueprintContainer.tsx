// Generated with util/create-component.js
import React from "react";

import { BlueprintContainerProps } from "./BlueprintContainer.types";

import "./BlueprintContainer.scss";

const BlueprintContainer: React.FC<BlueprintContainerProps> = ({ children }) => (
  <div data-testid="BlueprintContainer" className="oreus-blueprint-container">
    {children}
  </div>
);

export default BlueprintContainer;
