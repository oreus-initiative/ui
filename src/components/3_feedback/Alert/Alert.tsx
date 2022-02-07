import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { Color } from '../../../interfaces/Color';
import { Card } from '../../4_containers/Card/Card';

import './Alert.scss';

export interface AlertProps {
    title: string,
    className?: string,
    color?: Color
    isOpen?: boolean,
    onClose?: Function,
    children?: React.ReactNode,
};

export const defaultProps = {
    color: Color.PRIMARY,
    isOpen: true
};

export function Alert({
    title,
    color = defaultProps.color,
    className,
    isOpen = defaultProps.isOpen,
    onClose,
    children
 }: AlertProps) {

    /**
     * From the provided props, evaluates which classnames to
     * attach to the alert and concatenates them together.
     * 
     * @returns All classnames required for complete styling
     */
    const getClassname = (): string => {
        return `o_alert ` +
            `o_alert_${color || 'primary'}` +
            `${className || ''}`;
    }

    /**
     * Each alert color has its own icon. This function takes
     * in the alert color and returns the proper icon.
     */
    const getIcon = (): React.ReactNode => {
        switch (color) {
            case "success": return <FontAwesomeIcon icon={faCheckCircle} />
            case "warning": return <FontAwesomeIcon icon={faExclamationTriangle} />
            case "danger": return <FontAwesomeIcon icon={faExclamationCircle} />
            default: return <FontAwesomeIcon icon={faInfoCircle} />
        }
    }

    return (
        <Card
            className={getClassname()}
            title={<>
                <span className="o_alert_icon">{getIcon()}</span>
                <span className="o_alert_title">{title}</span>
            </>}
            color={color}
            isOpen={isOpen}
            onClose={onClose}
        >
            {children}
        </Card>
    )
}