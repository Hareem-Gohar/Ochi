import React from 'react'
import { motion } from "framer-motion"
const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".058" 
            className='w-full pt-10 xl:pt-20 pb-6 rounded-tl-[30px] rounded-tr-[30px] bg-[#004D43]'>
            <div className=" text border-t border-b border-gray-500 flex  overflow-hidden whitespace-nowrap">
                <motion.h2 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[25vw] leading-none font-grotesk uppercase font-semibold xl:-mt-14 xl:-mb-5  pr-10'>We are Ochi </motion.h2>
                <motion.h2 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className='text-[25vw] leading-none font-grotesk uppercase font-semibold xl:-mt-14 xl:-mb-5 pr-10'>We are Ochi </motion.h2>
            </div>
        </div>
    )
}

export default Marquee