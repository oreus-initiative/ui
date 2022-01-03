import React from "react";

import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Color } from "../../../interfaces/Color";
import { Size } from "../../../interfaces/Size";
import { ButtonVariant } from "../../../interfaces/ButtonVariant";

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
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    size: Size.MD,
    onClick: () => console.log("You clicked the button !")
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    children: "Add",
    disabled: false,
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    size: Size.MD,
    startIcon: <FontAwesomeIcon icon={faPlusCircle}/>,
    onClick: () => console.log("You clicked the button !")
};

export const AsLink = Template.bind({});
AsLink.args = {
    children: "Website",
    disabled: false,
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    size: Size.MD,
    startIcon: <FontAwesomeIcon icon={faGlobe}/>,
    href: "https://www.example.com",
    target: "_blank"
};