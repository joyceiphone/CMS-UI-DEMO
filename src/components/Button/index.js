import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Button(props) {
    const { children, className, onClick, disabled } = props;
    let styleClasses = classnames(className, 'button');

    if (disabled) {
        return <button disabled onClick={onClick} className={styleClasses}>{children}</button>
    }
    else {
        return (
            <button onClick={onClick} className={styleClasses}>{children}</button>
        )
    }
}