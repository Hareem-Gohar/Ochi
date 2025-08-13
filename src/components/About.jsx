import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const About = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.12" className='w-full pt-20 bg-[rgb(205,234,104)] rounded-tl-[30px] rounded-tr-[30px] text-zinc-800 relative z-20'>
            <div className="border-b border-b-gray-400">
                <div className="text-[3.5vw] leading-13 font-normal font-montreal w-full max-w-[1080px] mb-10 px-16">
                    <p>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>, <u>ex­plain com</u>­p<u>lex ideas</u>, and <u>hire </u>g<u>reat </u>p<u>eo</u>­p<u>le.</u></p>
                </div>
            </div>

            <div className="flex justify-between items-baseline gap-10 md:gap-0  flex-wrap px-16 pt-6 pb-10 md:pb-20 border-b border-b-gray-400 font-montreal">
                <div className="w-2/5">
                    <span className='text-md'>What you can expect:</span>
                </div>
                <div className="flex justify-start md:justify-evenly flex-wrap items-end gap-30 w-full md:w-3/5">
                    <div className="max-w-[270px] w-full">                                                                                                                             
                        <p className='text-md mb-8'>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants.</p>
                        <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                    <div className="w-auto text-md">
                        <p className='mb-2'>S:</p>
                        <ul>
                            {["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (
                                <li>
                                    <a key={index} href="#" className='inline-block text-md mb-0.5 relative transition-transform origin-[0_0] after:content-[""] after:absolute after:-bottom-0.5 after:w-full after:h-[1px] after:bg-gray-900 after:left-0 after:origin-[100%_100%] scale-x-100 after:scale-x-0 after:pointer-events-none after:transition-transform hover:after:ease-[cubic-bezier(.215,.61,.355,1)] hover:after:duration-[.5s] hover:after:origin-[0_0] hover:after:scale-x-100'>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
            <div className="btn-group flex justify-center xl:justify-between flex-wrap gap-10 py-10 px-16">
                <div className="text-center xl:text-start">
                    <h3 className='text-5xl capitalize mb-10'>Our approach:</h3>
                    <a
                        href="http://"
                        className="btn-group-hover bg-zinc-800 text-white shadow-[inset_0_0_0_1px_#212121] inline-flex justify-between items-center gap-2 relative px-8 py-4 cursor-pointer font-montreal text-sm font-normal transition-all ease-[cubic-bezier(.215,.61,.355,1)] duration-300 uppercase rounded-full overflow-hidden group hover:shadow-[inset_0_0_0_1px_#000] w-48" onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span
                            className="absolute left-[-3rem] right-[-3rem] top-[-100%] bottom-[-100%] rounded-full bg-black scale-y-0 origin-bottom transition-transform duration-[.9s] ease-[cubic-bezier(.215,.61,.355,1)] will-change-transform group-hover:scale-y-100"
                            aria-hidden="true"
                        ></span>

                        <span className="relative z-10">Read More</span>

                        <span className="relative flex-shrink-0 w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center -mt-[1.4rem] -mb-[1.4rem] -mr-[1.3rem] text-[1rem] overflow-hidden">
                            <span className="absolute inset-0 bg-white rounded-full transform scale-[0.4] origin-center transition-transform duration-400 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:scale-100 z-0"></span>

                            <span className="absolute inset-0 text-black opacity-0 z-10 flex items-center justify-center transition-opacity duration-400 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:opacity-100">
                                <FaArrowUpLong className="rotate-[40deg]" />
                            </span>
                        </span>
                    </a>
                </div>

                <div className={`zoom-hover overflow-hidden relative rounded-lg w-full xl:w-[600px] transition-transform ease-[cubic-bezier(.215,.61,.355,1)] duration-[2s]   ${isHovered ? 'scale-90 ' : 'scale-100'} `}>
                    <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className={`
                    transition-all  w-full h-full object-cover  duration-1000 ease-[cubic-bezier(0.33,1,0.68,1)]
                    ${isHovered ? 'scale-110' : 'scale-100'}
                `}
                        style={{ transitionDelay: isHovered ? '50ms' : '0ms' }}
                        alt="" />
                </div>
            </div>
        </div>
    )
}

export default About