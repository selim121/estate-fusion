import React from 'react';
import '../../../styles/Header.css';
import Button from '../../Shared/Button/Button';
import ButtonOutline from '../../Shared/Button/ButtonOutline';

const Header = () => {
    return (
        <div className="bg-[#E7F4EA]">
            <div className='max-w-screen-xl mx-auto'>
                <div className="header-bg bg-fixed">
                    <div className="h-screen text-center w-2/3 mx-auto pt-20">
                        <h1 className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#38a4da] text-transparent bg-clip-text">We are here to make a dream become reality</h1>
                        <p className="text-white my-4 w-2/3 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim dolores recusandae tenetur reiciendis aut esse quos excepturi laboriosam amet?</p>
                        <div className="flex flex-row gap-8 items-center justify-center">
                            <Button name={'Get Started'} />
                            <ButtonOutline name={'View Project'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;