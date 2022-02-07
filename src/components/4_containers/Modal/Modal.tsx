import React from 'react'
import { Color } from '../../../interfaces/Color';
import { Backdrop } from '../../3_feedback/Backdrop/Backdrop';
import { Card } from '../Card/Card';

import "./Modal.scss";

export interface ModalProps {
    title: React.ReactNode | string,
    isOpen: boolean,
    children: React.ReactNode,
    onClose: Function,
    color: Color
};

export const defaultProps = {};

export function Modal({
    title,
    isOpen,
    children,
    color,
    onClose
} : ModalProps) {

    /**
     * From the provided props, evaluates which classnames to
     * attach to the modal and concatenates them together.
     * 
     * @returns All classnames required for complete styling
     */
    const getClassname = () => {
        return `o_modal`;
    }

    return (
        <Backdrop isOpen={isOpen}>
            <Card
                title={title}
                color={color}
                isOpen={isOpen}
                onClose={onClose ? () => onClose(!isOpen) : undefined}
                className={getClassname()}
            >
                {children}
            </Card>
        </Backdrop>
    )
}