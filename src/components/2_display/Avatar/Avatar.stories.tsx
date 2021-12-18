import React from "react";

import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';

const meta: Meta = {
    title: 'Display/Avatar',
    component: Avatar
}

export default meta;


const Template: Story<AvatarProps> = (args) => <Avatar {...args}/>;

export const Default = Template.bind({});
Default.args = {};