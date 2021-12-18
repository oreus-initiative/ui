import React from 'react'

export interface ButtonProps {
    startIcon?: Node,
    endIcon?: Node,
    variant?: string,
    size?: string
};

export const defaultProps = {
    variant: 'primary',
    size: 'md'
};

export function Button() {
    return (
        <div>
            Not Implemented
        </div>
    )
}


