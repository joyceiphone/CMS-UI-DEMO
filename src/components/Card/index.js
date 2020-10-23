import React from 'react';
import Button from '../Button';
import classnames from 'classnames';

import './index.scss';

export function SimpleCard(props) {
    const { color, text } = props;
    return (
        <div className="simple-card">
            <h2 style={{ color: { color } }}>$0.00</h2>
            <h5>{text}</h5>
        </div>
    )
}

export function CardWithHeader(props) {
    const { category, title, content } = props;

    return (
        <div className="card">
            <div className="card_header">
                <h4>{category}</h4>
            </div>
            <div className="card_body">
                <div className="card_image"></div>
                <div className="card_text">
                    <h5>{title}</h5>
                    <p>{content}</p>
                </div>
            </div>
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