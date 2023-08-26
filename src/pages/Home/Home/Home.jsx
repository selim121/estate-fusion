import React from 'react';
import Header from '../Header/Header';
import HomeImage from '../HomeImage/HomeImage';
import Reputation from '../Reputation/Reputation';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

const Home = () => {
    return (
        <div>
            <Header />
            <HomeImage />
            <CompanyLogo />
            <Reputation />
        </div>
    );
};

export default Home;