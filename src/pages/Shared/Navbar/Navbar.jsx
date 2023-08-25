import React, { useEffect } from 'react';
import NavItems from './NavItems';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Navbar = () => {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            document.querySelector('nav').classList.add('bg-[#E7F4EA]', 'fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'fadeInUp');
            document.querySelector('nav').classList.remove('relative', 'z-40');
        } else {
            document.querySelector('nav').classList.add('bg-[#E7F4EA]', 'relative', 'z-40');
            document.querySelector('nav').classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'z-10', 'fadeInUp');
        }
    };

    return (
        <>
            <nav className='bg-[#E7F4EA] relative z-40 border-b-2 border-[#c3eecd]'>
                <div className="xl:mx-20 px-4">
                    <div className='flex flex-row py-2 items-center justify-between gap-3 md:gap-0'>
                        <Link to={'/'} ><h1 className='uppercase text-xl'>Estate Fusion</h1></Link>
                        <NavItems />
                        <Button name={'Contact Us'} />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;