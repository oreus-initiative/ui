import React from "react";

import { Meta, Story } from '@storybook/react';
import { Tabs, TabsProps } from './Tabs';

const meta: Meta = {
    title: 'Navigation/Tabs',
    component: Tabs
}

export default meta;


const Template: Story<TabsProps> = (args) => <Tabs {...args}/>;

export const Default = Template.bind({});
Default.args = {};