import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    const currentYear = getCurrentYear();

    return (
        <div className='bg-[#144760] pt-12'>
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col sm:flex-row md:items-center md:justify-between gap-4 border-b border-[#E7F4EA] md:space-x-9 space-y-6 pb-6 px-4  text-[#E7F4EA]">
                    <div className="space-y-2 text-[#E7F4EA]">
                        <Link to={'/'} ><h1 className='uppercase text-xl'>Estate Fusion</h1></Link>
                        <p>10/7, Shekhertek, Adabor, Dhaka - 1207</p>
                        <p>+880 1799 468199</p>
                        <p>contact@risgensolution.com</p>
                    </div>
                    <div className="flex flex-col border-l border-[#E7F4EA] ps-4 space-y-2 uppercase text-[#E7F4EA]">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/services'}>Services</Link>
                        {/* <Link to={'#pricing'}>Pricing</Link> */}
                        <Link to={'/our-projects'}>Our Projects</Link>
                        <Link to={'/about-us'}>About Us</Link>
                    </div>
                    <div className="flex flex-col border-l border-[#E7F4EA] ps-4 space-y-2 uppercase text-[#E7F4EA]">
                        <Link to={'#reputation'}>Reputation</Link>
                        <Link to={'#top-service'}>Top Service</Link>
                        <Link to={'#work-process'}>Work Process</Link>
                        <Link to={'#top-project'}>Top Project</Link>
                    </div>
                </div>
                <div className="text-center">
                    <p className="font-light text-[#E7F4EA] text-sm py-6">Copyright <span>&copy; {currentYear} risGen Solution Ltd.</span></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;