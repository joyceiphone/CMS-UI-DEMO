import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Button(props) {
    const { children, className, onClick, disabled, reference } = props;
    let styleClasses = classnames(className, 'button');

    if (disabled) {
        return <button ref={reference} disabled onClick={onClick} className={styleClasses}>{children}</button>
    }
    else {
        return (
            <button ref={reference} onClick={onClick} className={styleClasses}>{children}</button>
        )
    }
}