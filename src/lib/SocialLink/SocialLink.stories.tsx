// Generated with util/create-component.js
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import SocialLink from "./SocialLink";

export default {
  title: "SocialLink",
};

export const Default = () => (
  <div style={{ backgroundColor: "#3F3D56", padding: "10px" }}>
    <SocialLink icon={faFacebookF} url={`https://www.facebook.com`} />
  </div>
);

export const Disabled = () => (
  <div style={{ backgroundColor: "#3F3D56", padding: "10px" }}>
    <SocialLink
      icon={faFacebookF}
      url={`https://www.facebook.com`}
      disabled={true}
    />
  </div>
);
