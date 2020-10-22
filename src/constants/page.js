import React from 'react';

//import pages
import Accounting from '../pages/Accounting';
import Banking from '../pages/Banking';
import Dashboard from '../pages/Dashboard';
import Expenses from '../pages/Expenses';
import Mileage from '../pages/Mileage';
import MyAccountant from '../pages/MyAccountant';
import Payroll from '../pages/Payroll';
import Sales from '../pages/Sales';
import Reports from '../pages/Reports';
import Taxes from '../pages/Taxes';


const Pages = [
    {
        path: '/',
        component: <Dashboard />,
        isExact: true,
    },
    {
        path: '/accounting',
        component: <Accounting />,
        isExact: true
    },
    {
        path: '/banking',
        component: <Banking />,
        isExact: true
    },
    {
        path: '/expenses',
        component: <Expenses />,
        isExact: true
    },
    {
        path: '/mileage',
        component: <Mileage />,
        isExact: true
    },
    {
        path: '/my-accountant',
        component: <MyAccountant />,
        isExact: true
    },
    {
        path: '/payroll',
        component: <Payroll />,
        isExact: true
    },
    {
        path: '/reports',
        component: <Reports />,
        isExact: true
    },
    {
        path: '/sales',
        component: <Sales />,
        isExact: true
    },
    {
        path: '/taxes',
        component: <Taxes />,
        isExact: true
    }
]

export default Pages;