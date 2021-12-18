import React from "react";

import { Meta, Story } from '@storybook/react';
import { Progress, ProgressProps } from './Progress';

const meta: Meta = {
    title: 'Feedback/Progress',
    component: Progress
}

export default meta;


const Template: Story<ProgressProps> = (args) => <Progress {...args}/>;

export const Default = Template.bind({});
Default.args = {};