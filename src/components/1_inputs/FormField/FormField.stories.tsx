import React from "react";

import { Meta, Story } from '@storybook/react';
import { FormField, FormFieldProps } from './FormField';

const meta: Meta = {
    title: 'Inputs/FormField',
    component: FormField
}

export default meta;


const Template: Story<FormFieldProps> = (args) => <FormField {...args}/>;

export const Default = Template.bind({});
Default.args = {};