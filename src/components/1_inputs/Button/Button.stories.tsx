import React from "react";

import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const meta: Meta = {
    title: 'Inputs/Button',
    component: Button
}

export default meta;


const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: "Button",
    disabled: false,
    color: "primary",
    variant: "contained",
    size: "md",
    onClick: () => console.log("You clicked the button !")
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    children: "Add",
    disabled: false,
    color: "primary",
    variant: "contained",
    size: "md",
    startIcon: <FontAwesomeIcon icon={faPlusCircle}/>,
    onClick: () => console.log("You clicked the button !")
};

export const AsLink = Template.bind({});
AsLink.args = {
    children: "Website",
    disabled: false,
    color: "primary",
    variant: "contained",
    size: "md",
    startIcon: <FontAwesomeIcon icon={faGlobe}/>,
    href: "https://www.example.com",
    target: "_blank"
};