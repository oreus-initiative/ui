import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../../1_inputs/Button/Button';

import "./Card.scss";
import { Color } from '../../../interfaces/Color';

export interface CardProps {
    title: React.ReactNode | string,
    isOpen: boolean,
    onClose: Function,
    children: React.ReactNode,
    color: Color,
    className: string,
};

export const defaultProps = {
    isOpen: true,
};

export function Card({
    children,
    title,
    isOpen = defaultProps.isOpen,
    onClose,
    className,
    color
} : CardProps) {

    /**
     * From the provided props, evaluates which classnames to
     * attach to the card and concatenates them together.
     * 
     * @returns All classnames required for complete styling
     */
    const getClassname = (): string => {
        return `o_card ` +
            `o_card_${color || 'light'} ` +
            `${className || ''}`;
    }

    if (isOpen) {
        return (
            <div className={getClassname()}>
                {title ? <div className="o_card_header">
                    <div className="o_card_title">{title}</div>
                    {onClose ? <Button size='sm' color={color || 'light'} onClick={() => onClose(!isOpen)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                        : null}
                </div>
                    : null}
                <div className="o_card_body">
                    {children}
                </div>
            </div>
        )
    } else {
        return <></>;
    }
}