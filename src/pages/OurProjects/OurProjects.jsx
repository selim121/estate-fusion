import React, { useEffect, useState } from 'react';
import architecture from '../../assets/projects/architecture.jpeg';
import interior from '../../assets/projects/interior.jpeg';
import decoration from '../../assets/projects/decoration.jpeg';
import renovation from '../../assets/projects/renovation.jpeg';
import furniture from '../../assets/projects/furniture.jpeg';
import visualization from '../../assets/projects/visualization.jpeg';

const OurProjects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const img = [architecture, interior, decoration, renovation, furniture, visualization];

    return (
        <div className='bg-[#E7F4EA]'>
            <div className="max-w-screen-xl mx-auto py-20">
                <div className="text-center w-full md:w-1/2 md:mx-auto space-y-3">
                    <h1 className="text-[#144760] text-2xl md:text-5xl">Projects All Over The World</h1>
                    <p className="text-[#144760] opacity-70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias corporis asperiores placeat, veniam vero, nam similique delectus deserunt eveniet accusantium enim fugit dignissimos officiis?</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-12">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        {
                            projects?.slice(0, 3).map((project, index) => <div key={index} className='w-full h-full lg:w-[500px] lg:h-[650px] mb-12'>
                                <img className='w-full h-full' src={img[index++]} alt="" />
                                <div className="p-4 flex flex-row items-center justify-between text-[#E7F4EA] bg-[#144760]">
                                    <h3 className="font-bold">{project.title}</h3>
                                    <p className="font-light">{project.quantity}+ projects</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-center mt-20">
                        {
                            projects?.slice(3, 6).map((project, index) => <div key={index} className='w-full h-full lg:w-[500px] lg:h-[650px] mb-12'>
                                <img className='w-full h-full' src={img[index + 2]} alt="" />
                                <div className="p-4 flex flex-row items-center justify-between text-[#E7F4EA] bg-[#144760]">
                                    <h3 className="font-bold">{project.title}</h3>
                                    <p className="font-light">{project.quantity}+ projects</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProjects;