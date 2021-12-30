import React from 'react'

import { Color } from '../../../interfaces/Color';
import { Size } from '../../../interfaces/Size';
import { ButtonVariant } from '../../../interfaces/ButtonVariant';

import "./Button.scss";

export interface ButtonProps {
    startIcon?: Node,
    endIcon?: Node,
    children?: Node,
    className?: string,
    color?: Color,
    disabled: Boolean,
    href?: string,
    target?: string
    onClick?: Function,
    variant?: ButtonVariant,
    size?: Size,
    fullWidth?: boolean
};

export const defaultProps = {
    color: Color.PRIMARY,
    variant: ButtonVariant.CONTAINED,
    size: Size.MD,
    disabled: false
};

/**
 * Displays a button-style component, either for regular buttons and
 * internal / external links.
 * 
 * @param props Props of the button 
 * 
 * @returns Button Component
 */
export function Button({
    color = defaultProps.color,
    disabled = defaultProps.disabled,
    variant = defaultProps.variant,
    size = defaultProps.size,
    startIcon,
    endIcon,
    children,
    className,
    href,
    target,
    onClick,
    fullWidth
}) {

    /**
     * From the provided props, evaluates which classnames to
     * attach to the button and concatenates them together.
     * 
     * @returns All classnames required for complete styling
     */
    const getClassName = (): string => {
        return `o_btn ` +
        `o_btn_${variant}_${color} ` +
        `o_btn_${size} ` +
        `${fullWidth ? 'o_btn_block ' : ''}` +
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
    const renderIcon = (icon: Node, pos: 'start' | 'end') => {
        let margin;
        if (icon) {
            if (children) {
                margin = pos.indexOf('start') !== -1 ? { marginRight: "1em" } : { marginLeft: "1em" }
            }
            return (<span className="o_btn_icon" style={margin}>{icon}</span>)
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
        return (<>{renderIcon(startIcon, 'start')}{children}{renderIcon(endIcon, 'end')}</>);
    }

    if (href && target.indexOf("_blank") !== -1) {
        return (<a href={href}
            target="_blank"
            rel="noreferrer"
            className={getClassName()}
            style={{ pointerEvents: disabled ? "none" : "all" }}>
            {renderContent()}
        </a>);
    } else if (href && target.indexOf("_blank") === -1) {
        return (<>{renderContent()}</>);
    } else {
        return (<button
            disabled={disabled}
            className={getClassName()}
            onClick={onClick ? onClick : null}>
            {renderContent()}
        </button>);
    }
}


