import React from 'react';
import '../../../styles/WorkSchedule.css';
import call from '../../../assets/work-space/call.jpeg';
import proposal from '../../../assets/work-space/proposal.jpeg';
import space from '../../../assets/work-space/space.jpeg';

const WorkSchedule = () => {
    return (
        <div className='bg-[#144760]'>
            <div className="max-w-screen-xl mx-auto py-20">
                <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#E7F4EA] text-2xl md:text-5xl py-12">How To Work With Us!</h1>
                    <ul>
                        <li className="relative w-[300px] md:w-[450px] bg-[#E7F4EA] my-8 p-4 rounded-md tracking-wider">
                            <span className='row-line'></span>
                            <img src={call} alt="" />
                            <h3 className="text-2xl text-[#144760] font-semibold my-3">Schedule Your Discovery Call</h3>
                            <p className="text-[#144760] font-light text-justify">Lorem ipsum consectetur adipisicing elit. Fugit optio laboriosam, similique cupiditate quasi.</p>
                            <div className="time">
                                <span>9:00 AM</span>
                                <span>6:00 PM</span>
                            </div>
                        </li>
                        <li className="relative w-[300px] md:w-[450px] bg-[#E7F4EA] my-8 p-4 rounded-md tracking-wider">
                            <span className='row-line'></span>
                            <img src={proposal} alt="" />
                            <h3 className="text-2xl text-[#144760] font-semibold my-3">Receive Any Custom Proposal</h3>
                            <p className="text-[#144760] font-light text-justify">Lorem ipsum consectetur adipisicing elit. Fugit optio laboriosam, similique cupiditate quasi.</p>
                            <div className="time">
                                <span>9:00 AM</span>
                                <span>6:00 PM</span>
                            </div>
                        </li>
                        <li className="relative w-[300px] md:w-[450px] bg-[#E7F4EA] my-8 p-4 rounded-md tracking-wider">
                            <span className='row-line'></span>
                            <img src={space} alt="" />
                            <h3 className="text-2xl text-[#144760] font-semibold my-3">Create Your Perfect Work Space</h3>
                            <p className="text-[#144760] font-light text-justify">Lorem ipsum consectetur adipisicing elit. Fugit optio laboriosam, similique cupiditate quasi.</p>
                            <div className="time">
                                <span>9:00 AM</span>
                                <span>6:00 PM</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkSchedule;