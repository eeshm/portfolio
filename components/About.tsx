import { px } from "motion"
import Image from "next/image"
export default function About(){
    return(
        <section>
            <div className="flex justify-between items-start mb-8 pt-20">
                <div className="flex flex-col  gap-4 items-start">
                    <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                        Hi, I'm Eesh
                    </span>
                    <span className="inline-block tracking-tighter font-medium text-lg max-w-[600px] text-[#8b8b8b]">
                        21 | Punjab | Full stack developer
                    </span>
                    <div className="inline-block max-w-screen text-base  space-y-4 border  text-[#8b8b8b] pt-20">
                        <h1 className="text-white text-2xl font-normal">
                            About
                        </h1>
                        <p>full stack developer building seamless web experiences
                        </p>
                        <p>exploring blockchain and ai to unlock new possibilities
                        </p>
                        <p>
                        always curious, always curious
                        </p>
                    </div >
                </div>
                <div className="relative w-[128px] h-[128px] rounded-2xl overflow-hidden">
                    <Image src={"/EeshMidha.jpg"} alt="Eesh Midha" width={500} height={500}/>
                    
                </div>
            </div>
        </section>
    )
}