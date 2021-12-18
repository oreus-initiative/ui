import React from "react";

import { Meta, Story } from '@storybook/react';
import { Label, LabelProps } from './Label';

const meta: Meta = {
    title: 'Display/Label',
    component: Label
}

export default meta;


const Template: Story<LabelProps> = (args) => <Label {...args}/>;

export const Default = Template.bind({});
Default.args = {};