// Generated with util/create-component.js
import React from "react";
import BlueprintContainer from "../BlueprintContainer/BlueprintContainer";
import Button from "../Button/Button";
import Navbar from "./Navbar";

export default {
  title: "Navbar",
};

const routes = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Projets",
    href: "/projects",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "À Propos",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export const Default = () => (
  <BlueprintContainer style={{ minHeight: "2000px", margin: "-16px" }}>
    <Navbar
      logoWide="/vectors/logo_wide.svg"
      logoNarrow="/vectors/logo_narrow.svg"
      routes={routes}
      actionLabel="Premier Contact"
      active={routes[0].href}
      actionOnClick={() => alert("Premier Contact")}
      onRouteClicked={(href) => alert(`Redirect to '${href}'.`)}
      phoneNumber="514-775-1234"
    />
  </BlueprintContainer>
);
