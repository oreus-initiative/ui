// Generated with util/create-component.js
import React from "react";

import { NavbarProps } from "./Navbar.types";

import "./Navbar.scss";

const Navbar: React.FC<NavbarProps> = ({ foo }) => (
    <div data-testid="Navbar" className="foo-bar">{foo}</div>
);

export default Navbar;

