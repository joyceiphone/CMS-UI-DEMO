import React, { useRef, useEffect } from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Popup(props) {
    const { children, className, title, form, onClose } = props;
    const popRef = useRef(null);

    let styleClasses = '';

    if (className) {
        styleClasses = classnames(className, 'popup');
    }

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (popRef.current && !popRef.current.contains(e.target)) {
                if (onClose) {
                    onClose();
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
    }, [onClose])

    if (form) {
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
    else {
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

}