import React, { Children } from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Tab(props) {
    const { children, position, tab, handleChageTab } = props;

    let styleClasses = classnames('tabs', {
        "bottom_position": position === 'bottom'
    })
    return (
        <div className={styleClasses}>
            <div className="tabs_header">
                {Children.map(children, (child, i) => {
                    const { title } = child.props;
                    return <div className={classnames("tabs_item_header", { active: tab === i + 1 })} onClick={() => handleChageTab(i)}>{title}
                    </div>
                })}
            </div>
            <div className="tabs_content">
                {Children.map(children, (child, i) => {
                    if (tab === i + 1) {
                        return child
                    }
                    else {
                        return null;
                    }
                })}
            </div>
        </div>
    )
}