import React from "react";

import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

const meta: Meta = {
    title: 'Display/Badge',
    component: Badge
}

export default meta;


const Template: Story<BadgeProps> = (args) => <Badge {...args}/>;

export const Default = Template.bind({});
Default.args = {};