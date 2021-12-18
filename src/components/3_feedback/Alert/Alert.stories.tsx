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
Default.args = {};