import React, { useEffect, useState } from 'react';
import '../../../styles/TopServices.css';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button/Button';

const TopServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='bg-[#E7F4EA]'>
            <div className="max-w-screen-xl mx-auto py-20">
                <div className="text-center w-full md:w-1/2 md:mx-auto space-y-3">
                    <h1 className="text-[#144760] text-2xl md:text-5xl">What Service We Offer!</h1>
                    <p className="text-[#144760] opacity-70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias corporis asperiores placeat, veniam vero, nam similique delectus deserunt eveniet accusantium enim fugit dignissimos officiis?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        services?.slice(0,2).map((service, index) => <div key={index} className="service-card">
                            <div className="content-overlay"></div>
                            <div className={service.image} />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="text-[#144760] text-2xl font-semibold">{service.title}</h3>
                                <p className="text-[#144760] text-sm my-4">{service.details}</p>
                                <Link><Button name={'Read more'} /></Link>
                            </div>
                        </div>)
                    }
                </div>
                <div className="text-center mt-6">
                    <Button name={'See more'} />
                </div>
            </div>
        </div>
    );
};

export default TopServices;