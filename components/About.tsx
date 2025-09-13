import Image from "next/image"
export default function About(){
    return(
        <section>
            <div className="flex justify-between items-start mb-8 pt-15 md:pt-20">
                <div className="flex flex-col  gap-2 items-start">
                    <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Hi, I'm Eesh
                    </span>
                    <span className="inline-block text-base  md:text-lg max-w-[600px] text-black dark:text-white">
                        21 | Full stack developer
                    </span>
                </div>
                <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                    <Image src={"/Picture.jpg"} alt="eesh..." width={500} height={500} className="rounded"/>
                </div>
            </div>
            <div className="max-w-3xl mx-auto text-base space-y-2 md:space-y-2  text-[#6c6c6c] ">
                <h1 className="dark:text-white text-black text-2xl tracking-tight font-bold">
                 About
                </h1>
            <div className="text-sm md:text-base space-y-2 md:space-y-2">
                <p>full stack developer building seamless experiences
                </p>
                <p>exploring blockchain and ai to unlock new possibilities
                </p>
                <p>
                always curious, always learning
                </p>
                </div>
            </div >
        </section>
    )
}