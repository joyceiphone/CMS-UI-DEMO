import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Menu(props) {
    const { children, className, open, position } = props;
    let styleClasses = classnames(className, 'menu');

    if (position === 'bottom') {
        styleClasses += ' ' + 'menu_bottom';
    }

    return (
        open ? (
            <div className={styleClasses}>
                {children}
            </div>
        ) : null
    )

}