// Generated with util/create-component.js
import React, { useEffect, useState } from "react";

import { LogoShowcaseProps, ShowcaseLogo } from "./LogoShowcase.types";
import useInterval from "../../hooks/useInterval";
import ColorBox from "../ColorBox";

import "./LogoShowcase.scss";

const LogoShowcase: React.FC<LogoShowcaseProps> = ({
  logos = [],
  delay = 1000,
  className,
  style,
  direction = "right",
}) => {
  const [activeLogo, setActiveLogo] = useState<number>(0);

  const handleLogoChange = () => {
    setActiveLogo((activeLogo + 1) % logos.length);
  };

  useInterval(() => {
    handleLogoChange();
  }, delay);

  return (
    <div
      data-testid="LogoShowcase"
      className={`oreus-logo-showcase oreus-logo-showcase-${direction} ${className || ""}`}
      style={style}
    >
      <div
        className="oreus-logo-showcase-logo"
        key={`${logos[activeLogo].alt}_logoshowcase`}
      >
        <div className="oreus-logo-showcase-logo-container">
          <img src={logos[activeLogo].img} alt={logos[activeLogo].alt} />
        </div>
        <div className="oreus-logo-showcase-logo-colors">
          {logos[activeLogo].colors.map((color, index) => (
            <ColorBox
              key={`${logos[activeLogo].alt}_colorbox_${index}`}
              color={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
