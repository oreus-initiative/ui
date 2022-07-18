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
  <div style={{ backgroundColor: "black", padding: "10px" }}>
    <TextInput color="light" placeholder="Enter some text..." />
  </div>
);
