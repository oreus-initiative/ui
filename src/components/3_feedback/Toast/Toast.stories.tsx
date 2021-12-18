import React from "react";

import { Meta, Story } from '@storybook/react';
import { Toast, ToastProps } from './Toast';

const meta: Meta = {
    title: 'Feedback/Toast',
    component: Toast
}

export default meta;


const Template: Story<ToastProps> = (args) => <Toast {...args}/>;

export const Default = Template.bind({});
Default.args = {};