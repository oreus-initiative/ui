import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Size } from '../../../interfaces/Size';

import "./Avatar.scss";

export interface AvatarProps {
    thumbnail: string,
    name?: string,
    desc?: string,
    disabled: Boolean,
    href?: string,
    target?: string
    onClick?: Function,
    size?: typeof Size,
    className?: string,
    style?: any
};

export const defaultProps = {
    size: Size.MD,
    disabled: false
};

export function Avatar({
    thumbnail,
    name,
    desc,
    disabled,
    href,
    target,
    onClick,
    size,
    className,
    style
}) {

    /**
     * From the provided props, evaluates which classnames to
     * attach to the avatar and concatenates them together.
     * 
     * @returns All classnames required for complete styling
     */
    const getClassname = (): string => {
        return `o_avatar ` +
            `o_avatar_${size} ` +
            `${disabled ? "disabled " : ""}` +
            `${className || ''}`;
    }

    /**
     * If no thumbnail is provided, we need to display a placeholder
     * image. Therefore, we created this function to handle the rendering
     * of the avatar image.
     */
    const renderImg = () => {
        return thumbnail ? <img className="o_avatar_img" src={thumbnail} /> :
            <div className="o_avatar_img o_avatar_img_placeholder"><FontAwesomeIcon icon={faUser} /></div>
    }

    /**
     * Function that renders the content of the avatar container,
     * that allows us to use different wrapping components easily.
     */
    const renderContent = () => {
        return <>
            {renderImg()}
            {name ? <div className="o_avatar_info">
                {name ? <div className="o_avatar_name">{name}</div> : null}
                {desc ? <div className="o_avatar_desc">{desc}</div> : null}
            </div> : null}
        </>
    }

    if (href && target.indexOf("_blank") !== -1) {
        return (<a href={href}
            target="_blank"
            rel="noreferrer"
            className={getClassname()}
            style={{ pointerEvents: disabled ? "none" : "all", ...style }}>
            {renderContent()}
        </a>);
    } else if (href && target.indexOf("_blank") === -1) {
        // Todo; Handle internal links ?
        return (<div className={getClassname()} style={style}>{renderContent()}</div>);
    } else {
        return <button
            className={getClassname()}
            disabled={disabled}
            onClick={onClick}
            style={style}>
            {renderContent()}
        </button>
    }
}