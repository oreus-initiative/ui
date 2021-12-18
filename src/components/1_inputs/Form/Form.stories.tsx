import React from "react";

import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from './Form';

const meta: Meta = {
    title: 'Inputs/Form',
    component: Form
}

export default meta;


const Template: Story<FormProps> = (args) => <Form {...args}/>;

export const Default = Template.bind({});
Default.args = {};