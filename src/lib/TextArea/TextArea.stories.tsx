// Generated with util/create-component.js
import React from "react";
import TextArea from "./TextArea";

export default {
    title: "TextArea"
};

export const Default = () => <TextArea placeholder="Enter some text..." />;
export const Dark = () => <TextArea color="dark" placeholder="Enter some text..." />;
export const Light = () => (
  <div style={{ backgroundColor: "#302e49", padding: "16px" }}>
    <TextArea color="light" placeholder="Enter some text..." />
  </div>
);
