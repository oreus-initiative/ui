import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Color } from '../../../interfaces/Color';

import './Alert.scss';
import { Button } from '../../1_inputs/Button/Button';

export interface AlertProps {
    title: string,
    className?: string,
    color?: Color
    isCloseable?: boolean,
    children?: React.ReactNode,
};

export const defaultProps = {
    color: "primary",
    isCloseable: false
};

export function Alert({ title, color, className, children }: AlertProps) {

    const [isDisplayed, setIsDisplayed] = useState(true);

    /**
     * From the provided props, evaluates which classnames to
     * attach to the button and concatenates them together.
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
    if (isDisplayed) {
        return (
            <div className={getClassname()}>
                {title ? <div className="o_alert_header">
                    <div>
                        <span className="o_alert_icon">{getIcon()}</span>
                        <span className="o_alert_title">{title}</span>
                    </div>
                    <Button color={color} onClick={() => setIsDisplayed(false)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </Button>
                </div>
                    : null}
                {children}
            </div>
        )
    } else {
        return null;
    }
}