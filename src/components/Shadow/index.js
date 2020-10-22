import React from 'react';

import './index.scss';

export default function Shadow(props) {
    const { children } = props;

    return (
        <div className="shadow">
            {children}
        </div>
    )
}