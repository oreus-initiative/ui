// Generated with util/create-component.js
import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Checkbox",
};

export const Default = () => {
  const [value, setValue] = useState(false);

  return <Checkbox label="Option A" value={value} onChange={setValue} />;
};

export const Dark = () => {
  const [value, setValue] = useState(false);

  return <Checkbox label="Option A" color="dark" value={value} onChange={setValue} />;
};
