import React, { useEffect, useState } from 'react'

const EyeSection = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(
        () => {
            window.addEventListener("mousemove", (e) => {
                let mouseY = e.clientY;
                let mouseX = e.clientX;

                let deltaX = mouseX - window.innerWidth / 2;
                let deltaY = mouseY - window.innerHeight / 2;

                const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

                setRotate(angle-180)
            })
        }
    ,[])
    return (
        <div data-scroll data-scroll-section data-scroll-sticky data-scroll-speed="-0.3" className="eyes w-full h-screen overflow-hidden relative z-0 pt-16">
            <div className=" relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="bg-black relative w-2/3 h-2/3 rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2  w-full h-10">
                                <div className="bg-zinc-100 w-10 h-10 rounded-full">

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className=" flex justify-center items-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="bg-black relative w-2/3 h-2/3 rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2  w-full h-10">
                                <div className="bg-zinc-100 w-10 h-10 rounded-full">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default EyeSection