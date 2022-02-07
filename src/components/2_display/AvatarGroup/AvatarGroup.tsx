import React from 'react';

import { Size } from '../../../interfaces/Size';
import { Avatar } from '../Avatar/Avatar';

import "./AvatarGroup.scss";

export interface AvatarGroupProps {
    avatars: Array<{
        thumbnail: string,
        href?: string,
        target?: string,
        onClick?: Function
    }>,
    disabled: boolean,
    showOthers: boolean,
    size?: typeof Size,
    className: string
};

export const defaultProps = {
    avatars: [],
    disabled: false,
    showOthers: true,
    size: Size.MD,
};

const MAX_AVATARS_DISPLAYED = 4;

/**
 * Displays a group of simplified avatar to represent
 * a group of users.
 * 
 * @param props Props of the Avatar Group 
 * @returns Avatar Group Component
 */
export function AvatarGroup({
    avatars = defaultProps.avatars,
    disabled = defaultProps.disabled,
    showOthers = defaultProps.showOthers,
    size = defaultProps.size,
    className
} : AvatarGroupProps) {

    /**
     * From the provided props, evaluates which classnames to
     * attach to the avatargroup and concatenates them together.
     * 
     * @returns All classnames required for complete styling
     */
    const getClassname = (): string => {
        return `o_avatargroup ` +
            `o_avatargroup_${size} ` +
            `${disabled ? "disabled " : ""}` +
            `${className || ''}`;
    }

    const renderShowOthers = () => {
        if(avatars.length > MAX_AVATARS_DISPLAYED) {
            const remainingAvatars = avatars.length - MAX_AVATARS_DISPLAYED;
            return <span className="o_avatargroup_showmore">
                &amp;&nbsp;{remainingAvatars}&nbsp;others{remainingAvatars > 1 ? "s" : ""}
            </span> 
        }
        return null
    }

    return <div className={getClassname()}>
        {avatars.slice(0, MAX_AVATARS_DISPLAYED).map((avatar) => {
            return <Avatar {...avatar} size={size} disabled={disabled}/>
        })}
        {showOthers? renderShowOthers() : null}
    </div>
}