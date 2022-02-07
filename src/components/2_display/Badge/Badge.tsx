import React from 'react';

import { BadgeVariant } from '../../../interfaces/BadgeVariant';
import { Color } from '../../../interfaces/Color';

import "./Badge.scss";

export interface BadgeProps {
    number: Number,
    children: React.ReactNode,
    color?: Color,
    variant?: string
};

export const defaultProps = {
    color: Color.PRIMARY,
    variant: BadgeVariant.NORMAL
};

/**
 * Displays a badge displaying either a simple dot
 * on the top right of some content or a bubble with
 * numbers (like a notification).
 * 
 * @param Props Props of the Badge component 
 * @returns 
 */
export function Badge({
    number,
    children,
    color = defaultProps.color,
    variant = defaultProps.variant
} : BadgeProps) {

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