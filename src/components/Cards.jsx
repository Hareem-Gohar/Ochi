const Cards = () => {
    return (
        <div className="w-full bg-zinc-900 flex items-center gap-5 px-20 pb-10">
            {/* First Card */}
            <div className="cardContainer h-[50vh] w-1/2">
                <div className="card relative rounded-xl w-full h-full bg-[#004d43]">
                    <div className="cardImage h-full flex justify-center items-center">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="ochi" />
                    </div>
                    <div className="cardButton uppercase absolute bottom-6 left-6 font-montreal">
                        <button
                            className="relative inline-flex items-center justify-center px-6 py-2 cursor-pointer font-montreal text-sm font-normal leading-none select-none rounded-full overflow-hidden border border-[#CDEA68] text-[#CDEA68] hover:text-zinc-900 transition-colors duration-100 ease-[cubic-bezier(.215,.61,.355,1)] group"
                        >
                            <span
                                className="absolute left-0 top-0 w-full h-full bg-[#CDEA68] rounded-full transform scale-y-0 origin-top transition-transform duration-100 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:scale-y-100 group-hover:origin-bottom"
                            ></span>
                            <span className="relative z-10">©2019–2022</span>
                        </button>


                    </div>
                </div>
            </div>

            {/* Second Card */}
            <div className="cardContainer flex gap-5 h-[50vh] w-1/2">
                <div className="card rounded-xl relative w-full h-full bg-[#192826]">
                    <div className="cardImagee h-full flex justify-center items-center">
                        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="clutch" />
                    </div>
                    <div className="cardButton uppercase absolute bottom-6 left-6 font-montreal">
                        <button
                            className="relative inline-flex items-center justify-center px-6 py-2 cursor-pointer font-montreal text-sm font-normal leading-none select-none rounded-full overflow-hidden border border-zinc-100 text-zinc-100 hover:text-zinc-900 transition-colors duration-200 ease-[cubic-bezier(.215,.61,.355,1)] group"
                        >
                            <span
                                className="absolute left-0 top-0 w-full h-full bg-zinc-100 rounded-full transform scale-y-0 origin-top transition-transform duration-100 ease-[cubic-bezier(.215,.61,.355,1)] group-hover:scale-y-100 group-hover:origin-bottom"
                            ></span>
                            <span className="relative z-10">©2019–2022</span>
                        </button>


                    </div>
                </div>
                <div className="card rounded-xl w-full h-full bg-[#192826]"></div>
            </div>
        </div>
    )
}

export default Cards