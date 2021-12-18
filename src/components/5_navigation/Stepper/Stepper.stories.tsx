import React from "react";

import { Meta, Story } from '@storybook/react';
import { Stepper, StepperProps } from './Stepper';

const meta: Meta = {
    title: 'Navigation/Stepper',
    component: Stepper
}

export default meta;


const Template: Story<StepperProps> = (args) => <Stepper {...args}/>;

export const Default = Template.bind({});
Default.args = {};