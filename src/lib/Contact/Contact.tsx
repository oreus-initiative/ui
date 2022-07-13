// Generated with util/create-component.js
import React from "react";

import { ContactProps } from "./Contact.types";

import "./Contact.scss";

const Contact: React.FC<ContactProps> = ({
  newsletter,
  coords,
  onSubscribe,
}) => (
  <div data-testid="Contact" className="oreus-contact">
    <div className="oreus-contact-newsletter">
      <h3>{newsletter.title}</h3>
      <p>{newsletter.description}</p>
    </div>
    <div className="oreus-contact-coords">
      <h3>{coords.title}</h3>
      <p>{coords.address}</p>
      <p>{coords.phone}</p>
      <p>{coords.email}</p>
    </div>
  </div>
);

export default Contact;
