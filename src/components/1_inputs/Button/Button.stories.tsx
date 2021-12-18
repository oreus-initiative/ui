import React from "react";

import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const meta: Meta = {
    title: 'Inputs/Button',
    component: Button
}

export default meta;


const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    variant: "outlined",
    label: 'Button',
};