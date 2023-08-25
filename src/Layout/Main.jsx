import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Main = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <ScrollRestoration />
        </div>
    );
};

export default Main;