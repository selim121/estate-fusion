import React from 'react';
import reputation from '../../../assets/others/reputation.jpeg';
import {ImQuotesLeft} from 'react-icons/im';
import ButtonOutline from '../../Shared/Button/ButtonOutline';

const Reputation = () => {
    return (
        <div className='bg-[#144760]'>
            <div className="max-w-screen-xl mx-auto px-4 pt-16 md:px-0">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="w-full md:w-2/5 h-96 relative">
                        <img className='w-full h-full' src={reputation} alt="" />
                        <div className="absolute top-10 right-5 bg-white w-48 px-3 pb-3 pt-8">
                            <p className="text-sm">&quot;FIABCI World Prixd Excellent Awards 2022&quot;</p>
                            <ImQuotesLeft className='absolute -top-3 right-1/2 z-1 bg-white p-1 rounded-full' size={'25px'} />
                        </div>
                    </div>
                    <div className="w-full md:w-3/5">
                        <h4 className="text-[#FFFFFF] text-4xl font-semibold">Our Reputation is an solid as concrete</h4>
                        <p className="text-[#FFFFFF] font-light text-justify mt-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ducimus amet! Ut accusamus facilis itaque. Molestiae dicta quae voluptas magnam. Suscipit voluptatem nobis unde libero.</p>
                        <div className="text-[#FFFFFF] flex flex-wrap items-center gap-8 mb-5">
                            <p className="font-light"><span className="text-3xl font-bold">13+</span><br />Years of experience</p>
                            <p className="font-light"><span className="text-3xl font-bold">60+</span><br />Properties build</p>
                            <p className="font-light"><span className="text-3xl font-bold">30+</span><br />Awards gained</p>
                        </div>
                        <ButtonOutline name={'Learn More'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reputation;