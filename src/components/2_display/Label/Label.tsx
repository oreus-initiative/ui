import React from 'react'

import { Size } from '../../../interfaces/Size';
import { ButtonVariant } from '../../../interfaces/ButtonVariant';
import { Color } from '../../../interfaces/Color';

import "./Label.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export interface LabelProps {
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    children?: React.ReactNode,
    className?: string,
    color?: Color,
    disabled: boolean,
    href?: string,
    target?: string
    onClick?: Function,
    variant?: ButtonVariant,
    fullWidth?: boolean
};

export const defaultProps = {
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    disabled: false
};

/**
 * Displays a label, clickable or not, that can be used
 * to indicate categories.
 * 
 * @param props Props of the label 
 * 
 * @returns Label Component
 */
 export function Label({
    color = defaultProps.color,
    disabled = defaultProps.disabled,
    variant = defaultProps.variant,
    startIcon,
    showRemove,
    children,
    className,
    href,
    target,
    onClick
} : LabelProps) {

    /**
     * From the provided props, evaluates which classnames to
     * attach to the button and concatenates them together.
     * 
     * @returns All classnames required for complete styling
     */
    const getClassname = (): string => {
        return `o_label ` +
        `o_label_${variant}_${color} ` +
        `${disabled ? "disabled " : ""}` +
        `${className || ''}`;
    }

    /**
     * Renders a start or end icon for a button with proper
     * margin depending of there's content or not (allowing)
     * for icon only button.
     * 
     * @param icon Icon to be rendered
     * @param pos Position of the icon ('start' or 'end')
     * @returns JSX rendering an icon with proper margins
     */
    const renderIcon = (icon: React.ReactNode, pos: 'start' | 'end') => {
        let margin;
        if (icon) {
            if (children) {
                margin = pos.indexOf('start') !== -1 ? { marginRight: "1em" } : { marginLeft: "1em" }
            }
            return (<span className="o_label_icon" style={margin}>{icon}</span>)
        }
        return null;
    }

    /**
     * Utility function to handle how the content of the button is displayed.
     * Ensures uniformity of content between use cases.
     * 
     * @returns JSX containing icons and content of the button.
     */
    const renderContent = () => {
        return (<>
            {renderIcon(startIcon, 'start')}
            {children}
            {showRemove ? <FontAwesomeIcon style={{marginLeft: "1em"}} icon={faTimes}/> : null}
        </>);
    }

    if (href && target.indexOf("_blank") !== -1) {
        return (<a href={href}
            target="_blank"
            rel="noreferrer"
            className={getClassname()}
            style={{ pointerEvents: disabled ? "none" : "all" }}>
            {renderContent()}
        </a>);
    } else if (onClick) {
        return (<button
            disabled={disabled}
            className={getClassname()}
            onClick={onClick ? onClick : null}>
            {renderContent()}
        </button>);
    } else {
        return (<span className={getClassname()}>{renderContent()}</span>);
    }
}