// Generated with util/create-component.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialLinkProps } from "./SocialLink.types";

import "./SocialLink.scss";

const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  url,
  disabled,
  className,
  style,
}) => (
  <a
    data-testid="SocialLink"
    href={url}
    target="_blank"
    rel="noreferrer"
    style={style}
    className={`oreus-social-link ${
      disabled || !url ? "oreus-social-link-disabled" : ""
    } ${className || ""}`}
  >
    <FontAwesomeIcon icon={icon} />
  </a>
);

export default SocialLink;
