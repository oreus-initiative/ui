import React from "react";

import { Meta, Story } from '@storybook/react';
import { Label, LabelProps } from './Label';
import { Color } from '../../../interfaces/Color';
import { ButtonVariant } from '../../../interfaces/ButtonVariant';
import { Size } from '../../../interfaces/Size';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
    title: 'Display/Label',
    component: Label
}

export default meta;


const Template: Story<LabelProps> = (args) => <Label {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: "Label",
    disabled: false,
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED
};

export const ShowRemove = Template.bind({});
ShowRemove.args = {
    children: "Label",
    disabled: false,
    color: Color.PRIMARY,
    showRemove: true,
    variant: ButtonVariant.CONTAINED
};

export const Clickable = Template.bind({});
Clickable.args = {
    children: "Label",
    disabled: false,
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    onClick: () => console.log("You clicked the Label !")
};

export const WithIcons = Template.bind({});
WithIcons.args = {
    children: "Add",
    disabled: false,
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    startIcon: <FontAwesomeIcon icon={faPlusCircle}/>,
    onClick: () => console.log("You clicked the label !")
};

export const AsLink = Template.bind({});
AsLink.args = {
    children: "Website",
    disabled: false,
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    startIcon: <FontAwesomeIcon icon={faGlobe}/>,
    href: "https://www.example.com",
    target: "_blank"
};