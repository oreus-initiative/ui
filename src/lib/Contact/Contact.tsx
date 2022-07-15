// Generated with util/create-component.js
import React from "react";

import { ContactProps } from "./Contact.types";

import "./Contact.scss";
import TextInput from "../TextInput";
import Button from "../Button";

const Contact: React.FC<ContactProps> = ({
  newsletter,
  coords,
  onSubscribe,
}) => (
  <div data-testid="Contact" className="oreus-contact">
    <div className="oreus-contact-newsletter">
      <h3>{newsletter.title}</h3>
      <p>{newsletter.description}</p>
      <div className="oreus-contact-newsletter-action">
        <TextInput placeholder="Courriel" />
        <Button
          label="M'inscrire"
          variant="contained"
          color="light"
          className="oreus-contact-btn"
        />
      </div>
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
