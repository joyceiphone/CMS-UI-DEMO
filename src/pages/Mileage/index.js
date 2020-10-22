import React, { useState } from 'react';
import { Layout, Content } from '../../components/Layout';
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import bgImg from '../../assets/intuit-logo.svg';

import './index.scss';

export default function Accounting() {
    const [collapse, setCollapse] = useState(true);


    const onCollapse = () => {
        setCollapse(!collapse);
    }
    return (
        <Layout>
            <SideBar collapse={collapse} onCollapse={onCollapse} />
            <Content>
                <div className="project_test_wrapper">
                    <NavBar handleCollapse={onCollapse} />
                    <div className="demo">
                        <h1>Mileage</h1>
                        <img src={bgImg} alt="intuit" />
                    </div>
                </div>
            </Content>
        </Layout>
    )
}