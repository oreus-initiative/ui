import React from "react";

import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './Card';
import { pipelinePrimaryTopicReference } from '@babel/types';

const meta: Meta = {
    title: 'Containers/Card',
    component: Card
}

export default meta;


const Template: Story<CardProps> = (args) => <Card {...args}/>;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    children: <>This is my card content</>
};

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: "Card With Title",
    isOpen: true,
    children: <>This is my card content</>
};

export const Closeable = Template.bind({});
Closeable.args = {
    title: "Closeable Card",
    isOpen: true,
    onClose: () => console.log("Close Card."),
    children: <>This card can be closed when clicking the 'close' button. (See Console)</>
};

export const Colored = Template.bind({});
Colored.args = {
    title: "Colored, Closeable Card",
    color: 'primary',
    isOpen: true,
    onClose: () => console.log("Close Card."),
    children: <>This card can be closed when clicking the 'close' button. (See Console)</>
};