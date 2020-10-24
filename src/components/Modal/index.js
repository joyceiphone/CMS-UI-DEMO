import React, { useState, useRef, useEffect } from 'react';
import DropDown from '../../components/Dropdown';
import Button from '../../components/Button';
import classnames from 'classnames';


import './index.scss';

export default function Modal(props) {
    const { title, visible, onClose, history } = props;
    const [disabled, setDisabled] = useState(true);
    const [values, setValues] = useState({ name: '', customer: '', note: '' });
    const [alert1, setAlert1] = useState(false);
    const [alert2, setAlert2] = useState(false);
    const [countNameClick, setNameClick] = useState(0);
    // const [countCustomerClick, setCustomerClick] = useState(0);


    const nameRef = useRef(null);
    const customerRef = useRef(null);

    const handleClear = () => {
        setNameClick(0);
        setAlert1(false);
        setAlert2(false);
        setValues({ name: '', customer: '', note: '' });
    }

    const handleSubmit = () => {
        onClose();
        handleClear();
        history.history.push('/projects/test');
    }

    const handleNameClick = () => {
        setNameClick(1);
    }
    // const handleCustomerClick = () => {
    //     setCustomerClick(1);
    // }

    const handleClick = (value) => {
        const nextValues = { ...values, customer: value };
        setValues(nextValues);
        setAlert2(false);
    }

    const handleTextNameChange = (e) => {
        const nextValues = { ...values, name: e.target.value };
        setValues(nextValues);
        if (alert1) {
            setAlert1(false);

        }
    }

    const handleTextCustomerChange = (value) => {
        const nextValues = { ...values, customer: value };
        setValues(nextValues);
        if (alert2) {
            setAlert2(false);

        }
    }
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (nameRef.current && !nameRef.current.contains(e.target)) {
                if (values.name === '') {
                    setAlert1(true);
                }
                else {
                    setAlert1(false);
                }
            }
        }
        document.addEventListener('click', handleClickOutSide, true);
        return () => {
            document.removeEventListener('click', handleClickOutSide, true);
        }
    }, [nameRef, values])
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (customerRef.current && !customerRef.current.contains(e.target) && countNameClick) {
                if (values.customer === '') {
                    setAlert2(true);
                }
                else {
                    setAlert2(false);
                }
            }
        }
        document.addEventListener('click', handleClickOutSide, true);
        return () => {
            document.removeEventListener('click', handleClickOutSide, true);
        }
    }, [customerRef, values, countNameClick])

    useEffect(() => {
        if (values.customer !== '' && values.name !== '') {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, [values])

    const showAlert2 = () => {
        setAlert2(false);
    }
    const handleClose = () => {
        onClose();
        handleClear()
    }

    if (visible) {
        return (
            <div className='modal'>
                <div className="modal_wrapper">
                    <div className='modal_header'>
                        <h4>{title}</h4>
                        <div className="div_close" onClick={handleClose}><span>x</span></div>
                    </div>
                    <div className='modal_content'>
                        <div>
                            {
                                alert1 ? (
                                    <div className="modal_input_icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24"><path d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="red" ></path></svg>
                                        <h5 style={{ color: 'red' }}>Project name*</h5>
                                    </div>
                                ) : (<h5 className="modal_input">Project name*</h5>)
                            }
                            {
                                alert1 ? (
                                    <input style={{ outlineColor: 'red' }} onClick={handleNameClick} ref={nameRef} className={classnames("name-input", {})} value={values.name} onChange={(e) => handleTextNameChange(e)} type="text" pleaceholder="What's the project?" />
                                ) : (
                                        <input onClick={handleNameClick} ref={nameRef} className={classnames("name-input", {})} value={values.name} onChange={(e) => handleTextNameChange(e)} type="text" pleaceholder="What's the project?" />
                                    )
                            }
                        </div>
                        <div>
                            {
                                alert2 ? (
                                    <div className="modal_input_icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24"><path d="M13 13h-2V7h2m0 10h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2z" fill="red" ></path></svg>
                                        <h5 style={{ color: 'red' }}>Customer*</h5>
                                    </div>) : (
                                        <h5 className="modal_input">Customer*</h5>)
                            }
                            <DropDown reference={customerRef} alert={alert2} showAlert={showAlert2} value={values.customer} textChange={handleTextCustomerChange} text="Who's the project for" handleValue={handleClick} >
                            </DropDown>
                        </div>
                        <div>
                            <h5>Notes</h5>
                            <textarea placeholder="Add details you want to remember" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="modal_footer">
                        <Button disabled={disabled} className='primary-button' onClick={handleSubmit}>Save</Button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}