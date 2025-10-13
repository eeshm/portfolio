import Image from "next/image"
import { BlurFade } from "./ui/blur-fade"
export default function About() {
    return (
        <section>
            <BlurFade delay={0.10}>
                <div className="items-start mb-8 ">

                <div className='pt-25 md:pt-25'>
                <div className="flex font-sans justify-between">
                    <div className="flex flex-col  gap-2 items-start">
                        <span className="inline-block text-3xl font-bold sm:text-5xl xl:text-6xl/none">
                            Hi, I'm Eesh
                        </span>
                        <span className="inline-block text-base  md:text-lg max-w-[600px] text-black dark:text-white">
                            21 | Full stack developer
                        </span>
                    </div>
                    <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden">
                        <Image src={"/Picture.jpg"} alt="eesh..." width={500} height={500} className="rounded object-fill" />
                    </div>
                </div>
                </div>

                </div>
            </BlurFade>
            <div className="max-w-3xl mx-auto text-base space-y-2 md:space-y-2  text-[#6c6c6c] ">
                <BlurFade delay={0.10 * 2}>
                    <h1 className="dark:text-white text-black text-xl tracking-tight font-bold">
                        about
                    </h1>
                    <div className=" text-sm text-muted-foreground space-y-3">
                        <p>tldr; building interactive web applications</p>
                        <p>i am a full-stack developer and exploring blockchain technology</p>
                        <p>focused on building solutions that people actually use</p>
                        <p>always learning, always improving</p>
                    </div>
                </BlurFade>
            </div >
        </section>
    )
}
