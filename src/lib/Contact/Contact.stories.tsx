// Generated with util/create-component.js
import React from "react";
import Contact from "./Contact";

export default {
  title: "Contact",
};

const newsletter = {
  title: "Newsletter",
  description:
    "Subscribe to our newsletter to receive the latest news and updates about our products.",
  inputPlaceholder: "Enter your email",
};

const coords = {
  title: "Montreal Region",
  address: "169 rue Landry, Sherbrooke, QC",
  phone: "+1 514-775-7013",
  email: "contact@oreus.ca",
};

export const Default = () => (
  <div style={{ backgroundColor: "#302e49", padding: "16px" }}>
    <Contact
      newsletter={newsletter}
      coords={coords}
      onSubscribe={() => alert("Subscribe to newsletter")}
    />
  </div>
);
