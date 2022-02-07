import React from "react";

import { Meta, Story } from '@storybook/react';
import { Backdrop, BackdropProps } from './Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const meta: Meta = {
    title: 'Feedback/Backdrop',
    component: Backdrop
}

export default meta;


const Template: Story<BackdropProps> = (args) => <Backdrop {...args}/>;

export const Default = Template.bind({});
Default.args = {
    children: <div style={{position: "absolute", top: "50%", left: "50%", transform: "Translate(-50%, -50%)"}}>This is a semi-transparent backdrop</div>,
    isOpen: true
};