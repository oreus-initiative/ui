// Generated with util/create-component.js
import React from "react";

import { CopyrightProps } from "./Copyright.types";

import "./Copyright.scss";

const Copyright: React.FC<CopyrightProps> = ({
  flavor,
  flavorImg,
  year,
  company,
  allRightsReserved,
  className,
  style,
}) => (
  <div
    data-testid="Copyright"
    className={`oreus-copyright ${className || ""}`}
    style={style}
  >
    <div className="oreus-copyright-flavor-img">
      <img src={flavorImg} />
    </div>
    <div>
      {flavor ? <div style={{ fontWeight: "bold" }}>{flavor}</div> : null}
      <div>
        &copy;&nbsp;{year}&nbsp;{company}. {allRightsReserved}
      </div>
    </div>
  </div>
);

export default Copyright;
