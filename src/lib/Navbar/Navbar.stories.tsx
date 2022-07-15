// Generated with util/create-component.js
import React from "react";
import Button from "../Button/Button";
import Navbar from "./Navbar";

export default {
  title: "Navbar",
};

const routes = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const Default = () => (
  <div style={{ minHeight: "2000px" }}>
    <Navbar
      logo="/vectors/logo.svg"
      routes={routes}
      actionLabel="First Contact"
      active={routes[0].href}
      actionOnClick={() => alert("First Contact")}
      onRouteClicked={(href) => alert(`Redirect to '${href}'.`)}
      phoneNumber="514-775-1234"
    />
  </div>
);
