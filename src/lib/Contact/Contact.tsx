// Generated with util/create-component.js
import React from "react";

import { ContactProps } from "./Contact.types";

import "./Contact.scss";
import TextInput from "../TextInput";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faLocationDot,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC<ContactProps> = ({
  newsletter,
  coords,
  onSubscribe = () => {},
  style,
  className,
}) => {
  const [email, setEmail] = React.useState("");

  return (
    <div
      data-testid="Contact"
      className={`oreus-contact ${className || ""}`}
      style={style}
    >
      <div className="oreus-contact-newsletter">
        <h5 style={{ color: "white" }}>{newsletter.title}</h5>
        <p>{newsletter.description}</p>
        <div className="oreus-contact-newsletter-action">
          <TextInput
            placeholder={newsletter.inputPlaceholder}
            value={email}
            color="light"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            label="M'inscrire"
            variant="contained"
            color="light"
            className="oreus-contact-btn"
            onClick={() => onSubscribe(email)}
          />
        </div>
      </div>
      <div className="oreus-contact-coords">
        <h5 style={{ color: "white" }}>{coords.title}</h5>
        <a href={`https://www.google.com/maps/place/${encodeURI(coords.address)}`}>
          <FontAwesomeIcon icon={faLocationDot} />
          &nbsp;&nbsp;{coords.address}
        </a>
        <a href={`tel:${coords.phone}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPhone} />
          &nbsp;&nbsp;{coords.phone}
        </a>
        <a href={`mailto:${coords.email}`} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faAt} />
          &nbsp;&nbsp;{coords.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
