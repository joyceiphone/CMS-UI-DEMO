import React from 'react';
import Button from '../Button';
import classnames from 'classnames';

import './index.scss';

export function SimpleCard(props) {
    const { color, text } = props;
    return (
        <div className="simple-card">
            <h2 style={{ color: color }}>$0.00</h2>
            <h5>{text}</h5>
        </div>
    )
}

export function CardDetails(props) {
    const { title, content } = props;

    return (
        <div className="card_body">
            <div className="card_image">
                <svg style={{ marginLeft: '10px', marginRight: '20px' }} width="40" height="40" viewBox="0 0 32 32"><path d="M6 3v26h16v-2H8V5h10v6h6v2h2V9.6l-.3-.3l-6-6l-.3-.3H6zm14 3.4L22.6 9H20V6.4zM10 13v2h12v-2H10zm17 2v2c-1.7.3-3 1.7-3 3.5c0 2 1.5 3.5 3.5 3.5h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H25v2h2v2h2v-2c1.7-.3 3-1.7 3-3.5c0-2-1.5-3.5-3.5-3.5h-1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H31v-2h-2v-2h-2zm-17 3v2h7v-2h-7zm9 0v2h3v-2h-3zm-9 4v2h7v-2h-7zm9 0v2h3v-2h-3z" fill="black" /></svg>
            </div>
            <div className="card_text">
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    )
}

export function CardWithHeader(props) {
    const { category, children } = props;

    return (
        <div className="card">
            <div className="card_header">
                <h4>{category}</h4>
            </div>
            {children}
        </div>
    )
}

export function CardWithSteps(props) {
    const { num, limit, handleMoveNext, handleMoveBack, handlePopUpClose } = props;

    if (num === 1) {
        return (
            <div className="card_step">
                <div className="card_step_wrapper">
                    <div className="card_step_header">
                        <div>
                            <h4>Your project at a glance</h4>
                        </div>
                        <div className="div_close" onClick={handlePopUpClose}><span>x</span></div>
                    </div>
                    <div className="card_step_body">
                        <p>See your project's performance end-to-end. Track income and all your clinets, including labor</p>
                    </div>
                    <div className="card_step_footer">
                        <h6>{num} of {limit}</h6>
                        <div className="card_step_button">
                            <Button className="black-button" onClick={handleMoveNext}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (num < limit) {
        return (
            <div className={classnames('card_step', `card_step-${num}`)}>
                <div className="card_step_wrapper">
                    <div className="card_step_header">
                        <div>
                            <h4>Your project at a glance</h4>
                        </div>
                        <div className="div_close" onClick={handlePopUpClose}><span>x</span></div>
                    </div>
                    <div className="card_step_body">
                        <p>See your project's performance end-to-end. Track income and all your clinets, including labor</p>
                    </div>
                    <div className="card_step_footer">
                        <h6>{num} of {limit}</h6>
                        <div className="card_step_button">
                            <Button className="black-button" onClick={handleMoveBack}>Back</Button>
                            <Button className="black-button" onClick={handleMoveNext}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
    else {
        return (
            <div className={classnames("card_step", `card_step-${num}`)}>
                <div className="card_step_wrapper">
                    <div className="card_step_header">
                        <div>
                            <h4>Your project at a glance</h4>
                        </div>
                        <div className="div_close" onClick={handlePopUpClose}><span>x</span></div>
                    </div>
                    <div className="card_step_body">
                        <p>See your project's performance end-to-end. Track income and all your clinets, including labor</p>
                    </div>
                    <div className="card_step_footer">
                        <h6>{num} of {limit}</h6>
                        <div className="card_step_button">
                            <Button className="black-button" onClick={handleMoveBack}>Back</Button>
                            <Button className="black-button" onClick={handlePopUpClose}>Done</Button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}