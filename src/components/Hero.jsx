// import website from "../assets/img/website1.jpeg"

function Hero() {

    return (
        <div className="relative pt-[6rem] max-w-full border-red-100 overflow-hidden"> 
            <div className="relative max-w-[90%] mx-auto mt-10 z-20">
                <div className=" ">
                    {/* <div className="text-[#643434] font-pantonmtav3">კურსი: </div> */}
                    <h1 className="text-4xl text-[#2B384C] font-bold font-Hubot uppercase overflow-hidden">
                        <div className="flex items-center overflow-hidden">
                             <div /* ref={box}  */
                                className="
                                    w-[40px] h-[35px] 
                                    sm:w-[50px] sm:h-[50px] 
                                    lg:w-[70px] lg:h-[70px] 
                                    xl:w-[100px] xl:h-[102px] 
                                    2xl:w-[120px] 2xl:h-[125px] 
                                    xl:mt-[5px] bg-[#2B384C]
                                    box
                                "></div>
                            <div /*ref={headOne} */
                                className="text-[40px] sm:text-7xl lg:text-8xl xl:text-[140px] 2xl:text-[170px] overflo-hidden pl-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2B384C] to-[#643434]  front__end">front-end</div>
                        </div>
                        <div /* ref={headTwo} */  className="text-[40px] sm:text-7xl lg:text-8xl xl:text-[140px] 2xl:text-[170px]  overflo-hidden pt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2B384C] to-[#643434] development">development</div>
                    </h1>
                    <div /* ref={desc}*/ className="xl:mt-10 xl:flex xl:justify-end xl:flex-col xl:items-end desc">
                        <p className="xl:text-right mt-4 font-georgian lg:w-[600px]">კურსი მიზნად ისახავს მოსწავლისთვის ვებ-ტექნოლოგიების გაცნობასა და ვებ-საიტების შექმნის პრაქტიკული უნარების ჩამოყალიბებას.</p>
                        <button class="mt-6 text-white px-16 py-3 rounded-[22px] bg-gradient-to-r from-[#643434] to-[#2B384C] hover:opacity-90 transition-all duration-300 font-pantonmtav3">
                            ვრცლად
                        </button>
                    </div>
                </div>
                {/* <img src={website} alt="website img" className="mt-8 w-full rounded-xl" /> */}
            </div>
        </div>
    )
}

export default Hero
