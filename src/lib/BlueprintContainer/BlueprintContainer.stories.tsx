// Generated with util/create-component.js
import React from "react";
import Button from "../Button/Button";
import BlueprintContainer from "./BlueprintContainer";

export default {
    title: "BlueprintContainer"
};

export const Default = () => <BlueprintContainer>
  <div style={{padding: "32px"}}>
    <h1>Blueprint</h1>
    <p>This is a Blueprint container, adding the blue background as well as the grid.</p>
    <p>The background is slightly transparent so that we can see a paper texture background rendered separately.</p>
    <Button label="Very fancy" variant="contained" color="light" onClick={() => alert("I KNOW RIGHT ?")}/>
  </div>
</BlueprintContainer>;
