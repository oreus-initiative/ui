import React from 'react';

import { BadgeVariant } from '../../../interfaces/BadgeVariant';
import { Color } from '../../../interfaces/Color';

import "./Badge.scss";

export interface BadgeProps {
    number: Number,
    children: Node,
    color?: Color,
    variant?: string
};

export const defaultProps = {
    color: Color.PRIMARY,
    variant: BadgeVariant.NORMAL
};

export function Badge({
    number,
    children,
    color = defaultProps.color,
    variant = defaultProps.variant
}) {

    const MAX_NUMBER = 99;

    const getClassname = () => {
        return `o_badge o_badge_color_${color} o_badge_variant_${variant}`;
    }

    const getCroppedNumber = () => {
        if(parseInt(number) > MAX_NUMBER) {
            return "99+"
        }
        return number
    }

    return (
        <div className="o_badge_container">
            <div className={getClassname()}>{variant.indexOf(BadgeVariant.DOT) === -1 ? getCroppedNumber() : ""}</div>
            {children}
        </div>
    )
}