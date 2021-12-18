import React from "react";

import { Meta, Story } from '@storybook/react';
import { Sidebar, SidebarProps } from './Sidebar';

const meta: Meta = {
    title: 'Containers/Sidebar',
    component: Sidebar
}

export default meta;


const Template: Story<SidebarProps> = (args) => <Sidebar {...args}/>;

export const Default = Template.bind({});
Default.args = {};