import React from 'react';
import logo1 from '../../../assets/company-logo/1.png';
import logo2 from '../../../assets/company-logo/2.png';
import logo3 from '../../../assets/company-logo/3.png';
import logo4 from '../../../assets/company-logo/4.png';
import logo5 from '../../../assets/company-logo/5.png';
import logo6 from '../../../assets/company-logo/6.png';

const Partner = () => {

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

    return (
        <div className="mt-20 pb-10 bg-[#144760]">
            <div className="text-center w-full md:w-1/2 md:mx-auto space-y-3 pt-16 pb-10">
                <h1 className="text-[#E7F4EA] text-2xl md:text-5xl">Our Business Partner</h1>
                <p className="text-[#E7F4EA] opacity-70 text-sm uppercase tracking-widest">100+ Happy Clients Worlwide</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8">
                {
                    logos?.map((logo, index) => <div key={index} className="h-20 w-48 bg-[#E7F4EA] px-8">
                        <img className='h-full w-full' src={logo} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Partner;