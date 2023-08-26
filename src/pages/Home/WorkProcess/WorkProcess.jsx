import React from 'react';
import workProcess from '../../../assets/others/work-process.jpeg';

const WorkProcess = () => {
    return (
        <div className='bg-[#144760]'>
            <div className="max-w-screen-xl mx-auto px-4 pt-16 md:px-0">
                <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
                    <div className="w-full h-full md:w-[500px]">
                        <img className='w-full h-full rounded-lg' src={workProcess} alt="" />
                    </div>
                    <div className="">
                        <h4 className="text-[#FFFFFF] text-4xl font-semibold tracking-wider">Our Work Process Make Your Dream True</h4>
                        <div className="bg-white sm:w-3/5 p-5 mt-5 rounded-lg">
                            <h4 className="text-2xl font-semibold tracking-widest mb-3">Design</h4>
                            <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="bg-white sm:w-3/5 p-5 mt-5 rounded-lg">
                            <h4 className="text-2xl font-semibold tracking-widest mb-3">Develop</h4>
                            <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="bg-white sm:w-3/5 p-5 mt-5 rounded-lg">
                            <h4 className="text-2xl font-semibold tracking-widest mb-3">Maintenance</h4>
                            <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;