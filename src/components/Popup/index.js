import React, { useRef, useEffect, useState } from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Popup(props) {
    const { children, handlePopUp, className, title, form } = props;
    const popRef = useRef(null);

    let styleClasses = '';

    if (className) {
        styleClasses = classnames(className, 'popup');
    }
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (popRef && popRef.current && !popRef.current.contains(e.target)) {
                if (handlePopUp) {
                    handlePopUp();
                }
                else {
                    return;
                }
            }
        }
        document.addEventListener('click', handleClickOutSide, true);
        return () => {
            document.removeEventListener('click', handleClickOutSide, true);
        }
    }, [popRef])

    if (form) {
        return (
            <div ref={popRef} className={styleClasses}>
                <div className="popup_wrapper">
                    {
                        title && (
                            <div className="popup_header">
                                <h4>{title}</h4>
                            </div>
                        )
                    }
                    {children}
                </div>
            </div>
        )
    }
    else {
        return (
            <div ref={popRef} className={styleClasses}>
                <div className="popup_wrapper_form">
                    {
                        title && (
                            <div className="popup_header">
                                <h4>{title}</h4>
                            </div>
                        )
                    }
                    {children}
                </div>
            </div>
        )
    }

}