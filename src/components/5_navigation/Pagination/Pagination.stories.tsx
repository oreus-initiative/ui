import React from "react";

import { Meta, Story } from '@storybook/react';
import { Pagination, PaginationProps } from './Pagination';

const meta: Meta = {
    title: 'Navigation/Pagination',
    component: Pagination
}

export default meta;


const Template: Story<PaginationProps> = (args) => <Pagination {...args}/>;

export const Default = Template.bind({});
Default.args = {};