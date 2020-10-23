import React from 'react';

import { SimpleCard, CardWithHeader, CardDetails } from '../Card';

import './index.scss';

export default function OverView() {
    return (
        <div className="overview-container">
            <div className="row">
                <SimpleCard color="rgb(44, 160, 28)" text="INCOME" />
                <CardWithHeader category="INCOME" >
                    <CardDetails title="Invoices" content="Expand your business" />
                </CardWithHeader>
            </div>
            <div className="row">
                <SimpleCard color="rgb(16, 128, 0)" text="COSTS" />
                <CardWithHeader category="HOURLY TIME COST">
                    <CardDetails title="Hours" content="Expand your business" />
                </CardWithHeader>
                <CardWithHeader category="EXPENSE">
                    <CardDetails title="Expenses" content="Expand your business" />
                    <CardDetails title="Bills" content="Expand your business" />
                </CardWithHeader>
            </div>
            <div className="row">
                <SimpleCard color="black" text="PROFITS" className="middle" />
            </div>
        </div>
    )
}