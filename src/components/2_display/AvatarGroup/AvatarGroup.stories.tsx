import React from "react";

import { Meta, Story } from '@storybook/react';
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup';
import { Size } from "../../../interfaces/Size";

const meta: Meta = {
    title: 'Display/AvatarGroup',
    component: AvatarGroup
}

export default meta;


const Template: Story<AvatarGroupProps> = (args) => <AvatarGroup {...args}/>;

export const Default = Template.bind({});
Default.args = {
    avatars: [
        {
            thumbnail: "img/avatar_1.jpg",
            href: "https://www.example.com/?avatar=1",
            target:"_blank"
        },
        {
            thumbnail: "img/avatar_2.jpg",
            href: "https://www.example.com/?avatar=2",
            target:"_blank"
        },
        {
            thumbnail: "img/avatar_3.jpg",
            href: "https://www.example.com/?avatar=3",
            target:"_blank"
        },
        {
            thumbnail: "img/avatar_4.jpg",
            href: "https://www.example.com/?avatar=4",
            target:"_blank"
        },
        {
            // This one wont be displayed as the avatar
            // group only displays 4 elements.
            href: "https://www.example.com/?avatar=5",
            target:"_blank"
        }
    ],
    disabled: false,
    showOthers: true,
    size: Size.MD
};
