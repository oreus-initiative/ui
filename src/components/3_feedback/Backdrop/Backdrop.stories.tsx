import React from "react";

import { Meta, Story } from '@storybook/react';
import { Backdrop, BackdropProps } from './Backdrop';

const meta: Meta = {
    title: 'Feedback/Backdrop',
    component: Backdrop
}

export default meta;


const Template: Story<BackdropProps> = (args) => <Backdrop {...args}/>;

export const Default = Template.bind({});
Default.args = {};