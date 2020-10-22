import React from 'react';
import Button from '../Button';

import './index.scss';

export default function ProjectStart(props) {
    const { handleVisibility } = props;
    return (
        <div className="project_start_wrapper">
            <div className="project_start_content">
                <div className="project_start_header">
                    <h1>Run your projects with confidence</h1>
                </div>
                <div className="project_start_body">
                    <p>Make better decisions by knowing how your jobs are doing</p>
                    <h4 style={{ color: '#0077c5' }}>See how it works</h4>
                    <ul>
                        <li>
                            <h5>Profitability in one place</h5>
                            <p>Organize your project finances with a clear view profits</p>
                        </li>
                        <li>
                            <h5>Keep Track of your labor costs</h5>
                        </li>
                    </ul>
                    <Button className="primary-button" onClick={() => handleVisibility()}>Start a Project</Button>
                </div>
            </div>
        </div>
    )
}