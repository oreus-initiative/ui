import React from 'react';

import './Separator.scss';

export interface SeparatorProps {
    title?: string,
};

export const defaultProps = {};

/**
 * Displays an Horizontal rule with a centered title.
 */
export function Separator({
    title
} : SeparatorProps) {
    return (
        <div className={`o_separator`}>
            <span className="o_separator_title">{title}</span>
        </div>
    )
}