// Generated with util/create-component.js
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import Contact from "./Contact";

export default {
  title: "Contact",
};

const newsletter = {
  title: "Newsletter",
  description:
    "Subscribe to our newsletter to receive the latest news and updates about our products.",
  inputPlaceholder: "Enter your email",
  buttonLabel: "Subscribe",
  errors: {
    required: "Email is required",
    valid: "Please provide a valid email",
  },
  onSubscribe: (email) => {
    alert(email);
  },
};

const coords = {
  title: "Montreal Region",
  address: "169 rue Landry, Sherbrooke, QC",
  phone: "+1 514-775-7013",
  email: "contact@oreus.ca",
};

export const Default = () => (
  <div style={{ backgroundColor: "#302e49", padding: "16px" }}>
    <Contact newsletter={newsletter} coords={coords} />
  </div>
);
