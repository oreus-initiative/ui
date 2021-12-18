import React from "react";

import { Meta, Story } from '@storybook/react';
import { Appbar, AppbarProps } from './Appbar';

const meta: Meta = {
    title: 'Containers/Appbar',
    component: Appbar
}

export default meta;


const Template: Story<AppbarProps> = (args) => <Appbar {...args}/>;

export const Default = Template.bind({});
Default.args = {};