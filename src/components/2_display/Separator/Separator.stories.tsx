import React from "react";

import { Meta, Story } from '@storybook/react';
import { Separator, SeparatorProps } from './Separator';

const meta: Meta = {
    title: 'Display/Separator',
    component: Separator
}

export default meta;


const Template: Story<SeparatorProps> = (args) => <div style={{height: '100%', width: '100%', position: 'relative'}}>
    <Separator {...args}/>
</div>;

export const Default = Template.bind({});
Default.args = {
    title: "Horizontal Separator",
};