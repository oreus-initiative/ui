import React from "react";

import { Meta, Story } from '@storybook/react';
import { Alert, AlertProps } from './Alert';

const meta: Meta = {
    title: 'Feedback/Alert',
    component: Alert
}

export default meta;


const Template: Story<AlertProps> = (args) => <Alert {...args}/>;

export const Default = Template.bind({});
Default.args = {
    color: "primary",
    title: "Info Alert",
    children: <>This box is to inform about a certain topic.</>
};

export const Success = Template.bind({});
Success.args = {
    color: "success",
    title: "Success Alert",
    children: <>This box is to inform that a certain task was performed successfully.</>
};

export const Warning = Template.bind({});
Warning.args = {
    color: "warning",
    title: "Warning Alert",
    children: <>This box is to warn you that you might need to pay attention at something.</>
};

export const Danger = Template.bind({});
Danger.args = {
    color: "danger",
    title: "Danger Alert",
    children: <>This box is to warn you a task failed or that you are about to do something dangerous.</>
};