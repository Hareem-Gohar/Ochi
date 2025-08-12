import React from 'react'

const Projects = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.3" className='w-full py-20 relative z-20 bg-zinc-900'>
            <div className=" w-full px-20 border-b border-zinc-600 pb-10">
                <h1 className='text-6xl font-montreal tracking-tight'>
                    Featured projects
                </h1>
            </div>
            <div className="w-full px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <div className="group card-container relative  rounded-xl w-1/2 h-[65vh]">
                        <div className="absolute text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-20 pointer-events-none">
                            <h2 className='uppercase text-8xl font-semibold whitespace-nowrap font-grotesk'>
                                {"Project 1".split("").map((item, index) => ( 
                                    <span>{item}</span>
                                ))}

                            </h2>
                        </div>
                        <div className="transition-transform group-hover:scale-95 duration-500 group-hover:duration-700 card w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="Project" className='group-hover:scale-110 duration-500 group-hover:duration-900 bg-cover' />

                        </div>
                    </div>
                    <div className="group card-container relative  rounded-xl w-1/2 h-[65vh]">
                        <div className="absolute text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-20 pointer-events-none">
                            <h2 className='uppercase text-8xl font-semibold whitespace-nowrap font-grotesk'>
                                {"Project 1".split("").map((item, index) => (
                                    <span>{item}</span>
                                ))}

                            </h2>
                        </div>
                        <div className="transition-transform group-hover:scale-95 duration-500 group-hover:duration-700 card w-full h-full rounded-xl overflow-hidden">
                            <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="Project" className='group-hover:scale-110 duration-500 group-hover:duration-900 bg-cover' />

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects