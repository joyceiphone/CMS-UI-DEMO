import React from 'react';

import { SimpleCard } from '../Card';

import './index.scss';

export default function OverView() {
    return (
        <div className="overview-container">
            <div className="row">
                <SimpleCard color="rgb(44, 160, 28)" text="INCOME" />
                <SimpleCard color="rgb(44, 160, 28)" text="COSTS" />
            </div>
            <div className="row">
                <SimpleCard color="rgb(44, 160, 28)" text="COSTS" />
                <SimpleCard color="rgb(44, 160, 28)" text="INCOME" />
                <SimpleCard color="rgb(44, 160, 28)" text="COSTS" />
                <SimpleCard color="rgb(44, 160, 28)" text="COSTS" />
            </div>
            <div className="row">
                <SimpleCard color="rgb(44, 160, 28)" text="COSTS" className="middle" />
            </div>
        </div>
    )
}