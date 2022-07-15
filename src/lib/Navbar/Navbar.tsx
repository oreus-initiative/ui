// Generated with util/create-component.js
import React from "react";

import { NavbarProps } from "./Navbar.types";

import "./Navbar.scss";
import Button from "../Button";

const Navbar: React.FC<NavbarProps> = ({
  routes,
  active,
  actionLabel,
  actionOnClick = () => {},
  phoneNumber,
  onRouteClicked = () => {},
  logo,
}) => {
  const isActiveRoute = (route: string) => {
    return active.indexOf(route) > -1;
  };

  return (
    <div data-testid="Navbar" className="oreus-navbar">
      <div className="oreus-navbar-left">
        <img src={logo} className="oreus-navbar-logo" />
        {routes.map((route, index) => (
          <Button
            key={`route_${index}`}
            label={route.title}
            variant={isActiveRoute(route.href) ? "contained" : "text"}
            disabled={isActiveRoute(route.href)}
            color="light"
            onClick={() => onRouteClicked(route.href)}
          />
        ))}
      </div>
      <div className="oreus-navbar-right">
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        <Button label={actionLabel} variant="contained" color="light" />
      </div>
    </div>
  );
};

export default Navbar;
