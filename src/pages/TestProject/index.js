import React, { useState, useRef, useEffect } from 'react';
import { Layout, Content } from '../../components/Layout';
import SideBar from '../../components/SideBar';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Popup from '../../components/Popup';
import Tab from '../../components/Tab';
import TabItem from '../../components/Tab/TabItem';
import NavBar from '../../components/NavBar';
import OverView from '../../components/OverView';
import { CardWithSteps } from '../../components/Card';
import Menu from '../../components/Menu';
import MenuItem from '../../components/Menu/MenuItem';
import TimeActivity from '../../components/TimeActivity';
import Transaction from '../../components/Transactions';
import ProjectsReports from '../../components/ProjectsReports';


import './index.scss';

export default function Projects(props) {
    const { history } = props;
    const [collapse, setCollapse] = useState(true);
    const [visible, setVisible] = useState(false);
    const [popUpOpen, setPopUp] = useState(true);
    const [tab, setTab] = useState(1);
    const [menuOpen, setMenuOpen] = useState(false);

    const onCollapse = () => {
        setCollapse(!collapse);
    }
    const handleClose = () => {
        setVisible(false);
    }

    const handlePopUp = () => {
        setPopUp(true);
        setTab(1);
    }

    const handlePopUpClose = () => {
        setPopUp(false);
    }

    const handleChageTab = (index) => {
        setTab(index + 1);
    }

    const handleMoveNext = () => {
        setTab(tab + 1);
    }

    const handleMoveBack = () => {
        setTab(tab - 1);
    }

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    const buttonRef = useRef(null);


    useEffect(() => {
        const handleClickOutSide = (e) => {
            if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('click', handleClickOutSide, true);
        return () => {
            document.removeEventListener('click', handleClickOutSide, true);
        }
    }, [buttonRef])

    return (
        <Layout>
            <SideBar collapse={collapse} onCollapse={onCollapse} />
            <Content>
                <div className="project_test_wrapper">
                    <NavBar handleCollapse={onCollapse} />
                    <div className="project_test_header">
                        <h4>Test Project</h4>
                        <div className="project_test_header_buttons">
                            <div style={{ flexGrow: 1 }}></div>
                            <div style={{ position: 'relative' }}>
                                <Button reference={buttonRef} onClick={handleMenuOpen} className='primary-button'>Add a Project</Button>
                                <Menu open={menuOpen} position="bottom">
                                    <MenuItem className="menu-item_dropdown">Option1</MenuItem>
                                    <MenuItem className="menu-item_dropdown">Option1</MenuItem>
                                    <MenuItem className="menu-item_dropdown">Option1</MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Tab position="bottom" handleChageTab={handleChageTab} tab={tab}>
                        <TabItem title="Overview">
                            <OverView />
                        </TabItem>
                        <TabItem title="Transactions">
                            <Transaction />
                        </TabItem>
                        <TabItem title="Time Activity">
                            <TimeActivity />
                        </TabItem>
                        <TabItem title="Projects Reports">
                            <ProjectsReports />
                        </TabItem>
                    </Tab>
                    <Modal title='New Project' visible={visible} onClose={handleClose} handlePopup={handlePopUp} history={history}></Modal>
                    {
                        popUpOpen && (<Popup className="popup_bottom" handlePopUp={handlePopUpClose}>
                            {
                                [...Array(5).keys()].map(i => {
                                    if (tab === i + 1) {
                                        return (
                                            <CardWithSteps num={i + 1} limit={4} key={i} handleMoveNext={handleMoveNext} handleMoveBack={handleMoveBack} handlePopUpClose={handlePopUpClose} />
                                        )
                                    }
                                    else {
                                        return null;
                                    }
                                }
                                )
                            }
                            <Tab handleChageTab={handleChageTab} tab={tab}>
                                <TabItem title="Overview">
                                    <OverView />
                                </TabItem>
                                <TabItem title="Transactions">
                                    <Transaction />
                                </TabItem>
                                <TabItem title="Time Activity">
                                    <TimeActivity />
                                </TabItem>
                                <TabItem title="Projects Reports">
                                    <ProjectsReports />
                                </TabItem>
                            </Tab>
                        </Popup>)
                    }
                </div>
            </Content>
        </Layout >
    )
}