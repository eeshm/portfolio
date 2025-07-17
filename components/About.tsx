import { px } from "motion"
import Image from "next/image"
export default function About(){
    return(
        <section>
            <div className="flex justify-between  items-start mb-8 pt-10 md:pt-20">
                <div className="flex flex-col  gap-4 items-start">
                    <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                        Hi, I'm Eesh
                    </span>
                    <span className="inline-block  text-lg max-w-[600px] text-black dark:text-white">
                        21 | Full stack developer
                    </span>
                    <div className="inline-block max-w-screen text-base space-y-4  text-[#6c6c6c] pt-20">
                        <h1 className="dark:text-white text-black text-2xl tracking-tight font-semibold">
                            About
                        </h1>
                        <p>full stack developer building seamless web experiences
                        </p>
                        <p>exploring blockchain and ai to unlock new possibilities
                        </p>
                        <p>
                        always curious, always learning
                        </p>
                    </div >
                </div>
                <div className="relative w-[128px] h-[128px]  rounded-xl rounded-t-xl overflow-hidden">
                    <Image src={"/EeshMidha.jpg"} alt="Eesh Midha" width={600} height={600} className="rounded"/>
                    
                </div>
            </div>
        </section>
    )
}