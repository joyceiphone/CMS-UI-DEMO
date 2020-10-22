import React from 'react';
import Menu from '../Menu';
import MenuItem from '../Menu/MenuItem';
import Button from '../Button';
import { Link } from 'react-router-dom';


import './index.scss';

export default function SideBar(props) {
    const { collapse } = props;

    if (collapse) {
        return ((
            (<div className='sidebar'>
                <div className="logo-container" style={{ marginBottom: '20px' }}>Intuit Logo</div>
                <div style={{ marginBottom: '20px' }}>
                    <Button>+ New</Button>
                </div>
                <Menu open={true}>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/'>Dashboard</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/banking'>Banking</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/expenses'>Expenses</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/sales'>Sales</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/projects'>Projects</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/payroll'>Payroll</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/reports'>Reports</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/taxes'>Texas</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/mileage'>Mileage</Link>
                    </MenuItem>
                    <MenuItem className="menu-item_sidebar">
                        <Link to='/my-accountant'>My Accountant</Link>
                    </MenuItem>
                </Menu>
            </div>
            )
        ))
    }
    else {
        return null;
    }

}