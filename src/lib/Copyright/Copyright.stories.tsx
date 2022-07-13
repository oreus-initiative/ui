// Generated with util/create-component.js
import React from "react";
import Copyright from "./Copyright";

export default {
  title: "Copyright",
};

export const Default = () => (
  <div style={{backgroundColor: "#302e49", padding: "10px"}}>
    <Copyright
      company="Oreus S.E.N.C"
      year={new Date().getFullYear()}
      flavor="Made with passion in Quebec"
      flavorImg="/images/components/copyright/qc-tag.svg"
    />
  </div>
);
