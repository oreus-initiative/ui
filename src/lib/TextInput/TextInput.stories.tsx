// Generated with util/create-component.js
import React from "react";
import TextInput from "./TextInput";

export default {
  title: "TextInput",
};

export const Default = () => <TextInput placeholder="Enter some text..." />;
export const Dark = () => (
  <TextInput color="dark" placeholder="Enter some text..." />
);
export const Light = () => (
  <div style={{ backgroundColor: "#302e49", padding: "16px" }}>
    <TextInput color="light" placeholder="Enter some text..." />
  </div>
);
