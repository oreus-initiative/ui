import React from "react";

import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';
import { Button } from "../../1_inputs/Button/Button";
import { Color } from "../../../interfaces/Color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { BadgeVariant } from "../../../interfaces/BadgeVariant";

const meta: Meta = {
    title: 'Display/Badge',
    component: Badge
}

export default meta;


const Template: Story<BadgeProps> = (args) => <Badge {...args}/>;

export const Default = Template.bind({});
Default.args = {
    number: 999,
    children: (<Button color={Color.LIGHT}><FontAwesomeIcon icon={faBell}/></Button>),
    variant: BadgeVariant.NORMAL,
    color: Color.PRIMARY
};

export const Dot = Template.bind({});
Dot.args = {
    children: (<Button color={Color.LIGHT}><FontAwesomeIcon icon={faBell}/></Button>),
    variant: BadgeVariant.DOT,
    color: Color.DANGER
};