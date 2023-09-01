import React from 'react';
import img from '../../assets/others/home-img.jpeg';
import slide1 from '../../assets/projects/architecture.jpeg';
import slide2 from '../../assets/projects/decoration.jpeg';
import slide3 from '../../assets/projects/furniture.jpeg';
import slide4 from '../../assets/projects/interior.jpeg';
import slide5 from '../../assets/projects/renovation.jpeg';
import slide6 from '../../assets/projects/visualization.jpeg';
import { GiPolarStar } from 'react-icons/gi';
import '../../styles/About.css';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button/Button';
import Partner from '../Shared/Partner/Partner';

const AboutUs = () => {

    const images = [slide1, slide2, slide3, slide4, slide5, slide6];

    return (
        <div className='bg-[#E7F4EA]'>
            <div className="max-w-screen-xl mx-auto py-20">
                <h1 className="text-[#144760] text-2xl md:text-5xl text-center">About US</h1>
                <img className='mt-12' src={img} alt="" />
                <div className="text-[#144760] my-8 space-y-1">
                    <h2 className="text-4xl tracking-wider">Our Firm Story</h2>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id facilis repudiandae quis. Saepe quibusdam consequuntur at, dolores aperiam nam animi ut eveniet est deleniti magni maxime tempora odit numquam eos repellat illum. Corporis, cupiditate! Dicta corrupti in quaerat incidunt expedita, adipisci, error voluptatibus ipsam sequi eveniet facilis nesciunt nihil sint atque esse praesentium eligendi quis numquam ea deserunt. Incidunt voluptate, harum, molestias a earum vel, nam accusamus tenetur minus officia neque maxime aut? Blanditiis illo, eveniet asperiores aperiam libero omnis.</p>
                </div>
                <div className="text-[#144760] my-8 space-y-3">
                    <h2 className="text-4xl tracking-wider">How We Started</h2>
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, nesciunt. Quam porro corporis ipsum obcaecati quo unde iusto dignissimos repudiandae. Modi quibusdam iste fugit maiores repellendus quasi inventore ex doloremque! Autem illo fuga veniam itaque cupiditate sapiente nihil adipisci beatae?</p>
                    <p className="flex flex-row items-center gap-2"><GiPolarStar /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero corrupti provident blanditiis.</p>
                    <p className="flex flex-row items-center gap-2"><GiPolarStar /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero corrupti provident blanditiis.</p>
                    <p className="flex flex-row items-center gap-2"><GiPolarStar /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vero corrupti provident blanditiis.</p>
                </div>
                <div className="text-[#144760] grid grid-cols-2 md:grid-cols-4 items-center gap-8 mb-5 bg-[#d5e4d8]">
                    <p className="text-2xl border-r border-[#144760] p-6 text-center">What We Have Done</p>
                    <p className="font-light md:border-r border-[#144760] p-6 text-center"><span className="text-3xl font-bold">13+</span><br />Years of experience</p>
                    <p className="font-light border-r border-[#144760] p-6 text-center"><span className="text-3xl font-bold">500+</span><br />Successful Projects</p>
                    <p className="font-light p-6 text-center"><span className="text-3xl font-bold">130+</span><br />Team Members</p>
                </div>

                <h1 className="text-[#144760] text-2xl md:text-5xl text-center mt-28 mb-12">Our Recent Projects</h1>
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {
                        images?.map((image, index) => <div key={index} className="project relative">
                            <div className="content-overlay"></div>
                            <div className="h-[300px] w-[400px] z-10">
                                <img className='h-full w-full' src={image} alt="" />
                            </div>
                            <div className="content-details fadeIn-bottom">
                                <h3 className="text-[#144760] text-2xl font-semibold mb-4">Project title</h3>
                                <Link><Button name={'Read more'} /></Link>
                            </div>
                        </div>)
                    }
                </div>
                <Partner />
            </div>
        </div>
    );
};

export default AboutUs;
