import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function MenuItem(props) {
    const { children, className, handleClick, value, add } = props;
    console.log(children, 'mark');
    let styleClasses = classnames(className, 'menu-item');
    if (handleClick) {
        if (add) {
            return (
                <div className={styleClasses} onClick={() => handleClick()}>{children}</div>
            )
        }
        else {
            if (value) {
                return (
                    <div className={styleClasses} onClick={() => handleClick(value)}>{children}</div>
                )
            }
            else {
                return (
                    <div className={styleClasses} onClick={() => handleClick()}>{children}</div>
                )
            }
        }
    }
    else {
        return (
            <div className={styleClasses}>{children}</div>
        )
    }
}