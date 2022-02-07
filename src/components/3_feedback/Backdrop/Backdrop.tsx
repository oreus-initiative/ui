import React from 'react';

import "./Backdrop.scss";

export interface BackdropProps {
    children: React.ReactNode,
    isOpen: Boolean
};

export const defaultProps = {};

/**
 * Displays a dark, semi-transparent fullpage screen
 * to highlight content while muting the rest of the
 * page.
 */
export function Backdrop({children, isOpen} : BackdropProps) {
    if(isOpen) {
        return (
            <div className="o_backdrop">
                {children}
            </div>
        )
    } else {
        return <></>;
    }
}