import React from 'react';
import p1 from '../../../assets/profile-image/p1.png';
import p2 from '../../../assets/profile-image/p2.png';
import p3 from '../../../assets/profile-image/p3.png';
import p4 from '../../../assets/profile-image/p4.png';
import p5 from '../../../assets/profile-image/p5.png';
import p6 from '../../../assets/profile-image/p6.png';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const Testimonial = () => {

    const testimonials = [
        {
            name: "Brunt Andor",
            designation: "Video Editor",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque debitis. Atque veniam earum error!",
            image: p1
        },
        {
            name: "Mia Alyssa",
            designation: "Graphics Designer",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque debitis. Atque veniam earum error!",
            image: p2
        },
        {
            name: "Emma Lorts",
            designation: "Marketing Coordinator",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque debitis. Atque veniam earum error!",
            image: p3
        },
        {
            name: "Williamson Arlena",
            designation: "Medical Asistant",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque debitis. Atque veniam earum error!",
            image: p4
        },
        {
            name: "Jannatul Ferdaous",
            designation: "Assistant Lawyer",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque debitis. Atque veniam earum error!",
            image: p5
        },
        {
            name: "Lusy Shizhi",
            designation: "Web Designer",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, itaque debitis. Atque veniam earum error!",
            image: p6
        },
    ]

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            mode: "free",
            slides: {
                perView: 3,
                spacing: 15,
            },
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className='bg-[#E7F4EA]'>
            <div className="max-w-screen-xl mx-auto py-20">
                <div className="text-center w-full md:w-1/2 md:mx-auto space-y-3 mb-6">
                    <h1 className="text-[#144760] text-2xl md:text-5xl">What Service We Offer!</h1>
                    <p className="text-[#144760] opacity-70 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias corporis asperiores placeat, veniam vero, nam similique delectus deserunt eveniet accusantium enim fugit dignissimos officiis?</p>
                </div>
                <div ref={sliderRef} className="keen-slider">
                    {
                        testimonials.map((testimonial, index) => <div key={index} className='keen-slider__slide number-slide1 bg-[#144760] text-[#FFFFFF] text-center p-4 rounded-md'>
                            <div className="flex items-center justify-center">
                                <img className='w-14 h-14' src={testimonial.image} alt="" />
                            </div>
                            <h5 className="text-xl font-semibold">{testimonial.name}</h5>
                            <p className="text-xs font-light">{testimonial.designation}</p>
                            <p className="text-sm font-light mt-3">&quot;{testimonial.review}&quot;</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;