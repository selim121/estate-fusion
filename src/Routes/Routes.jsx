import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../pages/Home/Home/Home';
import Services from '../pages/Services/Services';
import OurProjects from '../pages/OurProjects/OurProjects';
import AboutUs from '../pages/AboutUs/AboutUs';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/our-projects',
                element: <OurProjects />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            }
        ]
    },
]);

export default router;