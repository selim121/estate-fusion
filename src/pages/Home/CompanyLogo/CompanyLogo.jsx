import React from 'react';
import logo1 from '../../../assets/company-logo/1.png';
import logo2 from '../../../assets/company-logo/2.png';
import logo3 from '../../../assets/company-logo/3.png';
import logo4 from '../../../assets/company-logo/4.png';
import logo5 from '../../../assets/company-logo/5.png';
import logo6 from '../../../assets/company-logo/6.png';

const CompanyLogo = () => {
    return (
        <div className="bg-[#E7F4EA]">
            <div className='max-w-screen-xl mx-auto px-4 md:px-0 pt-24 sm:pt-32 md:pt-44 lg:pt-64 xl:pt-60 pb-12'>
                <div className="flex flex-wrap gap-4 items-center justify-center lg:gap-20">
                    <div className="w-32 h-20">
                        <img className='w-full h-full' src={logo1} alt="" />
                    </div>
                    <div className="w-32 h-20">
                        <img className='w-full h-full' src={logo2} alt="" />
                    </div>
                    <div className="w-32 h-20">
                        <img className='w-full h-full' src={logo3} alt="" />
                    </div>
                    <div className="w-32 h-20">
                        <img className='w-full h-full' src={logo4} alt="" />
                    </div>
                    <div className="w-32 h-20">
                        <img className='w-full h-full' src={logo5} alt="" />
                    </div>
                    <div className="w-32 h-20">
                        <img className='w-full h-full' src={logo6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyLogo;