import React from "react";

import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from './Avatar';
import { Size } from "../../../interfaces/Size";

const meta: Meta = {
    title: 'Display/Avatar',
    component: Avatar
}

export default meta;


const Template: Story<AvatarProps> = (args) => <Avatar {...args}/>;

export const Default = Template.bind({});
Default.args = {
    name: "Alicia Anderson",
    disabled: false,
    onClick: () => {console.log("You clicked the avatar !")},
    size: Size.MD
};

export const ThumbnailOnly = Template.bind({});
ThumbnailOnly.args = {
    thumbnail: "img/avatar_1.jpg",
    disabled: false,
    onClick: () => {console.log("You clicked the avatar !")},
    size: Size.MD
};

export const WithThumbnail = Template.bind({});
WithThumbnail.args = {
    thumbnail: "img/avatar_1.jpg",
    name: "Alicia Anderson",
    desc: "Head of Marketing",
    disabled: false,
    onClick: () => {console.log("You clicked the avatar !")},
    size: Size.MD
};

export const AsLink = Template.bind({});
AsLink.args = {
    thumbnail: "img/avatar_1.jpg",
    name: "Alicia Anderson",
    desc: "Head of Marketing",
    disabled: false,
    href: "https://www.example.com",
    target: "_blank",
    size: Size.MD
};