import React from 'react';
import homeImg from '../../../assets/others/home-img.jpeg';

const HomeImage = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-[#E7F4EA]">
            <div className='relative w-2/3 mx-auto'>
                <img className='absolute z-1 -top-16 sm:-top-32 lg:-top-40 xl:-top-60' src={homeImg} alt="" />
            </div>
        </div>
    );
};

export default HomeImage;