import React from 'react'

const Projects = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full py-20 relative z-20 bg-zinc-900'>
            <div className=" w-full px-20 pb-10">
                <h1 className='text-6xl font-montreal tracking-tight'>
                    Featured projects
                </h1>
            </div>
            <div className="w-full px-20">
                <div className="cards w-full flex flex-wrap justify-center gap-10 mt-10">
                    <div className="card-container relative  rounded-xl w-[calc(50%_-_20px)] ">
                        <div className="car-project-title">
                            <h4 className=' relative mb-3 font-montreal font-light uppercase text-[15px] text-zinc-100 before:absolute before:content-[""] before:w-2.5 before:h-2.5 before:bg-zinc-100 before:rounded-full before:left-0 before:top-[7px] ps-5'>
                                XYZ
                            </h4>
                        </div>
                        <div className="group relative">
                            <div className="absolute text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-20 pointer-events-none">
                                <h2 className='uppercase text-8xl font-semibold whitespace-nowrap font-grotesk'>
                                    {"Project 1".split("").map((item, index) => (
                                        <span key={index}>{item}</span>
                                    ))}

                                </h2>
                            </div>
                            <div className="transition-transform group-hover:scale-95 duration-500 group-hover:duration-700 card w-full h-full rounded-xl overflow-hidden">
                                <img src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="Project" className='group-hover:scale-110 duration-500 group-hover:duration-900 bg-cover w-full' />

                            </div>
                        </div>
                        <div className="project-keywords my-3 flex gap-5 items-center">
                            <div className="cardButton uppercase font-montreal">
                                <button
                                    className="relative inline-flex items-center justify-center px-6 py-2 cursor-pointer font-montreal text-sm font-normal leading-none select-none rounded-full overflow-hidden border border-zinc-100 text-zinc-100 hover:text-zinc-900 transition-colors duration-100 ease-[cubic-bezier(.215,.61,.355,1)] group"
                                >
                                    <span
                                        className="absolute left-0 top-0 w-full h-full bg-zinc-100 rounded-full transform scale-y-0 origin-top transition-transform duration-100 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:scale-y-100 group-hover:origin-bottom"
                                    ></span>
                                    <span className="relative z-10">©2019–2022</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-container relative  rounded-xl w-[calc(50%_-_20px)] ">
                        <div className="car-project-title w-full">
                            <h4 className=' relative mb-3 font-montreal font-light uppercase text-[15px] text-zinc-100 before:absolute before:content-[""] before:w-2.5 before:h-2.5 before:bg-zinc-100 before:rounded-full before:left-0 before:top-[7px] ps-5'>
                                XYZ
                            </h4>
                        </div>
                        <div className="group relative">
                            <div className="absolute text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-20 pointer-events-none">
                                <h2 className='uppercase text-8xl font-semibold whitespace-nowrap font-grotesk'>
                                    {"Project 1".split("").map((item, index) => (
                                        <span key={index}>{item}</span>
                                    ))}

                                </h2>
                            </div>
                            <div className="transition-transform group-hover:scale-95 duration-500 group-hover:duration-700 card w-full h-full rounded-xl overflow-hidden">
                                <img src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="Project" className='group-hover:scale-110 duration-500 group-hover:duration-900 bg-cover w-full' />

                            </div>
                        </div>
                        <div className="project-keywords my-3 flex gap-5 items-center">
                            <div className="cardButton uppercase font-montreal">
                                <button
                                    className="relative inline-flex items-center justify-center px-6 py-2 cursor-pointer font-montreal text-sm font-normal leading-none select-none rounded-full overflow-hidden border border-zinc-100 text-zinc-100 hover:text-zinc-900 transition-colors duration-100 ease-[cubic-bezier(.215,.61,.355,1)] group"
                                >
                                    <span
                                        className="absolute left-0 top-0 w-full h-full bg-zinc-100 rounded-full transform scale-y-0 origin-top transition-transform duration-100 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:scale-y-100 group-hover:origin-bottom"
                                    ></span>
                                    <span className="relative z-10">©2019–2022</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects