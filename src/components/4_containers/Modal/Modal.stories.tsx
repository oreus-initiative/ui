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
Default.args = {
    isOpen: true,
    title: "Blocking Modal",
    children: <>By default, a modal cannot be closed, blocking further progress.</>
};

export const Closeable = Template.bind({});
Closeable.args = {
    isOpen: true,
    title: "Closeable Modal",
    onClose: () => console.log('Close Modal'),
    children: <>By providing an 'onClose' function to control the state once the close button is clicked you can make an optionnal modal. (See Console)</>
};