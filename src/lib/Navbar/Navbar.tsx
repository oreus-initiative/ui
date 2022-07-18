// Generated with util/create-component.js
import React, { useEffect, useState } from "react";

import { NavbarProps } from "./Navbar.types";

import "./Navbar.scss";
import Button from "../Button";
import {
  faBars,
  faMultiply,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar: React.FC<NavbarProps> = ({
  className,
  style,
  routes,
  active,
  actionLabel,
  actionOnClick = () => {},
  phoneNumber,
  onRouteClicked = () => {},
  logoWide,
  logoNarrow,
}) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isActiveRoute = (route: string) => {
    return active.indexOf(route) > -1;
  };

  return (
    <div
      data-testid="Navbar"
      className={`oreus-navbar ${scrollPosition <= 25 ? "navbar-no-bg" : ""} ${
        className || ""
      }`}
      style={style}
    >
      {/* MOBILE NAVIGATION */}
      <div className="oreus-navbar-mobile">
        <div className="oreus-navbar-left">
          <img
            src={logoWide}
            className="oreus-navbar-logo oreus-navbar-logo-narrow"
          />
        </div>
        <div className="oreus-navbar-right">
          <Button variant="text" icon={faPhoneSquare} color="light" />
          <Button
            variant="text"
            icon={faBars}
            color="light"
            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
          />
        </div>
      </div>
      <div
        className={`oreus-navbar-mobile-links ${
          isMobileNavOpen ? "oreus-navbar-mobile-links-open" : ""
        }`}
      >
        <div className="oreus-navbar-mobile-links-topbar">
          <img src={logoWide} className="oreus-navbar-logo" />
          <Button
            variant="text"
            icon={faMultiply}
            color="light"
            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
          />
        </div>
        <div className="oreus-navbar-mobile-links-routes">
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
          <a
            className="oreus-phone-number"
            href={`tel:${phoneNumber}`}
          >
            <FontAwesomeIcon icon={faPhoneSquare} />
            &nbsp;&nbsp;{phoneNumber}
          </a>
        </div>
      </div>
      {/* DESKTOP NAVIGATION */}
      <div className="oreus-navbar-desktop">
        <div className="oreus-navbar-left">
          <img
            src={logoNarrow}
            className="oreus-navbar-logo oreus-navbar-logo-narrow"
          />
          <img
            src={logoWide}
            className="oreus-navbar-logo oreus-navbar-logo-wide"
          />
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
          <a
            className="oreus-phone-number oreus-phone-short"
            href={`tel:${phoneNumber}`}
          >
            <FontAwesomeIcon icon={faPhoneSquare} />
          </a>
          <a
            className="oreus-phone-number oreus-phone-long"
            href={`tel:${phoneNumber}`}
          >
            <FontAwesomeIcon icon={faPhoneSquare} />
            &nbsp;&nbsp;{phoneNumber}
          </a>
          <Button
            label={actionLabel}
            variant="contained"
            color="light"
            className="oreus-first-contact-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
