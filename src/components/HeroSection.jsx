import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion"
import eyeImg from "./../assets/eyes-img.png";
const HeroSection = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.8"  className="h-auto  bg-zinc-900 pt-1 pb-7">
            <div className="w-full mx-auto px-10 lg:px-16">
                <div className="textstructure font-grotesk mt-14 md:mt-32 2xl:mt-[10vw] text-gray-100">
                    <div className="masker">
                        <h2 className="textuppercase pt-[2vw] -mb-[1vw] uppercase leading-16  text-7xl md:text-9xl 2xl:text-[9vw]">
                            we create
                        </h2>
                    </div>
                    <div className="masker flex items-center w-fit overflow-hidden">
                        <motion.div initial={{width: 0}}
                        animate={{width: "12vw"}}
                        transition={{ease: [0.76, 0, 0.24, 1], duration: 1.2 }} className="w-[12vw] h-[9vw] sm:h-[6.2vw] md:w-[12vw] md:h-[8.5vw]  lg:w-[9vw] lg:h-[6.1vw] relative top-[2vw] mr-[1vw] rounded-lg bg-[#004D43]">
                            <img src={eyeImg} alt="eye" className="flex justify-center w-full h-full object-contain align-middle" />
                        </motion.div>
                        <h2 className="textuppercase pt-[2vw] -mb-[1vw] uppercase leading-none text-7xl md:text-9xl 2xl:text-[9vw]">
                            eye-opening
                        </h2>
                    </div>
                    <div className="masker">
                        <h2 className="textuppercase  pt-[2vw] -mb-[1vw] uppercase leading-16 text-7xl md:text-9xl 2xl:text-[9vw]">
                            Presentations
                        </h2>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-zinc-800 mt-14 md:mt-32 ">
                <div className="w-full flex justify-between flex-wrap  items-center mx-auto px-10 lg:px-16">
                    {[
                        "For public and private companies",
                        "From the first pitch to IPO",
                    ].map((item, index) => (
                        <p className="font-montreal text-md 2xl:text-[1vw] py-4 text-gray-100">
                            {item}
                        </p>
                    ))}
                    <div className="w-full md:w-auto flex justify-center items-center">
                        <a href="#" className="group  relative inline-flex justify-center items-center gap-2 p-2 rounded-full cursor-pointer select-none text-sm uppercase overflow-visible font-montreal">
                            <span className="relative z-10 px-5 py-1.5 border border-zinc-500 rounded-full transition-all duration-500 text-gray-100 group-hover:text-zinc-800 group-hover:bg-gray-100">
                                Start the project

                            </span>
                            <span className="relative w-8 h-8 flex items-center justify-center rounded-full border border-zinc-500 ">
                                <span className="rotate-45 text-gray-100 group-hover:text-gray-800 z-10 font-normal group-hover:text-lg">
                                    <FaArrowUpLong />
                                </span>
                                <span className="absolute inset-0 bg-gray-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-400 origin-center "></span>
                            </span>
                        </a>
                    </div>

                </div>
            </div>
            <div className="overflow-hidden mt-4">
                <div className="scroll-down-indicator flex  justify-center opacity-45 capitalize">
                    <span className="indicator-text flex justify-center items-center">
                        <span className="font-montreal text-lg mr-3">
                            Scroll down
                        </span>
                        <span className="rotate-[180deg] p-1 text-sm border rounded-md">
                            <FaArrowUpLong />
                        </span>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;
