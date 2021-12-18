import React from "react";

import { Meta, Story } from '@storybook/react';
import { Separator, SeparatorProps } from './Separator';

const meta: Meta = {
    title: 'Display/Separator',
    component: Separator
}

export default meta;


const Template: Story<SeparatorProps> = (args) => <Separator {...args}/>;

export const Default = Template.bind({});
Default.args = {};