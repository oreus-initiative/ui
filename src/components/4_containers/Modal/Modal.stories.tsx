import React from "react";

import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

const meta: Meta = {
    title: 'Containers/Modal',
    component: Modal
}

export default meta;


const Template: Story<ModalProps> = (args) => <Modal {...args}/>;

export const Default = Template.bind({});
Default.args = {};