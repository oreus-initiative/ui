// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faLocationDot,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../Button";
import TextInput from "../TextInput";
import { ContactProps } from "./Contact.types";

import "./Contact.scss";

const Contact: React.FC<ContactProps> = ({
  newsletter,
  coords,
  style,
  className,
}) => {
  const [email, setEmail] = useState("");
  const [isEmailDirty, setEmailDirty] = useState(false);

  const emailRegexp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const isEmailValid = email.toLowerCase().match(emailRegexp);
  const isEmailProvided = email.length > 0;

  const renderEmailErrors = () => {
    const emptyError = <small className="oreus-contact-error"></small>;

    if (!isEmailDirty) {
      return emptyError;
    }

    if (!isEmailProvided) {
      return (
        <small className="oreus-contact-error">
          {newsletter?.errors?.required || "Email is required"}
        </small>
      );
    } else if (!isEmailValid) {
      return (
        <small className="oreus-contact-error">
          {newsletter?.errors?.validEmail || "Please provide a valid email"}
        </small>
      );
    } else {
      return emptyError;
    }
  };

  const handleEmailChange = (email: string) => {
    setEmail(email);
    setEmailDirty(true);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressed, true);
    return () => {
      document.removeEventListener("keydown", handleKeyPressed, true);
    };
  });

  const handleKeyPressed = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubscribe();
    }
  };

  const handleSubscribe = () => {
    if (isEmailValid && isEmailProvided) {
      newsletter.onSubscribe(email);
      setEmail("");
      setEmailDirty(false);
    }
  };

  return (
    <div
      data-testid="Contact"
      className={`oreus-contact ${className || ""}`}
      style={style}
    >
      {newsletter ? (
        <div className="oreus-contact-newsletter">
          <h5 style={{ color: "white" }}>{newsletter.title}</h5>
          <p>{newsletter.description}</p>
          <div className="oreus-contact-newsletter-action">
            <TextInput
              placeholder={newsletter.inputPlaceholder}
              value={email}
              color="light"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <Button
              label={newsletter.buttonLabel || "Subscribe"}
              variant="contained"
              color="light"
              className="oreus-contact-btn"
              disabled={!isEmailValid || !isEmailProvided}
              onClick={() => handleSubscribe(email)}
            />
          </div>
          {renderEmailErrors()}
        </div>
      ) : null}
      <div className="oreus-contact-coords">
        <h5 style={{ color: "white" }}>{coords.title}</h5>
        <a
          href={`https://www.google.com/maps/place/${encodeURI(
            coords.address
          )}`}
        >
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
