import React from "react";

import { Meta, Story } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';

const meta: Meta = {
    title: 'Navigation/Breadcrumbs',
    component: Breadcrumbs
}

export default meta;


const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args}/>;

export const Default = Template.bind({});
Default.args = {};