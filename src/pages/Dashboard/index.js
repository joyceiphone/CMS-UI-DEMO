import React, { useState } from 'react';
import SideBar from '../../components/SideBar';
import { Layout, Content } from '../../components/Layout';

import './index.scss';

export default function Dashboard() {
    const [collapse, setCollapse] = useState(true);
    const onCollapse = () => {
        setCollapse(!collapse);
    }
    return (
        <Layout>
            <SideBar collapse={collapse} onCollapse={onCollapse} />
            <Content>
                <button onClick={onCollapse}>click</button>
                <h1>Dashboard</h1>
            </Content>
        </Layout>
    )
}