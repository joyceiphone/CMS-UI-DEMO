import React, { useState } from 'react';
import { Layout, Content } from '../../components/Layout';
import SideBar from '../../components/SideBar';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import NavBar from '../../components/NavBar';
import ProjectStart from '../../components/ProjectStart';

import './index.scss';

export default function Projects(props) {
    const { history } = props;
    const [collapse, setCollapse] = useState(true);
    const [visible, setVisible] = useState(false);
    const [popUpOpen, setPopUp] = useState(false);


    const onCollapse = () => {
        setCollapse(!collapse);
    }
    const handleVisibility = () => {
        setVisible(!visible);
    }
    const handleClose = () => {
        setVisible(false);
    }

    const handlePopUp = () => {
        setPopUp(true);
    }

    const handlePopUpClose = () => {
        setPopUp(false);
    }

    return (
        <Layout>
            <SideBar collapse={collapse} onCollapse={onCollapse} />
            <Content>
                <NavBar handleCollapse={onCollapse} />
                <ProjectStart handleVisibility={handleVisibility} />
            </Content>
            <Modal title='New Project' visible={visible} onClose={handleClose} history={history} handlePopup={handlePopUp}></Modal>
        </Layout>
    )
}