// Generated with util/create-component.js
import React from "react";
import LogoShowcase from "./LogoShowcase";

export default {
    title: "LogoShowcase"
};

const logos = [
    {
      img: "/vectors/logos/oreus.svg",
      alt: "Oreus",
      colors: ["#FFFFFF", "#0055FF", "#43FEBB", "#203663"]
    },
    {
      img: "/vectors/logos/kingstate.svg",
      alt: "Kingstate",
      colors: ["#FFFFFF", "#AF883D", "#FFEDB0", "#363636"]
    },
    {
      img: "/vectors/logos/pinax.svg",
      alt: "Pinax",
      colors: ["#000000", "#6824EB", "#EE758C", "#90FFEA"]
    },
];

export const Default = () => <div style={{backgroundColor: "#203663", padding: "16px"}}>
  <LogoShowcase logos={logos} />
</div>;