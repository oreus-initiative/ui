// Generated with util/create-component.js
import React from "react";

import { CardProps } from "./Card.types";

import "./Card.scss";

const Card: React.FC<CardProps> = ({ title, subtitle, children, className, style }) => (
  <div
    data-testid="Card"
    className={`oreus-card-container ${className || ""}`}
    style={style}
  >
    <h4>{title}</h4>
    <span className="oreus-card-subtitle">{subtitle}</span>
    <div className="card-content">{children}</div>
  </div>
);

export default Card;
