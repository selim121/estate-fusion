import React from 'react';
import Header from '../Header/Header';
import HomeImage from '../HomeImage/HomeImage';
import Reputation from '../Reputation/Reputation';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import TopServices from '../TopServices/TopServices';
import WorkProcess from '../WorkProcess/WorkProcess';
import WorkSchedule from '../WorkSchedule/WorkSchedule';
import TopProjects from '../TopProjects/TopProjects';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeImage />
            <CompanyLogo />
            <Reputation />
            <TopServices />
            <WorkProcess />
            <TopProjects />
            <WorkSchedule />
        </div>
    );
};

export default Home;