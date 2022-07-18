// Generated with util/create-component.js
import React from "react";

import { MediaCardProps } from "./MediaCard.types";

import "./MediaCard.scss";
import Card from "../Card";
import Button from "../Button";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const MediaCard: React.FC<MediaCardProps> = ({
  title,
  subtitle,
  children,
  className,
  style,
  image,
  actionLabel,
  onClick,
}) => (
  <div
    data-testid="MediaCard"
    className={`oreus-media-card-container ${className || ""}`}
    style={style}
  >
    <img src={image} className="oreus-media-card-img" alt={title} />
    <h2>{title}</h2>
    <span className="oreus-media-card-subtitle">{subtitle}</span>
    <div className="oreus-media-card-content">{children}</div>
    {actionLabel ? (
      <div className="oreus-media-card-action-container">
        <Button
          variant="text"
          color="primary"
          label={actionLabel}
          onClick={onClick}
        />
      </div>
    ) : null}
  </div>
);

export default MediaCard;
