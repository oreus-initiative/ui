// Generated with util/create-component.js
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./Button";

export default {
  title: "Button",
};

export const Variants = () => (
  <>
    <div className="d-flex" style={{fontFamily: "Roboto"}}>
      <h2 style={{minWidth: "250px", color: "#302e49"}}>Primary</h2>
      <Button
        label={"Outlined (default)"}
        variant="outlined"
        onClick={() => alert("You clicked a button.")}
      />
      <Button
        label={"Contained"}
        variant="contained"
        onClick={() => alert("You clicked a button.")}
      />
      <Button
        label={"Text"}
        variant="text"
        onClick={() => alert("You clicked a button.")}
      />
      <div>
        This is a{" "}
        <Button
          label={"Link"}
          variant="link"
          onClick={() => alert("You clicked a button.")}
        />{" "}
        button.
      </div>
    </div>
    <div className="d-flex" style={{backgroundColor: "#302e49", color: "white", fontFamily: "Roboto"}}>
      <h2 style={{color: "white", minWidth: "250px"}}>Light</h2>
      <Button
        label={"Outlined (default)"}
        variant="outlined"
        color="light"
        onClick={() => alert("You clicked a button.")}
      />
      <Button
        label={"Contained"}
        variant="contained"
        color="light"
        onClick={() => alert("You clicked a button.")}
      />
      <Button
        label={"Text"}
        variant="text"
        color="light"
        onClick={() => alert("You clicked a button.")}
      />
      <div>
        This is a{" "}
        <Button
          label={"Link"}
          variant="link"
          color="light"
          onClick={() => alert("You clicked a button.")}
        />{" "}
        button.
      </div>
    </div>
    <div className="d-flex" style={{fontFamily: "Roboto"}}>
      <h2 style={{minWidth: "250px", color: "#302e49"}}>Dark</h2>
      <Button
        label={"Outlined (default)"}
        variant="outlined"
        color="dark"
        onClick={() => alert("You clicked a button.")}
      />
      <Button
        label={"Contained"}
        variant="contained"
        color="dark"
        onClick={() => alert("You clicked a button.")}
      />
      <Button
        label={"Text"}
        variant="text"
        color="dark"
        onClick={() => alert("You clicked a button.")}
      />
      <div>
        This is a{" "}
        <Button
          label={"Link"}
          variant="link"
          color="dark"
          onClick={() => alert("You clicked a button.")}
        />{" "}
        button.
      </div>
    </div>
  </>
);

export const WithIcon = () => (
  <Button
    label={"With Icon"}
    icon={faCirclePlus}
    onClick={() => alert("You clicked a button.")}
  />
);

export const IconOnly = () => (
  <Button icon={faCirclePlus} onClick={() => alert("You clicked a button.")} />
);

export const Disabled = () => (
  <Button
    label={"Disabled"}
    disabled={true}
    onClick={() => alert("You clicked a button.")}
  />
);

export const Loading = () => (
  <Button
    label={"Loading"}
    icon={faCirclePlus}
    loading={true}
    onClick={() => alert("You clicked a button.")}
  />
);
