// Generated with util/create-component.js
import React, { useState } from "react";
import Dropdown from "./Dropdown";

export default {
  title: "Dropdown",
};

const defaultOptions = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Cherry",
    value: "cherry",
  },
  {
    label: "Dragon Fruit",
    value: "dragon_fruit",
  },
];

const scrollOptions = defaultOptions.concat([
  {
    label: "Eggplant",
    value: "eggplant",
  },
  {
    label: "Fig",
    value: "fig",
  },
]);

export const Default = () => {
  const [selected, setSelected] = useState(defaultOptions[0]);

  return (
    <Dropdown
      options={defaultOptions}
      selected={selected}
      onChange={setSelected}
    />
  );
};

export const WithScroll = () => {
  const [selected, setSelected] = useState(scrollOptions[0]);

  return (
    <Dropdown
      options={scrollOptions}
      selected={selected}
      onChange={setSelected}
    />
  );
};

export const Disabled = () => {
  const [selected, setSelected] = useState(scrollOptions[0]);

  return (
    <Dropdown
      options={scrollOptions}
      selected={selected}
      disabled={true}
      onChange={setSelected}
    />
  );
};

export const Loading = () => {
  const [selected, setSelected] = useState(scrollOptions[0]);

  return (
    <Dropdown
      options={scrollOptions}
      selected={selected}
      loading={true}
      onChange={setSelected}
    />
  );
};