import React from 'react';
import classnames from 'classnames';

import './index.scss';

export const Layout = (props) => {
    const { children, className } = props;

    let styleClasses = classnames('layout')

    if (className) {
        styleClasses += ' ' + className;
    }


    return (
        <div className={styleClasses}>
            {children}
        </div>
    )
}

export const Content = (props) => {
    const { children } = props;
    return (
        <div className="content">
            {children}
        </div>
    )
}