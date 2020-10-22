import React, { useState, useEffect, useRef } from 'react';
import { projectsCompanies } from '../../constants/projectsData';
import MenuItem from '../../components/Menu/MenuItem';
import Popup from '../../components/Popup';

import classnames from 'classnames';

import './index.scss';

export default function Dropdown(props) {
    const { text, reference, textChange, value, showAlert, handleFn, alert, handleValue } = props;
    const [visible, setVisibility] = useState(false);
    const [addNew, setAddNew] = useState(false);
    const [input, setInput] = useState(value);

    const handleMenuOpen = () => {
        setVisibility(!visible);
        showAlert();
    }
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const menuRef = useRef(null);

    const handleAddNew = () => {
        setAddNew(true);
        setInput(input);
    }
    const handleCloseAddNew = () => {
        textChange(input);
        setInput('');
        setVisibility(!visible);
        setAddNew(false);
    }
    const handleClose = () => {
        setAddNew(false)
    }

    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
                setAddNew(false);
                setVisibility(false);
            }
        }
        document.addEventListener('click', handleClickOutSide, true);
        return () => {
            document.removeEventListener('click', handleClickOutSide, true);
        }
    }, [menuRef])

    if (value === '') {
        return (
            <div className="drop-down">
                <div className="drop-down_input">
                    <input ref={reference} value={value} onClick={() => handleFn()} className={classnames("customer-input", { 'alert_outline': alert })} onChange={(e) => { textChange(e.target.value); handleInputChange(e) }} type="text" pleaceholder={text} />
                    <span onClick={handleMenuOpen}><svg width="36" height="22" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m7 14l5-5h-3V8h-4v4H7l5 5z" fill="black"></path></svg></span>
                </div>
                {
                    visible ? (
                        addNew ? (
                            <Popup className="popup_form" title="New Customer" form={true} onClose={handleClose}>
                                <div className="popup_content">
                                    <h5>*Name</h5>
                                    <input type="text" onChange={(e) => handleInputChange(e)} value={input} />
                                    <div className="button_area">
                                        <span>More Details</span>
                                        <button onClick={handleCloseAddNew}>close</button>
                                    </div>
                                </div>
                            </Popup>
                        ) : (<div ref={menuRef} className="dropdown-menu-wrapper">
                            <MenuItem add handleClick={handleAddNew} className="menu-item_dropdown">+ Add New {value}</MenuItem>
                            {
                                projectsCompanies && projectsCompanies.map((company, i) => (
                                    <MenuItem key={i} handleClick={handleValue} value={company.name} className="menu-item_dropdown">{company.name}</MenuItem>
                                ))
                            }
                        </div>)
                    ) : (
                            null
                        )
                }
            </div>

        )
    }
    else {
        if (projectsCompanies.includes(value)) {
            return (
                <div className="drop-down">
                    <div className="drop-down_input">
                        <input ref={reference} value={value} onClick={() => handleFn()} className="customer-input" onChange={(e) => { textChange(e.target.value); handleInputChange(e) }} type="text" pleaceholder={text} />
                        <span onClick={handleMenuOpen}><svg width="36" height="22" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m7 14l5-5h-3V8h-4v4H7l5 5z" fill="black"></path></svg></span>
                    </div>
                    {
                        visible ? (
                            addNew ? (
                                <Popup className="popup_form" title="New Customer" form={true} onClose={handleClose}>
                                    <div className="popup_content">
                                        <h5>*Name</h5>
                                        <input type="text" onChange={(e) => handleInputChange(e)} value={input} />
                                        <div className="button_area">
                                            <span>More Details</span>
                                            <button onClick={handleCloseAddNew}>close</button>
                                        </div>
                                    </div>
                                </Popup>
                            ) : (<div ref={menuRef} className="dropdown-menu-wrapper">
                                {
                                    projectsCompanies && projectsCompanies.map((company, i) => (
                                        <MenuItem key={i} handleClick={handleValue} value={company.name} className="menu-item_dropdown">{company.name}</MenuItem>
                                    ))
                                }
                            </div>)
                        ) : (
                                null
                            )
                    }
                </div>
            )
        }
        else {
            return (
                <div className="drop-down">
                    <div className="drop-down_input">
                        <input ref={reference} value={value} onClick={() => handleFn()} className="customer-input" onChange={(e) => { textChange(e.target.value); handleInputChange(e) }} type="text" pleaceholder={text} />
                        <span onClick={handleMenuOpen}><svg width="36" height="22" viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m7 14l5-5h-3V8h-4v4H7l5 5z" fill="black"></path></svg></span>
                    </div>
                    {
                        visible ? (
                            addNew ? (
                                <Popup className="popup_form" title="New Customer" form={true} onClose={handleClose}>
                                    <div className="popup_content">
                                        <h5>*Name</h5>
                                        <input type="text" onChange={(e) => handleInputChange(e)} value={input} />
                                        <div className="button_area">
                                            <span>More Details</span>
                                            <button onClick={handleCloseAddNew}>close</button>
                                        </div>
                                    </div>
                                </Popup>
                            ) : (<div className="dropdown-menu-wrapper" ref={menuRef}>
                                <MenuItem add handleClick={handleAddNew} className="menu-item_dropdown">+ Add New {value}</MenuItem>
                            </div>)
                        ) : (
                                null
                            )
                    }
                </div>
            )
        }

    }

}