import arrow from "../assets/img/righttop.png"
import circleSpace from "../assets/img/decors/circle-space.png"
import circle from "../assets/img/decors/circle.png"
import tringle from "../assets/img/decors/tringle.png"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)




const toLearn = [
    {
        id: 1,
        head: "Python - შესავალი"
    },
    {
        id: 2,
        head: "HTML-ის სტრუქტურა და ელემენტები"
    },
    {
        id: 3,
        head: "CSS-ის სტილები დიზაინი და რესპონსივი"
    },
    {
        id: 4,
        head: "JavaScript და ლოგიკა "
    }
]

function Learn() {
    useEffect(() =>{
        gsap.fromTo(".head", 
            {
                y: "70px",
                opacity: 0,
            }, 
            {
                y: 0, 
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: ".head",
                    start: "top 80%",

                },
            
            }
        )
        gsap.fromTo(".fade_in", 
            {
                x: "400px",
                opacity: 0,
            }, 
            {
                x: 0, 
                opacity: 1,
                duration: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: ".fade_in",
                    start: "top 80%",
                },
            
            }
        )
        gsap.fromTo(".fade_in-2", 
            {
                opacity: 0,
            }, 
            {
                opacity: 1,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".fade_in-2",
                    start: "top 80%",

                },
            }
        )
    },[])



    return (
        <div className="bg-[#2B384C] mt-[-3.5rem] pt-20 pb-[8rem] relative z-0">

            <div className="hidden xl:block pt-10 absolute right-[-150px] fade_in">
                <img src={circleSpace} className="circleSpace w-[300px]" alt="circleSpace" />
                <img src={tringle} className="tringle absolute w-[170px] top-[90px] right-[220px]" alt="tringle" />
            </div>

            <div className="relative max-w-[90%] xl:max-w-[1000px] mx-auto pt-14">
                <div>
                    <div>
                        <div className=" overflow-hidden">
                            <h2 className="head text-5xl font-pantonmtav3 text-[#F3ECE2]">რას ისწავლი ამ კურსზე</h2>   
                        </div>
                        <p className="mt-6 font-georgian text-white">კურსის განმავლობაში შენ შეისწავლი ვებ-საიტების შექმნის სრულ პროცესს ნულიდან</p>
                    </div>
                    {/* <button className="mt-4 underline py-2 px-8 bg-[#F3ECE2] text-[#2B384C] font-pantonmtav3 hover:opacity-80">სილაბუსი</button> */}
                </div>
                <div className="mt-10 ">
                    {
                        toLearn.map(item => (
                            <div className="pt-6 border-b border-white" key={item.id}>
                                <div className="w-10 text-center border border-white rounded-full text-white"> 0{item.id} </div>
                                <div className="flex justify-between items-center pt-6 pb-3 xl:pt-10 xl:pb-5 cursor-pointer">
                                    <h3  className="text-white text-2xl xl:text-4xl font-alk font-[400]">{item.head}</h3>
                                    <img className="arrow w-6 h-6 xl:w-8 xl:h-8 rotate-[-45deg]" src={arrow} alt="arrow" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="hidden xl:block fade_in-2">
                <img src={circle} className="cicrcle absolute bottom-[-150px] left-[-150px] w-[400px]" alt="circle" />
            </div>
        </div>
    )
}

export default Learn
