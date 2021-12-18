import React from "react";

import { Meta, Story } from '@storybook/react';
import { Skeleton, SkeletonProps } from './Skeleton';

const meta: Meta = {
    title: 'Feedback/Skeleton',
    component: Skeleton
}

export default meta;


const Template: Story<SkeletonProps> = (args) => <Skeleton {...args}/>;

export const Default = Template.bind({});
Default.args = {};